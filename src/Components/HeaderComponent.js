import React from "react";
import { NavLink } from "react-router-dom";
import ButtonComponent from "./ButtonComponent";
import HomeIcon from "@material-ui/icons/Home";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TelegramIcon from "@material-ui/icons/Telegram";
import "./HeaderComponent.css";
const HeaderComponent = (props) => {
    const id = props?.location?.pathname;
    console.log(id);
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
                            color: "#ffc500",
                        }}
                        className="navlink"
                    >
                        Resume
                    </Nav.Link>
                    <Nav.Link
                        as={NavLink}
                        to="/Protfolio"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#ffc500",
                        }}
                        className="navlink"
                    >
                        Projects
                    </Nav.Link>
                    <Nav.Link
                        as={NavLink}
                        to="/Blogs"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#ffc500",
                        }}
                        className="navlink"
                    >
                        Blogs
                    </Nav.Link>
                    <Nav.Link
                        as={NavLink}
                        to="/Contact"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#ffc500",
                        }}
                        className="navlink"
                    >
                        Contact
                    </Nav.Link>
                </Nav>
                <div className="button">
                    <ButtonComponent text={"Hire me"} icon={<TelegramIcon />} />
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default HeaderComponent;
