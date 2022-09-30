import React from 'react';
import logo from '../../images/logo.webp'
import './Header.css'
const Header = () => {
    return (
        <nav className='navigator'>
            <img className='image-design' src={logo} alt="" />
            <h1 className='head-design'>SimpleLifeWay</h1>
        </nav>
    );
};

export default Header;