import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import details from "../MydetailsObject";

import "./TimelineComponent.css";
const TimelineComponent = ({
    name,
    jobtitle,
    jobexperienceyear,
    birthday,
    title,
    job,
    email,
    instuitionName,
    instuitiondate,
    instuitiontext,
    jobtext,
}) => {
    return (
        <Timeline>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot></TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className="timelinecomponent">
                    {name ? <p>Name: {name}</p> : null}
                    {birthday ? <p>Birthday: {birthday}</p> : null}
                    {job ? <p>Job: {job}</p> : null}
                    {title ? <p>Title: {title}</p> : null}
                    {email ? <p>Email: {email}</p> : null}
                    {jobtitle ? <p>{jobtitle}</p> : null}
                    {jobexperienceyear ? <p> {jobexperienceyear}</p> : null}
                    {jobtext ? <p> {jobtext}</p> : null}
                    {instuitionName ? <p> {instuitionName}</p> : null}
                    {instuitiondate ? <p> {instuitiondate}</p> : null}
                    {instuitiontext ? <p> {instuitiontext}</p> : null}
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
};

export default TimelineComponent;
