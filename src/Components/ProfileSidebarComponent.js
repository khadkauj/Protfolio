import React from "react";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import TimelineComponent from "./TimelineComponent";
import ButtonComponent from "./ButtonComponent";
import details from "../MydetailsObject";

import "./ProfileSidebarComponent.css";

const ProfileSidebarComponent = () => {
    return (
        <div className="profile">
            <div>
                <Typography variant="h6" gutterBottom>
                    {details.name}
                </Typography>
                <span>{details.title}</span>
            </div>

            <figure className="figure">
                <img
                    className="img"
                    src="https://i.pinimg.com/originals/87/d8/c7/87d8c77d7153f8f3e213effa9fc79eb4.jpg"
                    alt="profilepic"
                />
            </figure>
            <div>
                <TimelineComponent name={details.name} />
                <TimelineComponent job={details.job} />
                <TimelineComponent title={details.title} />
                <TimelineComponent email={details.email} />
            </div>
            <div className="__Button">
                <ButtonComponent text={"Download CV"} icon={<GetAppIcon />} />
            </div>
        </div>
    );
};

export default ProfileSidebarComponent;
