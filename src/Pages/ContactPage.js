import { Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import ButtonComponent from "../Components/ButtonComponent";
import emailjs from "emailjs-com";

import "./ContactPage.css";
const ContactPage = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [message, setmessage] = useState("");
    function sendEmail(e) {
        e.preventDefault();
        console.log(message);
        // emailjs.sendForm("service_vxjot38", "template_3gpfcgp", e.target, "user_1MPhtu4figQf4c12vOgAc").then(
        //     (result) => {
        //         console.log(result.text);
        //     },
        //     (error) => {
        //         console.log(error.text);
        //     }
        // );
    }
    return (
        <div className="contact__div">
            <Grid container spacing={3}>
                <Grid item xs={12} sm={7} md={7} lg={7} className="contact__form">
                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={12}>
                            <Typography className="tyopgraphy__contactform">Contact Form</Typography>
                        </Grid>
                        {/* <form className="" noValidate autoComplete="off"> */}
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <TextField
                                id="standard-required"
                                label="Name"
                                value={name}
                                onChange={(e) => setname(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <TextField
                                id="standard-required"
                                label="E-mail"
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={12}>
                            <TextField
                                id="standard-required"
                                label="Message..."
                                multiline
                                rows={4}
                                value={message}
                                onChange={(e) => setmessage(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={12}>
                            <button type="submit" value="send" onClick={sendEmail}>
                                Submit
                            </button>
                        </Grid>

                        {/* </form> */}
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={5} md={5} lg={5}>
                    <Grid container className="contact__information">
                        <Typography className="tyopgraphy__contactform information">Contact Information</Typography>
                        <p>
                            <span>Address:</span> 107727 Santa Monica Boulevard Los Angeles
                        </p>
                        <p>
                            <span>Phone: </span>+38 012-3456-7890
                        </p>
                        <p>
                            <span>Job:</span> Freelancer
                        </p>
                        <p>
                            <span>E-mail:</span> chris@domain.com
                        </p>
                        <p>
                            <span>Skype:</span> chrisjohnson85
                        </p>
                        <div>
                            <p>user icons here</p>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default ContactPage;
