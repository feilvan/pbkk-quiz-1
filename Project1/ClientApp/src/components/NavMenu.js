import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import {
    FaArrowUp,
    FaArrowDown,
    FaUndo,
    FaExternalLinkAlt,
} from "react-icons/fa";

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header>
            <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white" light>
                <Container className="w-full flex flex-row justify-between py-2">
                    <NavbarBrand tag={Link} to="/">
                        <div className="flex flex-row"><span className="my-auto flex flex-row space-x-2 text-white">
                            <FaArrowUp size={16} />
                            <FaArrowDown size={16} />
                            <FaUndo size={16} />
                        </span></div></NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                        <ul className="flex flex-row">
                            <NavItem className="space-x-8 flex flex-row">
                                <Link to="/q1" className="text-white">Quiz 1</Link>
                                <a href="https://www.figma.com/file/TVucbHo5Z3FfRoaiy2Ncp3/experimental" target="_blank" className="text-white flex flex-row">Initial Web Design <FaExternalLinkAlt size={16} className="my-auto ml-2" /></a>
                                <a href="https://www.figma.com/file/8u5gl2v3A3eYvJfRUCkIAL/TRUCLR-Brand-Design" target="_blank" className="text-white flex flex-row">Brand Design <FaExternalLinkAlt size={16} className="my-auto ml-2" /></a>
                            </NavItem>
                      </ul>
            </Collapse>
                </Container>
            </Navbar>
      </header>
    );
  }
}
