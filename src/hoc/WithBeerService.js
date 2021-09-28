import React from "react";
import BeerServiceContext from "../components/BeerServiceContext/BeerServiceContext";

const WithBeerService = () => (Wrapped) => {
    return (props) => {
        return (
            <BeerServiceContext.Consumer>
                {
                    (BeerService) => {
                        return <Wrapped {...props} BeerService={BeerService}/>
                    }
                }
            </BeerServiceContext.Consumer>
        )
    }
}

export default WithBeerService;
