import Axios from "axios";

export default class Search {
    constructor(term, location, sort_by, categories) {
        this.term = term;
        this.location = location;
        this.sort_by = sort_by;
        this.categories = categories; 
    }

    async getResult() {
        const bearer = 'Bearer ' + 'GIDbaihzLPYj898sa3slEi15RURCxE-9C-pBT43L0lKTAd7zij0UCD6RM7U0yvvL1htFi2TUBwbF71ggGu_QUxOTqcfq2p7c4DBB4iIekxkrxoJk1TrPa-qi4EG4XHYx';
        const proxy = 'https://cors-anywhere.herokuapp.com/';

        try {
    
        const res = await Axios(`${proxy}https://api.yelp.com/v3/businesses/search?term=${this.term}&location=${this.location}&sort_by=${this.sort_by}&categories=${this.categories}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json',
                         'Authorization': bearer,
         }

        })
       this.dare = res.data.businesses;
      //console.log(this.categories);
       //console.log(this.dare);

    }catch(error) {
alert(error);

    }
    } 
    }

 
    
