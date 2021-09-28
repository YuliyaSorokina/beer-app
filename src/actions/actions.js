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
    return{
        type: 'SET_PAGE',
        payload: page
    }
}

export {
    beersListLoaded,
    beerRequested,
    beerFailed,
    beerLoaded,
    pageChanged
}