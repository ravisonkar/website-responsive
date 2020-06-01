import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import { Link } from 'react-router-dom';
interface IHeaderProps {
  currentPath: string;
}
class Header extends React.Component<IHeaderProps> {
  render() {
    return (
      <Navbar bg="transparent" expand="lg">
        <Link to="/" className="text-dark mr-3">
          <img className="image" src="assets/image/logo.png" />
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
              to="userform"
              className={`text-dark mr-3 link ${
                this.props.currentPath.includes('/userform') ? 'active' : ''
              }`}
            >
              Userform
            </Link>
            <Link
              to="list"
              className={`text-dark mr-3 link ${
                this.props.currentPath.includes('/list') ? 'active' : ''
              }`}
            >
              List
            </Link>
            {/* <Link
              to="/user"
              className={`text-dark mr-3 link ${
                this.props.currentPath.includes('/user') ? 'active' : ''
              }`}
            >
              user
            </Link> */}
          </Nav>
        </NavbarCollapse>
      </Navbar>
    );
  }
}
export default Header;
