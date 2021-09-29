import React, {useEffect} from 'react';
import WithBeerService from "../../hoc/WithBeerService";
import BeerItem from "../BeerItem/BeerItem";
import {connect} from "react-redux";
import {beersListLoaded, beerRequested, beerFailed, pageChanged} from "../../actions/actions";
import Spinner from "../Spinner/Spinner";
import Error from "../Error/Error";
import Pagination from "../Pagination/Pagination";


import './BeerList.scss'
import {useHistory, useLocation} from "react-router-dom";

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
                      pageChanged
                  }) => {


    const query = useQuery();
    const history = useHistory();

    useEffect(() => {
        pageChanged(+query.get("page") || 1);
    }, []);

    useEffect(() => {
        beerRequested();
        history.push(`/?page=${page}`);
        BeerService.getPagination(page, '20')
            .then(res => beersListLoaded(res))
            .catch((err) => beerFailed(err))
    }, [page])

    const handlePaginationClick = (event, value) => {
        pageChanged(value);
    };

    if (!isLoaded) return <Spinner/>;
    if (error) return <Error/>;
    const items = beerItems.map(item => <BeerItem beer={item} key={item.id}/>);

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
    pageChanged
}

export default WithBeerService()(connect(mapStateToProps, mapDispatchToProps)(BeerList));