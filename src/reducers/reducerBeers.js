const initialState={
    beers: [],
    isLoaded: false,
    error: null,
    currentBeer: null,
    beersInCart:[]
}

const reducerBeers = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case 'BEERS_LOADED':
            return {
                ...state,
                beers: action.payload,
                isLoaded: true
            };
        case 'BEERS_REQUESTED':
            return {
                ...state,
                isLoaded: false
            };
        case 'BEERS_FAILED':
            return {
                ...state,
                error: action.payload
            };
        case 'BEER_LOADED':
            return {
                ...state,
                isLoaded: true,
                currentBeer: action.payload
            };
        case 'BEER_ADDED_TO_CART':
            const id = action.payload;
            const item = state.beers.find(item=>item.id===id);
            const newItem = {
                name: item.name,
                image_url: item.image_url,
                id: item.id
            }
            return {
                ...state,
                beersInCart: [...state.beersInCart, newItem]
            };
        case 'BEER_DELETED_FROM_CART':
            const newArr = state.beersInCart.filter(item=>item.id!==action.payload)
            return {
                ...state,
                beersInCart: newArr
            };
        default:
            return state;
    }
}

export default reducerBeers;