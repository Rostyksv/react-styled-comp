import React from 'react'
import { GrClose } from 'react-icons/gr';
import { SidebarContainer, Icon, SidebarMenu, SidebarLink, SidebarBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({ showSidebar, setShowSidebar }) => {
        return (
            <SidebarContainer showSidebar={showSidebar}>
                <Icon>
                    <GrClose onClick={() => setShowSidebar(false)} />
                </Icon>
                <SidebarMenu>
                    <SidebarLink to='/'>Pizzas</SidebarLink>
                    <SidebarLink to='/'>Desserts</SidebarLink>
                    <SidebarLink to='/'>Full Menu</SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRoute to='/'>Order Now</SidebarRoute>
                </SidebarBtnWrap>
            </SidebarContainer>
        )
}

export default Sidebar;
