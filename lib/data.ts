import zustand from "@/assets/images/zustand.png";
import redux from "@/assets/images/redux.png";
import tailwind from "@/assets/images/tailwind.png";
import tanstack from "@/assets/images/tanstack.png";
import styledComponents from "@/assets/images/styled-components.png";

export const experiences = [
  {
    name: "NOEMDEK LTD.",
    startDate: "January 2024",
    endDate: "Current",
    achievements: [
      "Lead the Frontend Development Team to see to the successful completion of the company's projects.",
      "Managed 2 different projects with a focus on React and Next JS. Managed to get them launched in 2024.",
      "Actively contributing to the startup's development in the tech world through innovative ideas.",
    ],
    direction: "right",
  },
  {
    name: "TM3O GLOBAL SOLUTIONS",
    startDate: "March 2022",
    endDate: "December 2023",
    achievements: [
      "Worked on about 8 Projects with TM30. All of which are currently live and solving problems",
      "Contributed to the development of a banking solution that has generated over 2 billion naira in revenue.",
      "Taught Interns and other Juinior Developers how to solve problems with React and Next JS.",
    ],
    direction: "left",
  },

  {
    name: "SWATINI POWER LTD.",
    startDate: "June 2021",
    endDate: "January 2022",
    achievements: [
      "Spearheaded two Projects with swatini power for the business web presence. These two  web applications are currently live.",
      "Researched and used standard SEO practices that got the website indexed 4th on google in Lagos.",
      "Added new features to the existing platform with React and Next JS.",
    ],
    direction: "right",
  },
];

export const personalProjects = [
  {
    name: "BreakSeek",
    video: "/videos/breakseek.mp4",
    url: "https://breakseek.com",
    github: "https://github.com/nametheman",
    details:
      "BreakSeek is a fun, easy-to-navigate platform that helps you discover awesome jobs, internships, scholarships, and graduate trainee programs tailored to your skills and interests. Whether you're just starting out or looking to make a breakthrough in your career, BreakSeek connects you to opportunities across various industries, from tech to tourism. Plus, they're expanding with a “Learn a Skill” feature coming soon to help boost your career even further. It’s your go-to for finding the next big step in your professional journey!",
    tools: ["Next.js", "Typescript", "Tailwind CSS", "Shadcn UI", "Sanity CMS"],
  },
  {
    name: "Cowork",
    video: "/videos/cowork.mp4",
    url: "https://cowork-ashen.vercel.app/",
    github: "https://github.com/nametheman",
    details:
      "Cowork is a dynamic platform that offers innovative coworking spaces designed to boost creativity and collaboration. Whether you're a solo entrepreneur or part of a larger team, they provide flexible membership options, transparent pricing, and modern work environments. You can explore the spaces through virtual tours, stay connected with their community, and enjoy networking and productivity events. It's not just about finding a workspace—it's about joining a thriving community that helps you succeed!",
    tools: ["Next.js", "Typescript", "Tailwind CSS", "Zustand", "Next Auth"],
  },
  {
    name: "EmmyCodesIt v1",
    video: "/videos/portfolio1.mp4",
    url: "https://www.emmycodesit.xyz/",
    github: "https://github.com/nametheman",
    details:
      "EmmyCodesIt is my first personal portfolio website by Emmanuel Owolabi, showcasing his expertise as a front-end developer. It highlights his projects, skills, and professional journey, along with links to his work and contact information. It’s a creative space for displaying his coding talents and the solutions he builds for the web. ",
    tools: ["React.js", "Javascript", "Styled Components"],
  },
  {
    name: "Inkverse",
    video: "/videos/inkverse.mp4",
    url: "https://inkverse.vercel.app/",
    github: "https://github.com/nametheman",
    details:
      "Inkverse is a sleek platform designed to enhance creativity and artistic expression. It offers tools and features that help users engage with their projects in a visually rich and interactive way. Whether you're working on personal creations or collaborating with others, Inkverse provides a seamless and inspiring environment to bring your ideas to life.",
    tools: [
      "Next.js",
      "Typescript",
      "Shadcn UI",
      "Google Books",
      "Tailwind",
      "Zustand",
    ],
  },
];

export const skillSet = [
  {
    name: "Frontend Development",
    tools: [
      {
        name: "HTML",
        percentage: 90,
      },
      {
        name: "CSS",
        percentage: 80,
      },
      {
        name: "Javascript",
        percentage: 80,
      },
      {
        name: "Typescript",
        percentage: 80,
      },
      {
        name: "React",
        percentage: 90,
      },
      {
        name: "Next JS",
        percentage: 90,
      },
      {
        name: "Angular JS",
        percentage: 30,
      },
    ],
    otherTools: [
      { name: "Zustand", icon: zustand },
      { name: "Redux", icon: redux },
      { name: "Tailwind Css", icon: tailwind },
      { name: "Tanstack Query", icon: tanstack },
      { name: "styled-components", icon: styledComponents },
    ],
  },

  {
    name: "Mobile Development",
    tools: [
      {
        name: "React Native",
        percentage: 80,
      },

      {
        name: "Skia",
        percentage: 40,
      },
      { name: "ReAnimated", percentage: 40 },
    ],
    otherTools: [],
  },
];
