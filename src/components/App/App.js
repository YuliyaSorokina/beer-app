import React from 'react';
import MainPage from "../../pages/MainPage";
import BeerPage from "../../pages/BeerPage";
import Header from "../Header/Header";
import {connect} from "react-redux";

import {Route, Switch} from "react-router-dom";

const App = ({page}) => {
  return (
    <div className="App">
        <Header/>
        <Switch>
            <Route
                path='/'
                component={MainPage}
                exact
            />
            <Route
                path={`/?page=:curPage`}
                component={MainPage}
            />
            <Route
                path='/:id'
                component={BeerPage}
            />
        </Switch>

    </div>
  );
}

const mapStateToProps = (state) => {
    return {
        page: state.reducerPagination.page
    }
}
export default connect(mapStateToProps)(App);
