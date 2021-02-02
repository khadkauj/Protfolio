import React from "react";
import { NavLink } from "react-router-dom";
import ButtonComponent from "./ButtonComponent";
import HomeIcon from "@material-ui/icons/Home";
import { Navbar, Button, Form, Nav, NavDropdown, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./HeaderComponent.css";
const HeaderComponent = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">
                    <HomeIcon fontSize="large" className="home__icon" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={NavLink} to="/home">
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/link">
                            Link
                        </Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default HeaderComponent;
