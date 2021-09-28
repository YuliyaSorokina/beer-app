class BeerService{
    ENDPOINT = 'https://api.punkapi.com/v2/';

    getFetch = async (url) => {
        try{
            return (await fetch(`${this.ENDPOINT}${url}`)).json();
        } catch (err){
            console.log(err)
        }
    }

    getBeerById = async (id) =>{
        return await this.getFetch(`beers/${id}`)
    }

    getRandomBeer = async () =>{
        return await this.getFetch(`beers/random`)
    }

    getPagination = async (page, limit) => {
        setTimeout(()=>{}, 1000000);
        return await this.getFetch(`beers?page=${page}&per_page=${limit}`);
    }
}

export default BeerService;