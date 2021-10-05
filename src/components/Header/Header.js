import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppBar, Toolbar, Button} from "@material-ui/core";

import './Header.scss';


// const Header = () => {
//     const counter = useSelector((state) =>
//         state.reducerBeers.beersInCart.reduce((sum, item) => sum + item.count, 0));
//
//     return (
//         <header className='header'>
//             <Link className='header__link' to="/">Home</Link>
//             <Link className='header__link' to="/cart">Cart {counter ? '(' + counter + ')' : 'is empty'}</Link>
//         </header>
//     )
// }

const Header = () => {
    const counter = useSelector((state) =>
         state.reducerBeers.beersInCart.reduce((sum, item) => sum + item.count, 0));

    return (
        <header className='header'>
            <AppBar position='fixed' color="default">
                <Toolbar>
                    <Button
                        {...{
                            // key: 'Home',
                            color: 'inherit',
                            to: '/',
                            component: Link,
                        }}
                    >
                        HOME
                    </Button>
                    <Button
                        {...{
                            // key: 'Cart',
                            color: 'inherit',
                            to: '/cart',
                            component: Link,
                        }}
                    >
                        Cart ({counter || <div className='cart__counter'> empty </div>})
                    </Button>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </header>
    )
}

export default Header;