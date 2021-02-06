import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ProfileSidebarComponent from "./Components/ProfileSidebarComponent";
import HeaderComponent from "./Components/HeaderComponent";
import ResumePage from "./Pages/ResumePage";
import FooterComponent from "./Components/FooterComponent";
import AboutMePage from "./Pages/AboutMePage";
import ContactPage from "./Pages/ContactPage";
import ProtfolioPage from "./Pages/ProtfolioPage";
import BlogPage from "./Pages/BlogPage";
import AddGuestArticle from "./Pages/AddGuestArticle";
function App() {
    return (
        <div className="App">
            <Container>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <ProfileSidebarComponent />
                    </Grid>
                    <Grid item xs sm={12} md={9} lg={9}>
                        <Router>
                            <HeaderComponent />
                            <Switch>
                                <Route path="/Home">
                                    <AboutMePage />
                                </Route>
                                <Route path="/Resume">
                                    <ResumePage />
                                </Route>
                                <Route path="/Contact">
                                    <ContactPage />
                                </Route>
                                <Route path="/Protfolio">
                                    <ProtfolioPage />
                                </Route>
                                <Route path="/Blogs">
                                    <BlogPage />
                                </Route>
                                <Route path="/GuestArticle">
                                    <AddGuestArticle />
                                </Route>
                                <Route exact path="/">
                                    <AboutMePage />
                                </Route>
                            </Switch>
                            <FooterComponent />
                        </Router>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default App;
