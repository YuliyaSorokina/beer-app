import React from "react";
import {connect} from "react-redux";
import {beerDeletedFromCart, beerAddedToCart} from "../actions/actions";
import {Button} from "@material-ui/core";
import WithBeerService from "../hoc/WithBeerService";
import CartItem from "../components/CartItem/CartItem";

import './CartPage.scss';

const CartPage = ({beersInCart, beerDeletedFromCart, beerAddedToCart, BeerService}) => {

    let content = 'Корзина пуста';

    const handleCartSubmit = () => {
        BeerService.postCart(beersInCart);
        beersInCart.forEach(item => beerDeletedFromCart(item.id));
    }

    if (beersInCart.length > 0) {
        const sum = beersInCart.reduce((sum, item) => sum + +item.price * item.count, 0);
        const items = beersInCart.map(item => {
            return <CartItem item={item}
                             key={item.id}
                             onAddToCart={beerAddedToCart}
                             onDelete={beerDeletedFromCart}/>
        })
        content = <View items={items} sum={sum} onCartSubmit={handleCartSubmit}/>
    }

    return (
        <div className="cart">
            <h2 className="cart__title">Ваш заказ</h2>
            <div className="cart__list">{content}</div>
        </div>
    )
}

const View = ({items, sum, onCartSubmit}) => {
    return (
        <>
            {items}
            <h3 className="cart__title">Сумма заказа: {sum} р.</h3>
            <Button variant="contained" onClick={() => onCartSubmit()}>Оформить</Button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        beersInCart: state.reducerBeers.beersInCart
    }
}

const mapDispatchToProps = {
    beerDeletedFromCart,
    beerAddedToCart
}

export default WithBeerService()(connect(mapStateToProps, mapDispatchToProps)((CartPage)));