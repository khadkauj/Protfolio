import { Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import InstagramIcon from "@material-ui/icons/Instagram";

import "./ContactPage.css";
const ContactPage = () => {
	const [name, setname] = useState();
	const [email, setemail] = useState();
	const [message, setmessage] = useState();
	function sendEmail(e) {
		e.preventDefault();
		// console.log(message);
		emailjs.sendForm("service_vxjot38", "template_3gpfcgp", e.target, "user_1MPhtu4figQf4c12vOgAc").then(
			(result) => {
				// console.log(result.text);
				setname("");
				setemail("");
				setmessage("->>>Your message has been sent, I'll get back to you asap.");
			},
			(error) => {
				// console.log(error.text);
			}
		);
	}
	return (
		<div className="contact__div">
			<Grid container spacing={3}>
				<Grid item xs={12} sm={7} md={7} lg={7} className="contact__form">
					<Grid container spacing={2}>
						<Grid item xs={12} lg={12}>
							<Typography className="tyopgraphy__contactform">Contact Form</Typography>
						</Grid>
						<form className="form_jptname" noValidate autoComplete="off" onSubmit={sendEmail}>
							<Grid item xs={12} sm={12} md={12} lg={12}>
								<input
									value={name}
									onChange={(e) => setname(e.target.value)}
									className="form_textarea "
									type="text"
									required
									placeholder="Name"
									name="name"
								/>
							</Grid>
							<Grid item xs={12} sm={12} md={12} lg={12}>
								<input
									value={email}
									onChange={(e) => setemail(e.target.value)}
									className="form_textarea "
									label="Email"
									type="email"
									required
									placeholder="Email"
									name="email"
								/>
							</Grid>
							<Grid item xs={12} sm={12} md={12} lg={12}>
								<textarea
									id="standard-required"
									label="Message..."
									rows={4}
									value={message}
									onChange={(e) => setmessage(e.target.value)}
									className="form_textarea text"
									type="text"
									required
									placeholder="Put down your message/offer/idea here..."
									name="message"
								/>
							</Grid>
							<input type="submit" className="input" required></input>
						</form>
					</Grid>
				</Grid>
				<Grid item xs={12} sm={5} md={5} lg={5}>
					<Grid container className="contact__information">
						<Typography className="tyopgraphy__contactform information">Contact Information</Typography>
						<p>
							<span>Address:</span> College Ring 3, Bremen 28759
						</p>
						<p>
							<span>Phone: </span>+49 1573 3733799
						</p>
						<p>
							<span>E-mail:</span> u.khadka@jacobs-university.de
						</p>
					</Grid>
					<Grid container className="grid_icons">
						<a href="https://www.facebook.com/ujjwal.khadka.9699523/" className="A">
							<FacebookIcon fontSize="small" className="icons" />
						</a>
						<a href="https://github.com/khadkauj" className="A">
							<GitHubIcon fontSize="small" className="icons" />
						</a>
						<a href="https://www.instagram.com/infintyuj/" className="A">
							<InstagramIcon fontSize="small" className="icons" />
						</a>
						<a href="/" className="A">
							<WhatsAppIcon fontSize="small" className="icons" />
						</a>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default ContactPage;
