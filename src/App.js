import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, HashRouter } from "react-router-dom";
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
import ArticleRenderPage from "./Pages/ArticleRenderPage";
function App() {
	return (
		<div className="App">
			<Router>
				<Container>
					<Grid container spacing={5}>
						<HashRouter>
							<Route exact path="/Protfolio/Home">
								<Grid item xs={12} sm={12} md={4} lg={4}>
									<ProfileSidebarComponent />
								</Grid>
								<Grid item xs sm={12} md={8} lg={8}>
									<HeaderComponent />
									<AboutMePage />
									<FooterComponent />
								</Grid>
							</Route>
							<Route exact path="/Protfolio/Resume">
								<Grid item xs={12} sm={12} md={4} lg={4}>
									<ProfileSidebarComponent />
								</Grid>
								<Grid item xs sm={12} md={8} lg={8}>
									<HeaderComponent />
									<ResumePage />
									<FooterComponent />
								</Grid>
							</Route>
							<Route exact path="/Protfolio/Contact">
								<Grid item xs={12} sm={12} md={4} lg={4}>
									<ProfileSidebarComponent />
								</Grid>
								<Grid item xs sm={12} md={8} lg={8}>
									<HeaderComponent />
									<ContactPage />
									<FooterComponent />
								</Grid>
							</Route>
							<Route exact path="/Protfolio/Portfolio">
								<Grid item xs={12} sm={12} md={4} lg={4}>
									<ProfileSidebarComponent />
								</Grid>
								<Grid item xs sm={12} md={8} lg={8}>
									<HeaderComponent />
									<ProtfolioPage />
									<FooterComponent />
								</Grid>
							</Route>
							<Route exact path="/Protfolio/Blogs">
								<Grid item xs={12} sm={12} md={4} lg={4}>
									<ProfileSidebarComponent />
								</Grid>
								<Grid item xs sm={12} md={8} lg={8}>
									<HeaderComponent />
									<BlogPage />
									<FooterComponent />
								</Grid>
							</Route>
							<Route exact path="/Protfolio/GuestArticle">
								<Grid item xs={12} sm={12} md={4} lg={4}>
									<ProfileSidebarComponent />
								</Grid>
								<Grid item xs sm={12} md={8} lg={8}>
									<HeaderComponent />
									<AddGuestArticle />
									<FooterComponent />
								</Grid>
							</Route>
							<Route exact path="/Protfolio/Blogs/Guests/:id">
								<Grid item xs={12} ms={12} md={12} lg={12}>
									<ArticleRenderPage />
								</Grid>
								<Grid item xs={12} ms={12} md={12} lg={12}>
									<FooterComponent />
								</Grid>
							</Route>
							<Route exact path="/">
								<Grid item xs={12} sm={12} md={4} lg={4}>
									<ProfileSidebarComponent />
								</Grid>
								<Grid item xs sm={12} md={8} lg={8}>
									<HeaderComponent />
									<AboutMePage />
									<FooterComponent />
								</Grid>
							</Route>
						</HashRouter>
					</Grid>
				</Container>
			</Router>
		</div>
	);
}

export default App;

//    <Grid container spacing={5}>
//                         <Grid item xs={12} sm={12} md={4} lg={4}>
//                             <ProfileSidebarComponent />
//                         </Grid>
//                         <Grid item xs sm={12} md={9} lg={9}>
//                             <HeaderComponent />
