import React from "react";
import './Header.scss';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Header = () => {
    const counter = useSelector((state) =>
        state.reducerBeers.beersInCart.reduce((sum, item) => sum + item.count, 0));
    return (
        <header className='header'>
            <Link className='header__link' to="/">Home</Link>
            <Link className='header__link' to="/cart">Cart {counter ? '(' + counter + ')' : 'is empty'}</Link>
        </header>
    )
}

export default Header;