import { Grid } from "@material-ui/core";
import React from "react";
import details from "../MydetailsObject";
import Icon from "@material-ui/core/Icon";

import "./AboutMePage.css";
import { Typography } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import TimelineDot from "@material-ui/lab/TimelineDot";
const AboutMePage = () => {
    return (
        <div className="AboutMe">
            {/* ABOUT ME */}
            <div className="section__div">
                <h2 className="my__services">About Me</h2>
                <hr className="hr" />
                <Grid container>
                    <Grid item xs={12}>
                        <p className="aboutme__text">
                            Started earnest brother believe an exposed so. Me he believing daughters if forfeited at
                            furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor
                            themselves age introduced frequently use unsatiable devonshire get. They why quit gay cold
                            rose deal park. One same they four did ask busy. Reserved opinions fat him nay position.{" "}
                            <br /> <br /> Breakfast as zealously incommode do agreeable furniture. One too nay led fanny
                            allow plate. Quick six blind smart out burst. Perfectly on furniture dejection determine my
                            depending an to. Add short water court fat. Her bachelor honoured perceive securing but
                            desirous ham required. Questions deficient acuteness to engrossed as. Entirely led ten
                            humoured greatest and yourself. Besides ye country on observe. She continue appetite
                            endeavor she judgment interest the met. For she surrounded motionless fat resolution may.
                        </p>
                    </Grid>
                </Grid>
            </div>

            {/* MY SERVICES */}
            <div className="service__div">
                <h2 className="my__services">My Services</h2>
                <hr className="hr" />
                <Grid container spacing={5}>
                    {details.services.map((service) => (
                        <Grid item xs={12} sm={6} md={3} lg={3}>
                            <div className="service_grid">
                                <Icon className="service__icon">{service.icon}</Icon>
                                <p className="service_main_text">{service.title}</p>
                                <p className="service__text">{service.titleText}</p>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </div>

            {/* MY SKILLS */}
            <Paper className="skills__div">
                <Grid container spacing={5} className="skills_grid">
                    {details.skills.map((skill) => (
                        <Grid item xs={12} sm={6} md={3} lg={3}>
                            <strong>{skill.name}</strong>
                            {skill.technologies.map((technology) => (
                                <div className="technology__">
                                    <TimelineDot className="technology__dot" />
                                    <code>{technology}</code>
                                </div>
                            ))}
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </div>
    );
};

export default AboutMePage;
