import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import store from "./store";
import ErrorBoundry from "./components/ErrorBoundry/ErrorBoundry";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import BeerServiceContext from "./components/BeerServiceContext/BeerServiceContext";
import BeerService from "./services/beer-service";

const beerService = new BeerService();

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <ErrorBoundry>
              <BeerServiceContext.Provider value={beerService}>
                  <Router>
                      <App/>
                  </Router>
              </BeerServiceContext.Provider>
          </ErrorBoundry>
      </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
