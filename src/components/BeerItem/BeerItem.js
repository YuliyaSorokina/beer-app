import React from "react";
import './BeerItem.scss'

const BeerItem = ({beer}) => {
    const {name, image_url, id} = beer;
    return (
        <li className='beer__item'>
            <a className='beer__link' href={`/${id}`}>
                <img className='beer__img' src={image_url} alt={name}/>
                <div>{name}</div>
            </a>
        </li>
    )
}

export default BeerItem;