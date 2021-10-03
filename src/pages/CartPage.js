import React from "react";
import {connect} from "react-redux";
import {beerDeletedFromCart, beerAddedToCart} from "../actions/actions";
import CounterCart from "../components/CounterCart/CounterCount";
import './CartPage.scss';

const CartPage = ({beersInCart, beerDeletedFromCart, beerAddedToCart}) => {

    const content = beersInCart.length === 0 ? 'Корзина пуста' :
        <View items={beersInCart} onDelete={beerDeletedFromCart} onAddToCart={beerAddedToCart}/>
    return (
        <>
            <div className="cart">
                <h2 className="cart__title">Ваш заказ</h2>
                <div className="cart__list">
                    {content}
                </div>
            </div>
        </>
    )
}

const View = ({items, onDelete, onAddToCart}) => {
    const sum = items.reduce((sum, item) => sum + +item.price * item.count, 0)
    return (
        <>
            {items.map((item) => {
                const {name, image_url, id, price, count} = item;
                if (count > 0)
                    return (
                        <div key={id} className="cart__item">
                            <img className="cart__img"
                                 src={image_url} alt={name}/>
                            <div className="cart__name">{name}</div>
                            <div className="cart__price">{price} р.</div>
                            <CounterCart id={id} count={count} onAddToCart={onAddToCart}/>
                            <div onClick={() => onDelete(id)} className="cart__close">&times;</div>
                        </div>
                    )
            })}
            <h3 className="cart__title">Сумма заказа: {sum} р.</h3>
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

export default connect(mapStateToProps, mapDispatchToProps)((CartPage));