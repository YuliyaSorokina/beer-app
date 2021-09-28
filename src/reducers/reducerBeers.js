const initialState={
    beers: [],
    isLoaded: false,
    error: null,
    currentBeer: null,
}

const reducerBeers = (state = initialState, action) => {
    switch (action.type) {
        case 'BEERS_LOADED':
            return Object.assign({}, state, {
                beers: action.payload,
                isLoaded: true
            });
        case 'BEERS_REQUESTED':
            return Object.assign({}, state, {
                isLoaded: false
            });
        case 'BEERS_FAILED':
            return Object.assign({}, state, {
                error: action.payload
            });
        case 'BEER_LOADED':
            return Object.assign({}, state, {
                isLoaded: true,
                currentBeer: action.payload
            });
        default:
            return state;
    }
}

export default reducerBeers;