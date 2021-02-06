import React, { useState } from "react";
import { Button, Card, CardActionArea, CardActions, CardContent, Grid } from "@material-ui/core";

import "./ProtfolioPage.css";
import { Tabs } from "@material-ui/core";
import { Tab } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import details from "../MydetailsObject";
import { Typography } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
const ProtfolioPage = () => {
    const [tabValue, settabValue] = useState("All");
    console.log(tabValue);
    return (
        <Grid container className="protfolio__grid">
            <Grid item xs={12}>
                <h4>Protfolio</h4>
                <hr className="hr" />
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <Paper square position="static">
                        <Tabs
                            indicatorColor="primary"
                            textColor="primary"
                            value={tabValue}
                            onChange={(e, newvalue) => settabValue(newvalue)}
                            variant="scrollable"
                            scrollButtons="on"
                            aria-label="scrollable force tabs example"
                        >
                            <Tab label="All" value="All" />
                            <Tab label="Fullstack" value="Fullstack" />
                            <Tab label="Frontend" value="Frontend" />
                            <Tab label="Backend" value="Backend" />
                        </Tabs>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={4} className="projects__grid">
                {details?.projects?.map((project, i) => (
                    <>
                        {tabValue === project?.tag || tabValue === "All" ? (
                            <Grid item xs={12} sm={6} md={6} lg={4}>
                                <Card className="card">
                                    <CardActionArea>
                                        <figure className="card_figure">
                                            <img src={project.image + i} alt="Trulli" className="card__img" />
                                            <figcaption className="figure_caption">
                                                <span className="figure_title">{project.title}</span>
                                                <br />
                                                <span className="figure_description">{project.description}</span>
                                            </figcaption>
                                        </figure>
                                    </CardActionArea>
                                    <CardActions classname="card__actions">
                                        <Button classname="card__actions" size="small" color="primary">
                                            Share
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ) : null}
                    </>
                ))}
            </Grid>
        </Grid>
    );
};

export default ProtfolioPage;
