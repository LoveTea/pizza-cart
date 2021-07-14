import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
    return <NavLink {...props}>{props.children}</NavLink>;
};

export default NavItem;
