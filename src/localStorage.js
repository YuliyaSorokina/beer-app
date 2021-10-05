export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('cartState');
        if (serializedState === null) {
            return undefined;
        }
        return {
            beers: [],
            isLoaded: false,
            error: null,
            currentBeer: null,
            beersInCart: JSON.parse(serializedState)
        }
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state.reducerBeers.beersInCart);
        localStorage.setItem('cartState', serializedState);
    } catch (err) {
        // Ignore write errors.
    }
};