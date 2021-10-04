import React from "react";
import CounterCart from "../CounterCart/CounterCount";

const CartItem = ({item, onDelete, onAddToCart}) => {
    const {name, image_url, id, price, count} = item;
    return (
        <div key={id} className="cart__item">
            <img className="cart__img"
                 src={image_url} alt={name}/>
            <div className="cart__name">{name}</div>
            <div className="cart__price">{price} р.</div>
            <CounterCart id={id} count={count} onAddToCart={onAddToCart} onDeleteFromCart={onDelete}/>
            <div onClick={() => onDelete(id)} className="cart__close">&times;</div>
        </div>
    )
}

export default CartItem;