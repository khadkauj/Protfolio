import { Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import React from "react";
import ButtonComponent from "../Components/ButtonComponent";

import "./ContactPage.css";
const ContactPage = () => {
    return (
        <div className="contact__div">
            <Grid container spacing={5}>
                <Grid item xs={12} lg={7} className="contact__form">
                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={12}>
                            <Typography className="tyopgraphy__contactform">Contact Form</Typography>
                        </Grid>
                        {/* <form className="" noValidate autoComplete="off"> */}
                        <Grid item xs={12} lg={6}>
                            <TextField id="standard-required" label="Name" />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <TextField id="standard-required" label="E-mail" />
                        </Grid>
                        <Grid item xs={12} lg={12}>
                            <TextField id="standard-required" label="Message..." multiline rows={4} />
                        </Grid>
                        <Grid item xs={12} lg={12}>
                            <ButtonComponent text="Submit" />
                        </Grid>

                        {/* </form> */}
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={5}>
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
