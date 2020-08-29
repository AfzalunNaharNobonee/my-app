import React from 'react';
import './Header.css';
import logo from '../../images/online_logo.png';

const Header = () => {
    return (
        <header>
            <img src={logo} alt="logo" />
            <hr/>
            <p>We are helping you to learn something that you like. You will have access to these courses for life-time. Well-known professors will help you to learn more about your selected courses and you surely will not regret. ENJOY!!! </p>
            
        </header>
    );
};

export default Header;