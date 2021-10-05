import React from 'react';
import MainPage from "../../pages/MainPage";
import BeerPage from "../../pages/BeerPage";
import Header from "../Header/Header";
import {connect} from "react-redux";
import CartPage from "../../pages/CartPage";
import {Container} from "@mui/material";

import {Route, Switch} from "react-router-dom";

const App = ({page}) => {
    return (
        <div className="App">
            <Header/>
            <Container maxWidth="xl">
                <Switch>
                    <Route
                        path='/'
                        component={MainPage}
                        exact
                    />
                    <Route
                        path='/cart'
                        component={CartPage}
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
            </Container>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        page: state.reducerPagination.page
    }
}
export default connect(mapStateToProps)(App);
