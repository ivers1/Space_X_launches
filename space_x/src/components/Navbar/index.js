import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                   <NavLogo to='/'>SpaceX</NavLogo> 
                   <MobileIcon onClick= { toggle }>
                    <FaBars />
                    </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to= 'About'>About</NavLinks>
                    </NavItem>
                <NavItem>
                        <NavLinks to= 'History'>History</NavLinks>
                    </NavItem>
                <NavItem>
                        <NavLinks to= 'Space'>Space</NavLinks>
                    </NavItem>
                <NavItem>
                        <NavLinks to= 'Contact'>Contact</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                   <NavBtnLink to= '/LaunchesPage'>Live Feed</NavBtnLink> 
                </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;