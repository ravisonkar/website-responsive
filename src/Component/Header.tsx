import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import IUser from '../classes/IUser';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import { Link } from 'react-router-dom';
interface HeaderProps {
  currentPath: string;
  user_name: string;
}
class Header extends React.Component<HeaderProps> {
  render() {
    return (
      <Navbar bg="transparent" expand="lg">
        <Link to="/" className="text-dark mr-3">
          <img className="image" src="assets/image/logo.png" />
          <h6>{this.props.user_name}</h6>
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
              to="/employees"
              className={`text-dark mr-3 link ${
                this.props.currentPath.includes('/employees') ? 'active' : ''
              }`}
            >
              Employees
            </Link>
            <Link
              to="/login"
              className={`text-dark mr-3 link ${
                this.props.currentPath.includes('/login') ? 'active' : ''
              }`}
            >
              Login
            </Link>
          </Nav>
        </NavbarCollapse>
      </Navbar>
    );
  }
}
export default Header;
