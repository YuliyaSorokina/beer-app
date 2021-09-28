import { combineReducers } from 'redux'
import reducerBeers from "./reducerBeers";
import reducerPagination from "./pagination-reducer";

export default combineReducers({
    reducerBeers,
    reducerPagination
})