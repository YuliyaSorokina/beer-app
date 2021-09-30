import React, {useEffect} from "react";
import './CartPage.scss';
import {connect} from "react-redux";
import {beerDeletedFromCart} from "../actions/actions";


const CartPage = ({beersInCart, beerDeletedFromCart}) => {

    return (
        <>
            <div className="cart">
                <h2 className="cart__title">Ваш заказ</h2>
                <div className="cart__list">
                    {
                        beersInCart.map((item) => {
                            const {name, image_url, id} = item;
                            const price = (Math.random() * 120 - 20).toFixed();
                            return (
                                <div key={id} className="cart__item">
                                    <img className="cart__img"
                                         src={image_url} alt={name}/>
                                    <div className="cart__name">{name}</div>
                                    <div className="cart__price">{price}</div>
                                    <div onClick={() => beerDeletedFromCart(id)} className="cart__close">&times;</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
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