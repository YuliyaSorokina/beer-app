import React, {useEffect} from 'react';
import WithBeerService from "../../hoc/WithBeerService";
import BeerItem from "../BeerItem/BeerItem";
import {connect} from "react-redux";
import {beersListLoaded, beerRequested, beerFailed, pageChanged, beerAddedToCart} from "../../actions/actions";
import Spinner from "../Spinner/Spinner";
import Error from "../Error/Error";
import Pagination from "../Pagination/Pagination";
import {useHistory, useLocation} from "react-router-dom";

import './BeerList.scss'


function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const BeerList = ({
                      beerItems,
                      isLoaded,
                      error,
                      BeerService,
                      beersListLoaded,
                      beerRequested,
                      beerFailed,
                      page,
                      pageChanged,
                      beerAddedToCart
                  }) => {


    const query = useQuery();
    const history = useHistory();

    useEffect(() => {
        const pageFromUrl = +query.get("page") || 1;
        pageChanged(pageFromUrl);
        beerRequested();
        BeerService.getPagination(pageFromUrl, '20')
            .then(res => beersListLoaded(res))
            .catch((err) => beerFailed(err))
    },[query.get("page")]);


    const handlePaginationClick = (event, value) => {
        history.push(`/?page=${value}`);
    };

    const handleAddToCart = (id) =>{
        beerAddedToCart(id);
    }

    if (!isLoaded) return <Spinner/>;
    if (error) return <Error/>;

    const items = beerItems.map(item => <BeerItem beer={item} key={item.id} onAddToCart={()=>handleAddToCart(item.id)}/>);

    return <>
        <View items={items}/>
        <Pagination page={page} count={10} onChange={handlePaginationClick}/>
    </>
}

const View = ({items}) => {
    return (
        <ul className='beer__cards'>
            {items}
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        beerItems: state.reducerBeers.beers,
        isLoaded: state.reducerBeers.isLoaded,
        error: state.reducerBeers.error,
        page: state.reducerPagination.page
    }
}

const mapDispatchToProps = {
    beersListLoaded: beersListLoaded,
    beerRequested,
    beerFailed,
    pageChanged,
    beerAddedToCart
}

export default WithBeerService()(connect(mapStateToProps, mapDispatchToProps)(BeerList));