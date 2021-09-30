const beersListLoaded = (newBeerArray) => {
    return {
        type: 'BEERS_LOADED',
        payload: newBeerArray
    }
}

const beerRequested = () => {
    return {
        type: 'BEERS_REQUESTED'
    }
}

const beerFailed = (err) => {
    return {
        type: 'BEERS_FAILED',
        error: err
    }
}

const beerLoaded = (beer) => {
    return {
        type: 'BEER_LOADED',
        payload: beer
    }
}

const pageChanged = (page) => {
    return {
        type: 'SET_PAGE',
        payload: page
    }
}

const beerAddedToCart = (id) => {
    return {
        type: 'BEER_ADDED_TO_CART',
        payload: id
    }
}

const beerDeletedFromCart = (id) => {
    return {
        type: 'BEER_DELETED_FROM_CART',
        payload: id
    }
}


export {
    beersListLoaded,
    beerRequested,
    beerFailed,
    beerLoaded,
    pageChanged,
    beerAddedToCart,
    beerDeletedFromCart
}