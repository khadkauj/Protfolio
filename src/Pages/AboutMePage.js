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
							Final year CS major student here at Jacobs University Bremen.<br /> <br />
							Tynag Tyang Dhish!!! <br /> <br /> In der Freizeit liest Philosophien/Gedichte. Denkt an leckeres Essen.
							<br /> <br /> A Kasturi, of both worlds.
						</p>
					</Grid>
				</Grid>
			</div>

			{/* MY SERVICES */}
			{/* <div className="service__div">
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
            </div> */}

			{/* MY SKILLS */}
			<Paper className="skills__div" elevation={5}>
				<h2 className="my__services">Skills</h2>
				<hr className="hr" />
				<Grid container className="skills_grid">
					{details.skills.map((skill) => (
						<Grid item xs={12} sm={6} md={4} lg={4}>
							<h4 className="skill__name">
								<code>{skill.name}</code>
							</h4>
							{skill.technologies.map((technology) => (
								<div className="technology__">
									<TimelineDot className="technology__dot" />
									<p>{technology}</p>
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
