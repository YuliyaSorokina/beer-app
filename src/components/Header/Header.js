import React from "react";
import './Header.scss';

const Header = () => {
    return (
        <header className='header'>
            <a className='header__link' href="/">Home</a>
            <a className='header__link' href="/cart">Cart</a>
        </header>
    )
}

export default Header;