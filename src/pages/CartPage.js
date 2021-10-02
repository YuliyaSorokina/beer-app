import React from "react";
import './CartPage.scss';
import {connect} from "react-redux";
import {beerDeletedFromCart} from "../actions/actions";
import {TextField} from "@material-ui/core";


const CartPage = ({beersInCart, beerDeletedFromCart}) => {

    const content = beersInCart.length === 0 ? 'Корзина пуста' :
        <View items={beersInCart} onDelete={beerDeletedFromCart}/>
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

const View = ({items, onDelete}) => {
    const sum = items.reduce((sum, item) => sum + +item.price*item.count, 0)
    return (
        <>
            {items.map((item) => {
                const {name, image_url, id, price, count} = item;
                return (
                    <div key={id} className="cart__item">
                        <img className="cart__img"
                             src={image_url} alt={name}/>
                        <div className="cart__name">{name}</div>
                        <div className="cart__price">{price} р.</div>
                        <TextField className="cart__count"
                                   id="outlined-number"
                                   label="Count"
                                   type="number"
                                   defaultValue={count}
                                   InputLabelProps={{
                                       shrink: true,
                                   }}
                        />
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
    beerDeletedFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)((CartPage));