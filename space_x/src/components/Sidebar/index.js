import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute  } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return(
        <SidebarContainer isOpen= { isOpen } onClick= { toggle }>
            <Icon onClick= { toggle }>
                <CloseIcon />
            </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to= 'About' onClick= { toggle }>
                    About
                </SidebarLink>
                <SidebarLink to= 'History' onClick= { toggle }>
                    History
                </SidebarLink>
                <SidebarLink to= 'Space' onClick= { toggle }>
                    Space
                </SidebarLink>
                <SidebarLink to= 'Contact' onClick= { toggle }>
                    Contact
                </SidebarLink>
                <SideBtnWrap>
                    <SidebarRoute to= '/LaunchesPage'>Live Feed</SidebarRoute>
                </SideBtnWrap>
            </SidebarMenu>
        </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;