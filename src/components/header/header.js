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
        <Navbar dark color="dark" expand="md" >

            <NavbarBrand href="/">
                Online auto
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
                            </>
                        ) : null
                    }                    
                </Nav>
            </Collapse>
        </Navbar>
    )
};

export default Header;