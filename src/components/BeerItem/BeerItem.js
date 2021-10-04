import React from "react";
import CounterCart from "../CounterCart/CounterCount";
import './BeerItem.scss'
import {Button, Link} from "@material-ui/core";

const BeerItem = ({beer, count, onAddToCart, onDelete}) => {

    const {name, image_url, id} = beer;
    const actionWithCart = count
        ? <CounterCart id={id} count={count} onAddToCart={onAddToCart} onDeleteFromCart={onDelete}/>
        : <Button onClick={() => onAddToCart(id, 1)} variant="text">Add to cart</Button>

    return (
        <li className='beer__item'>
            <Link className='beer__link' href={`/${id}`} underline="none">
                <img className='beer__img' src={image_url} alt={name}/>
                <div>{name}</div>
            </Link>
            {actionWithCart}
        </li>
    )
}

export default BeerItem;