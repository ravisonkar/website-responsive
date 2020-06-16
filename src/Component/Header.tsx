import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import { IsaveUser } from '../classes/IsaveUser';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import { Link } from 'react-router-dom';
interface HeaderProps {
  currentPath: string;
  user: IsaveUser;
}
class Header extends React.Component<HeaderProps> {
  render() {
    console.log(this.props.user);
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
              to="/login"
              className={`text-dark mr-3 link ${
                this.props.currentPath.includes('/login') ? 'active' : ''
              }`}
            >
              Login
            </Link>
            <Link
              to="/add"
              className={`text-dark mr-3 link ${
                this.props.currentPath.includes('/add') ? 'active' : ''
              }`}
            >
              Add
            </Link>
            <div>
              <img src={this.props.user.url} className=" w-25" />
            </div>
          </Nav>
        </NavbarCollapse>
      </Navbar>
    );
  }
}
export default Header;
