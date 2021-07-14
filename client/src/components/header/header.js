import React from 'react';
import { Image, Navbar } from '../index';
import { NavLink } from 'react-router-dom';
import logo from './logo.svg';

const Header = () => {
    return (
        <header className='flex items-center box-border py-2'>
            <NavLink to='/'>
                <div className='w-28'>
                    <Image src={logo} alt='Logo' />
                </div>
            </NavLink>
            <Navbar />
        </header>
    );
};

export default Header;
