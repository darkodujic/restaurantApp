import Axios from "axios";
import * as reservedView from '../views/reservedView';
import * as recipeView from '../views/recipeView';
import * as searchView from '../views/searchView';
import { elements } from "../views/base";

export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        const bearer = 'Bearer ' + 'GIDbaihzLPYj898sa3slEi15RURCxE-9C-pBT43L0lKTAd7zij0UCD6RM7U0yvvL1htFi2TUBwbF71ggGu_QUxOTqcfq2p7c4DBB4iIekxkrxoJk1TrPa-qi4EG4XHYx';
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        try {

        const rec = await Axios(`${proxy}https://api.yelp.com/v3/businesses/${this.id}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json',
                        'Authorization': bearer
                    }
        })
    

        this.title = rec.data.name;
        this.categories = rec.data.categories[0].title;
        this.image = rec.data.image_url;
        this.rating = rec.data.rating;
        this.review = rec.data.review_count;
        this.adress = rec.data.location.display_address;
        this.street = this.adress[0];
        this.city = this.adress[1];
        this.phone = rec.data.display_phone;
        this.hours = rec.data.hours[0].open[1].start;
        this.end = rec.data.hours[0].open[1].end;
        this.tuesday = rec.data.hours[0].open[2].start;
        this.tuesdayend = rec.data.hours[0].open[2].end;
        this.sunday = rec.data.hours[0].open[4].start;
        this.sundayend = rec.data.hours[0].open[4].end;
        


        //console.log(rec);

        //OVO JE ZA HOURS
        const hour = this.hours.split(',');
        const hourr = hour[0].split('');
        const hourrr = hourr[0] + hourr[1] + ":" + hourr[2] + hourr[3];
        this.hours = hourrr;
     //console.log(hour);



     //OVO JE ZA END
     const endd = this.end.split(',');
     const enddd = endd[0].split('');
     const endddd = enddd[0] + enddd[1] + ":" + enddd[2] + enddd[3];
     this.end = endddd;
        //console.log(endddd);


    //OVO JE ZA TUESDAY

        const tuesdayy = this.tuesday.split(',');
        const tuesdayyy = tuesdayy[0].split('');
        const tuesdayyyy = tuesdayyy[0] + tuesdayyy[1] + ":" + tuesdayyy[2] + tuesdayyy[3];
        this.tuesday = tuesdayyyy;
           //console.log(tuesdayyyy);


           
    //OVO JE ZA TUESDAYEND


    const tuesdayyend = this.tuesdayend.split(',');
    const tuesdayyyend = tuesdayyend[0].split('');
    const tuesdayyyyend = tuesdayyyend[0] + tuesdayyyend[1] + ":" + tuesdayyyend[2] + tuesdayyyend[3];
    this.tuesdayend = tuesdayyyyend;
       //console.log(tuesdayyyyend);



       //OVO JE ZA SUNDAY

       const sunday = this.sunday.split(',');
    const sundayy = sunday[0].split('');
    const sundayyy = sundayy[0] + sundayy[1] + ":" + sundayy[2] + sundayy[3];
    this.sunday = sundayyy;
       //console.log(sundayyy);



       //OVO JE ZA SUNDAYEND

       const sundayend = this.sundayend.split(',');
       const sundayendd = sundayend[0].split('');
       const sundayenddd = sundayendd[0] + sundayendd[1] + ":" + sundayendd[2] + sundayendd[3];
       this.sundayend = sundayenddd;
          //console.log(sundayenddd);
        }catch(error) {
            alert(error);
        }
    }


   

//CALCULATE AND UPDATE PEOPLE

    calcPeople() {
        this.people = 2;
    }


  updatePeople(type) {

    const people = type === 'dec' ? this.people - 1 : this.people + 1;

    this.people = people;
  }

//CALCULATE AND UPDATE DATE

  calcDate() {
      this.date = '2019-04-25';
  }

updateDate(newDate) {
    
    this.date = newDate;
}

//CALCULATE AND UPDATE TIME


updateTime(newTiem) {
    this.hours = newTiem;
}


  








  



    

}

