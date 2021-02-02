import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ProfileSidebarComponent from "./Components/ProfileSidebarComponent";
import HeaderComponent from "./Components/HeaderComponent";
function App() {
    return (
        <div className="App">
            <Container>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={12} md={4} lg={3}>
                        <ProfileSidebarComponent />
                    </Grid>
                    <Grid item xs sm md lg style={{ backgroundColor: "red" }}>
                        <Router>
                            <HeaderComponent />
                            <Switch>
                                <Route path="/about"></Route>
                                <Route path="/users"></Route>
                                <Route path="/"></Route>
                            </Switch>
                        </Router>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default App;
