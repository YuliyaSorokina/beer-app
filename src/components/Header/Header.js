import React from "react";
import './Header.scss';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className='header'>
            <Link className='header__link' to="/">Home</Link>
            <Link className='header__link' to="/cart">Cart</Link>
        </header>
    )
}

export default Header;