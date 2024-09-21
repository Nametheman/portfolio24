import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

type Timelineprops = {
  data: any[];
};
export default function AlternateReverseTimeline({ data }: Timelineprops) {
  return (
    <Timeline position="alternate-reverse">
      {data &&
        data.map((item: any) => {
          return (
            <TimelineItem key={item.name}>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                {" "}
                <div className="py-8">
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="font-medium">Frontend Engineer</p>
                  <p className="text-xs">
                    {item.startDate} - {item.endDate}
                  </p>
                  <ul className="list-none mt-3 list-item">
                    {item.achievements.map((achievement: any) => {
                      return (
                        <li className="mb-2 text-sm" key={achievement}>
                          {achievement}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </TimelineContent>
            </TimelineItem>
          );
        })}
    </Timeline>
  );
}
