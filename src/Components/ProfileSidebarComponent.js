import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import profile from "../assests/profile.jpg";
import GetAppIcon from "@material-ui/icons/GetApp";
import TimelineComponent from "./TimelineComponent";
import ButtonComponent from "./ButtonComponent";
import details from "../MydetailsObject";

import "./ProfileSidebarComponent.css";
const ProfileSidebarComponent = () => {
	const [color, setcolor] = useState("");
	useEffect(() => {
		// console.log("local: ", localStorage.getItem("--main-color"));
		document.documentElement.style.setProperty(
			"--main-color",
			localStorage.getItem("--main-color") ? localStorage.getItem("--main-color") : "#ffc520"
		);
	}, [color]);

	return (
		<div className="profile">
			<div className="square_color">
				<div
					className="square blue"
					onClick={() => {
						localStorage.setItem("--main-color", "#00b4d9");
						setcolor("blue");
					}}
				></div>
				<div
					className="square red"
					onClick={() => {
						localStorage.setItem("--main-color", "#d81300");
						setcolor("red");
					}}
				></div>
				<div
					className="square green"
					onClick={() => {
						localStorage.setItem("--main-color", "#52bf00");
						setcolor("green");
					}}
				></div>
				<div
					className="square yellow"
					onClick={() => {
						localStorage.setItem("--main-color", "#ffc520");
						setcolor("yellow");
					}}
				></div>
			</div>
			<div className="my__details">
				<Typography variant="h6">{details.name}</Typography>
				<span className="my__details__span">{details.title}</span>
			</div>

			<figure className="figure">
				<img
					className="img"
					src={profile}
					alt="profilepic"
				/>
			</figure>
			<div>
				<TimelineComponent name={details.name} />
				<TimelineComponent job={details.job} />
				<TimelineComponent title={details.title} />
				<TimelineComponent email={details.email} />
				<TimelineComponent educationName={details.educationName} />
			</div>
			<div className="__Button">
				<a
					href="https://docs.google.com/document/d/1OBCxEpgb2zPg80fUcXqCWj7URz4C1uC1enZBDsLUPi0/export?format=pdf"
					className="__Button_a"
				>
					<ButtonComponent text={"Download CV"} icon={<GetAppIcon />} />
				</a>
			</div>
		</div>
	);
};

export default ProfileSidebarComponent;
