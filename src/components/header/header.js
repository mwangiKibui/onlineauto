import React,{useState} from 'react';

//third-party
import {Navbar,Nav,NavbarBrand,Collapse,NavItem,NavLink,NavbarToggler} from 'reactstrap';
import classNames from 'classnames';
import {useSelector} from 'react-redux';

const Header = () => {

    const [isOpen,setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const {token} = useSelector(state => state.users);
    

    return (
        <Navbar light color="light" fixed="top" expand="md">
            <NavbarBrand href="/">
                <img 
                src="/images/logo.webp"
                className="navbar-logo-img"
                alt=""
                />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>

                <Nav className="mx-auto" navbar>

                    <NavItem>
                        <NavLink className={
                            classNames('navbar-link',{
                                'navbar-link-active':window.location.pathname === "/"
                            })
                        } href="/">
                            Home
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink className={
                            classNames('navbar-link',{
                                'navbar-link-active':window.location.pathname.includes('/showroom')
                            })
                        } href="/showroom">
                            Show room
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink className={
                            classNames('navbar-link',{
                                'navbar-link-active':window.location.pathname.includes('/about')
                            })
                        } href="/about">
                            About us
                        </NavLink>
                    </NavItem>
                </Nav>

                <Nav className="ml-auto" navbar>
                    {
                        token ? (
                            <>
                            <NavItem>
                                <NavLink className={
                                    classNames('navbar-link',{
                                        'navbar-link-active':window.location.pathname.includes('/auth/dashboard')
                                    })
                                } href="/auth/dashboard">
                                    Dashboard
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={
                                    classNames('navbar-link',{
                                        'navbar-link-active':window.location.pathname.includes('/auth/logout')
                                    })
                                } href="/auth/logout">
                                    Logout
                                </NavLink>
                            </NavItem>
                            </>
                        ) : (
                            <>
                            <NavItem>
                                <NavLink className={
                                    classNames('navbar-link',{
                                        'navbar-link-active':window.location.pathname.includes('/auth/login')
                                    })
                                } href="/auth/login">
                                    Login
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={
                                    classNames('navbar-link',{
                                        'navbar-link-active':window.location.pathname.includes('/auth/signup')
                                    })
                                }
                                href="/auth/signup">
                                    Signup
                                </NavLink>
                            </NavItem>
                            </>
                        )
                    }
                    
                </Nav>
            </Collapse>
        </Navbar>
    )
};

export default Header;