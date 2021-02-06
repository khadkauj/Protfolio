import { Typography } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";

import "./FooterComponent.css";
const FooterComponent = () => {
    return (
        <div className="footer">
            <div className="footer__left">
                <Typography className="typo">Your Name</Typography>
            </div>
            <div className="footer__right">
                <p> &copy; Ujjwal Khadka, 2021, Jacobs University</p>
            </div>
        </div>
    );
};

export default FooterComponent;
