import React, { useState } from 'react';
import { Nav, NavLink, NavIcon, Bars, NavMenu} from './NavbarElements';
import Sidebar from '../Sidebar';

const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    return (
            <Nav>
                <NavLink to='/'>Pizza</NavLink>
                    <NavIcon>
                        <NavMenu to='/menu'>Menu</NavMenu>
                        <Bars onClick={() => setShowSidebar(true)}/>
                    </NavIcon>
                <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
            </Nav>
    )
}

export default Navbar
