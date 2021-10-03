import {TextField} from "@material-ui/core";
import React from "react";

const CounterCart = ({id, count, onAddToCart, onDeleteFromCart}) => {

    const updateCart = (value) => {
        if (value)
            onAddToCart(id, value)
        else
            onDeleteFromCart(id)
    }

    return (
        <TextField className="cart__count"
                   id="outlined-number"
                   label="Count"
                   type="number"
                   defaultValue={count}
                   onChange={(e) => updateCart(+e.target.value)}
                   InputLabelProps={{
                       shrink: true,
                   }}
        />
    )
}

export default CounterCart;