import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import { Link } from 'react-router-dom';
interface HeaderProps {
  currentPath: string;
}

class Header extends React.Component<HeaderProps> {
  render() {
    console.log(this.props.currentPath);
    return (
      <Navbar bg="transparent" expand="lg">
        <Link to="/home" className="text-dark mr-3">
          <img className="image" src="logo.png" />
        </Link>
        <NavbarToggle aria-controls="basic-navbar-nav" />
        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link
              to="/about"
              className={`text-dark mr-3 link ${
                this.props.currentPath.includes('/about') ? 'active' : ''
              }`}
            >
              About
            </Link>

            <Link
              to="/team"
              className={`text-dark mr-3 link ${
                this.props.currentPath.includes('/team') ? 'active' : ''
              }`}
            >
              Team
            </Link>
          </Nav>
        </NavbarCollapse>
      </Navbar>
    );
  }
}
export default Header;
