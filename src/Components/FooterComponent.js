import { Typography } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";

import "./FooterComponent.css";
const FooterComponent = () => {
	return (
		<div className="footer">
			<p className="footer__left">UJJWAL KHADKA</p>
			<p className="footer_end">Infinity, The world is ours.</p>
		</div>
	);
};

export default FooterComponent;
