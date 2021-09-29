import React, {useEffect} from "react";
import './CartPage.scss';
import {connect} from "react-redux";

const CartPage = ({items = []}) => {

    return (
        <>
            <div className="cart">
                <div className="cart__title">Ваш заказ</div>
                <div className="cart__list">
                    {/*{
                items.map((item)=>{
                    const {name, image_url} = item;
                    const price = Math.random()*120 - 20;
                    return (
                        <div className="cart__item">
                            <div className="cart__item-img">{image_url}</div>
                            <div className="cart__item-title">{name}</div>
                            <div className="cart__item-price">{price}</div>
                            <div className="cart__item-close">&times;</div>
                        </div>
                    )
                })
            }*/}
                    <div className="cart__item">
                        <img className="cart__img" src='/'/>
                        <div className="cart__name">name</div>
                        <div className="cart__price">price</div>
                        <div className="cart__close">&times;</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default connect()(CartPage);