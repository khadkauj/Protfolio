import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import ButtonComponent from "./ButtonComponent";
import HomeIcon from "@material-ui/icons/Home";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TelegramIcon from "@material-ui/icons/Telegram";
import "./HeaderComponent.css";
const HeaderComponent = (props) => {
	const location = useLocation();
	// console.log("id is: ", location.pathname);

	return (
		<Navbar bg="light" expand="md lg" className="nav__container__navbar">
			<Navbar.Brand as={NavLink} to="/home">
				<HomeIcon fontSize="small" className="home__icon" />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link
						as={NavLink}
						to="/Resume"
						activeStyle={{
							fontWeight: "bold",
						}}
						className={location.pathname.slice(1) === "Resume" ? "navlink active" : "navlink"}
					>
						Resume
					</Nav.Link>
					<Nav.Link
						as={NavLink}
						to="/Protfolio"
						activeStyle={{
							fontWeight: "bold",
						}}
						className={location.pathname.slice(1) === "Projects" ? "navlink active" : "navlink"}
					>
						Projects
					</Nav.Link>
					<Nav.Link
						as={NavLink}
						to="/Blogs"
						activeStyle={{
							fontWeight: "bold",
						}}
						className={location.pathname.slice(1) === "Blogs" ? "navlink active" : "navlink"}
					>
						Blogs
					</Nav.Link>
					<Nav.Link
						as={NavLink}
						to="/Contact"
						activeStyle={{
							fontWeight: "bold",
						}}
						className={location.pathname.slice(1) === "Contact" ? "navlink active" : "navlink"}
					>
						Contact
					</Nav.Link>
				</Nav>
				<div className="button">
					<Link to="/Contact" className="A">
						<ButtonComponent text={"Hire me"} icon={<TelegramIcon />} />
					</Link>
				</div>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default HeaderComponent;
