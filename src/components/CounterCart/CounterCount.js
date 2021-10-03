import {TextField} from "@material-ui/core";
import React from "react";

const CounterCart = ({count, onAddToCart, id}) => {
    return(
        <TextField className="cart__count"
                   id="outlined-number"
                   label="Count"
                   type="number"
                   defaultValue={count}
                   onChange={(e) => {
                       onAddToCart(id, +e.target.value);
                   }}
                   InputLabelProps={{
                       shrink: true,
                   }}
        />
    )
}

export default CounterCart;