import { Grid } from "@material-ui/core";
import React from "react";
import TimelineComponent from "../Components/TimelineComponent";
import details from "../MydetailsObject";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineDot from "@material-ui/lab/TimelineDot";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";

import "./ResumePage.css";
import TimelineContent from "@material-ui/lab/TimelineContent";
const ResumePage = () => {
    return (
        <div className="resume">
            <div>
                <h2 className="h2">Resume</h2>
                <hr className="hr" />
            </div>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Timeline>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot className="timelinedot">
                                    <WorkIcon fontSize={"large"} />
                                </TimelineDot>
                                <TimelineConnector className="timeline__connector" />
                            </TimelineSeparator>
                            <TimelineContent className="timelinecomponent">
                                <strong> Working Experience</strong>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                    {details.workExperience.map((work) => (
                        <TimelineComponent
                            className="timeline__list"
                            jobtitle={work.jobtitle}
                            jobexperienceyear={work.jobexperienceyear}
                            jobtext={work.jobtext}
                        />
                    ))}
                </Grid>
                <Grid item xs>
                    <Timeline>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot className="timelinedot">
                                    <SchoolIcon fontSize="large" />
                                </TimelineDot>
                                <TimelineConnector className="timeline__connector" />
                            </TimelineSeparator>
                            <TimelineContent className="timelinecomponent">
                                <strong> Education</strong>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                    {details.education.map((education) => (
                        <TimelineComponent
                            instuitionName={education.instuitionName}
                            instuitiondate={education.instuitiondate}
                            instuitiontext={education.instuitiontext}
                        />
                    ))}
                </Grid>
            </Grid>
        </div>
    );
};

export default ResumePage;
