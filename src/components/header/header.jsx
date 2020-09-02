/* eslint-disable */
import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, NavbarBrand, Navbar, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';

import logo from '../../assets/images/logos/white-text.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    /*--------------------------------------------------------------------------------*/
    /*To open NAVBAR in MOBILE VIEW                                                   */
    /*--------------------------------------------------------------------------------*/

    return (
        <div className="topbar" id="top">
            <div className="header6">
                <Container className="po-relative">
                    <Navbar fixed='top' className="navbar-expand-lg h6-nav-bar">
                        <NavbarToggler style={{ color: '#fff' }} onClick={toggle}><span className="ti-menu"></span></NavbarToggler>
                        <Collapse isOpen={isOpen} navbar className="hover-dropdown font-14 ml-auto" id="h6-info">
                            <Nav style={{ backgroundColor: '#003d03' }} navbar className="ml-auto">
                                <NavItem>
                                    <Link className="nav-link" to={"/"}>
                                        Home
									</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to={"/representantes"}>
                                        Representantes
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to="/candidatos">
                                        Candidatos
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to={"/revistas"}>
                                        Revistas
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to={"/revistas-propria"}>
                                        Revista Própria
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to={"/candidatos-inscritos"}>
                                        Candidatos inscritos
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to={"/representantes-cadastrados"}>
                                       Representantes cadastrados
                                    </Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Container>
            </div>
        </div>
    );

}
export default Header;
