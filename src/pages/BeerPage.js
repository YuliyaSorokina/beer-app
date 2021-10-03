import React, {useEffect} from "react";
import {connect} from "react-redux";
import WithBeerService from "../hoc/WithBeerService";
import {useParams} from "react-router-dom";
import {beerLoaded, beerRequested, beerFailed} from "../actions/actions";
import Spinner from "../components/Spinner/Spinner";
import Error from "../components/Error/Error";
import './BeerPage.scss'

const BeerPage = ({BeerService, beer, isLoaded, isFailed, beerLoaded, beerFailed, beerRequested}) => {

    const {id} = useParams();

    useEffect(() => {
        beerRequested();
        BeerService.getBeerById(id)
            .then((res) => {
                beerLoaded(...res);
            })
            .catch(err => beerFailed())
    }, [BeerService, id, beerFailed, beerRequested, beerLoaded])

    if (!isLoaded) return <Spinner/>;
    if (isFailed) return <Error/>

    const {name, description, image_url} = beer;
    return (
        <div className='beer__page'>
            <h2 className='beer__title'>{name}</h2>
            <img className='beer__img' src={image_url} alt={name}/>
            <p className='beer__description'>{description}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        beer: state.reducerBeers.currentBeer,
        isLoaded: state.reducerBeers.isLoaded,
        isFailed: state.reducerBeers.isFailed
    }
}

const mapDispatchToProps = {
    beerLoaded: beerLoaded,
    beerRequested,
    beerFailed
}


export default WithBeerService()(connect(mapStateToProps, mapDispatchToProps)(BeerPage));