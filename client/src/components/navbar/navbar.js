import React from 'react';
import NavItem from '../nav-item/nav-item';
import { Button } from '../index';

const Navbar = () => {
    return (
        <nav className='flex justify-end w-full'>
            <NavItem to='/cart' title='Корзина'>
                <Button>Корзина</Button>
            </NavItem>
        </nav>
    );
};

export default Navbar;
