import React, { Component } from 'react'
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import { Link} from "react-router-dom"

class Navigation extends Component {
    render () {
        return (
            <Navbar color="light" light expand="md">
                    <NavbarBrand> My Dashboard 
                    </NavbarBrand>
                <Nav navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/primary">Primary </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/secondary">Secondary </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>


        )
    }
}

export default Navigation