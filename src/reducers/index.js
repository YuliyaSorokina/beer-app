import { combineReducers } from 'redux'
import reducerBeers from "./reducerBeers";
import reducerPagination from "./reducerPagination";

export default combineReducers({
    reducerBeers,
    reducerPagination
})