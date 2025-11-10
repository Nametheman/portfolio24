import { NextResponse } from "next/server";

/**
 * GitHub Commits API Route
 *
 * Fetches user contribution statistics from GitHub's GraphQL API.
 * Returns the total contributions (commits, PRs, issues) for the default period
 * (typically the last year, matching GitHub's contribution graph).
 *
 * Required environment variables:
 * - GITHUB_TOKEN: GitHub Personal Access Token with 'read:user' scope
 * - GITHUB_USERNAME: (optional) GitHub username, defaults to "Nametheman"
 *
 * Token setup:
 * 1. Go to GitHub Settings > Developer settings > Personal access tokens
 * 2. Generate a token with 'read:user' scope
 * 3. Add to .env.local as GITHUB_TOKEN=your_token_here
 */
export async function GET() {
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  const GITHUB_USERNAME = process.env.GITHUB_USERNAME || "Nametheman";

  // Validate token
  if (!GITHUB_TOKEN) {
    console.error("GITHUB_TOKEN is not set in environment variables");
    return NextResponse.json(
      { totalCommits: 0, error: "GitHub token not configured" },
      { status: 500 }
    );
  }

  // GraphQL query to get user contributions
  // Querying without date range uses GitHub's default (typically last year of contributions)
  // This is the most reliable approach per GitHub's API documentation
  const query = `
    query($username: String!) {
      user(login: $username) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
          }
        }
      }
    }
  `;

  const variables = {
    username: GITHUB_USERNAME,
  };

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        "Content-Type": "application/json",
        "User-Agent": "portfolio-stats", // GitHub recommends identifying your app
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    // Check if HTTP request was successful
    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        `GitHub API error: ${response.status} ${response.statusText}`,
        errorText
      );
      return NextResponse.json(
        {
          totalCommits: 0,
          error: `GitHub API error: ${response.status}`,
        },
        { status: response.status }
      );
    }

    const json = await response.json();

    // Check for GraphQL errors (GitHub returns errors in the response body)
    if (json.errors) {
      console.error("GraphQL errors:", JSON.stringify(json.errors, null, 2));
      const errorMessage = json.errors[0]?.message || "GraphQL error";

      // Handle specific error cases
      if (errorMessage.includes("Could not resolve to a User")) {
        return NextResponse.json(
          {
            totalCommits: 0,
            error: `User "${GITHUB_USERNAME}" not found`,
          },
          { status: 404 }
        );
      }

      return NextResponse.json(
        {
          totalCommits: 0,
          error: errorMessage,
        },
        { status: 500 }
      );
    }

    // Check if user exists
    if (!json.data?.user) {
      console.error(`User "${GITHUB_USERNAME}" not found`);
      return NextResponse.json(
        {
          totalCommits: 0,
          error: `User "${GITHUB_USERNAME}" not found`,
        },
        { status: 404 }
      );
    }

    // Safely extract total contributions
    // Note: This returns contributions (commits, PRs, issues) for the default period
    // which is typically the last year, matching GitHub's contribution graph
    const totalContributions =
      json.data.user.contributionsCollection?.contributionCalendar
        ?.totalContributions ?? 0;

    return NextResponse.json(
      { totalCommits: totalContributions },
      {
        status: 200,
        headers: {
          "Cache-Control":
            "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching GitHub contributions:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      {
        totalCommits: 0,
        error: `Internal server error: ${errorMessage}`,
      },
      { status: 500 }
    );
  }
}
