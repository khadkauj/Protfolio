import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import AcUnitIcon from "@material-ui/icons/AcUnit";

import "./TimelineComponent.css";
const TimelineComponent = ({
    name,
    jobtitle,
    jobexperienceyear,
    birthday,
    title,
    job,
    email,
    educationName,
    instuitionName,
    instuitiondate,
    instuitiontext,
    jobtext,
}) => {
    return (
        <Timeline className="timeline">
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot></TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className="timelinecomponent">
                    {name ? (
                        <div className="div">
                            <p className="siderbar_P">Name:</p> <p className="siderbar_P2">{name}</p>
                        </div>
                    ) : null}
                    {birthday ? (
                        <div className="div">
                            <p className="siderbar_P">Birthday:</p> <p className="siderbar_P2"> {birthday}</p>
                        </div>
                    ) : null}
                    {job ? (
                        <div className="div">
                            <p className="siderbar_P">Job:</p> <p className="siderbar_P2"> {job}</p>
                        </div>
                    ) : null}
                    {title ? (
                        <div className="div">
                            <p className="siderbar_P">Title:</p> <p className="siderbar_P2"> {title}</p>
                        </div>
                    ) : null}
                    {email ? (
                        <div className="div">
                            <p className="siderbar_P">Email: </p> <p className="siderbar_P2">{email}</p>
                        </div>
                    ) : null}
                    {educationName ? (
                        <div className="div">
                            <p className="siderbar_P">Education: </p> <p className="siderbar_P2">{educationName}</p>
                        </div>
                    ) : null}
                    {jobtitle ? <p className="siderbar_P">{jobtitle}</p> : null}
                    {jobexperienceyear ? <p> {jobexperienceyear}</p> : null}
                    {jobtext?.map((job) => (
                        <p className="p10l jobtext"> {job}</p>
                    ))}
                    {instuitionName ? <p className="siderbar_P"> {instuitionName}</p> : null}
                    {instuitiondate ? <p> {instuitiondate}</p> : null}
                    {instuitiontext ? <p className="p10l"> {instuitiontext}</p> : null}
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
};

export default TimelineComponent;
