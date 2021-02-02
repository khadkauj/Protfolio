import { Button } from "@material-ui/core";
import React from "react";

import "./ButtonComponent.css";
const ButtonComponent = ({ text, icon }) => {
    return (
        <Button className="Button" variant="contained" color="primary" className="Buttons" endIcon={icon ? icon : null}>
            {text ? text : null}
        </Button>
    );
};

export default ButtonComponent;
