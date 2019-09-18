import { elements } from "./base";

//RENDER RECEPT AND DETAILS

const limitTitle = (title, limit = 11) => {
  const newTitle = [];
  if (title.length > limit) {
    title.split(" ").reduce((acc, cur) => {
      if (acc + cur.length <= limit) {
        newTitle.push(cur);
      }
      return acc + cur.length;
    }, 0);

    return `${newTitle.join(" ")} ...`;
  }

  return title;
};

export const renderRecept = recipe => {
  //LOOKUP
  const lookup = `
    <div class="restaurant__img">
        <img src=${recipe.image} class="restaurant__img--png">
    </div>
<h3 class="header--3">${limitTitle(
    recipe.title
  )}<span><i class="fas fa-utensils"></i></span></h3>
    
    `;

  elements.restaurant.insertAdjacentHTML("afterbegin", lookup);

  //HEADER
  const header = `
           
    <h4 class="header--4">${recipe.title}</h4>
      <div class="item__items__stars detail__icon"> 
      <img src="/yelp_stars/web_and_ios/regular/regular_${recipe.rating}.png">
          <span>${recipe.review} reviews</span> 
          </div>
    `;

  elements.detailHeading.insertAdjacentHTML("afterbegin", header);

  //LOCATION DETAILS
  const docum = `

<div class="detail__location">
    
    <div class="detail__location__details">
    <div class="detail__place">
    <i class="detail__location__details__icon fas fa-location-arrow">
    </i>
     <span class="detail__span">${recipe.street},
        ${recipe.city}</span>
</div>
<div class="detail__call">
 <i class="detail__call__icon fas fa-phone"></i>
 <span class="detail__phone">${recipe.phone}</span>
</div>
<div class="detail__time">
<i class="detail__time__icon far fa-clock"></i>
  <span class="detail__time__span">
 <span class="detail__time__span__new">Mon:</span>${recipe.hours} ${
    recipe.hours < "12:00" ? "am" : "pm"
  } - ${recipe.end} pm	
 <span class="detail__time__span__new">Tue:</span>${recipe.hours} ${
    recipe.hours < "12:00" ? "am" : "pm"
  } - ${recipe.end} pm	
  <span class="detail__time__span__new">Wed:</span>${recipe.tuesday} ${
    recipe.tuesday < "12:00" ? "am" : "pm"
  } - ${recipe.tuesdayend} pm	
  <span class="detail__time__span__new">Thu:</span>${recipe.tuesday} ${
    recipe.tuesday < "12:00" ? "am" : "pm"
  } - ${recipe.tuesdayend} pm	
 <span class="detail__time__span__new">Fri:</span>${recipe.tuesday} ${
    recipe.tuesday < "12:00" ? "am" : "pm"
  } - ${recipe.tuesdayend} pm	
   <span class="detail__time__span__new">Sat:</span>${recipe.hours} ${
    recipe.hours < "12:00" ? "am" : "pm"
  } - ${recipe.end} pm	
 <span class="detail__time__span__new">Sun:</span>${recipe.sunday} ${
    recipe.sunday < "12:00" ? "am" : "pm"
  } - ${recipe.sundayend} pm</span>
                    </div>
    </div>

</div>
`;
  elements.maki.insertAdjacentHTML("afterbegin", docum);

  //MENU DETAILS
  const menu = `

<div class="detail__menu">
    <div class="detail__menu__dollar">
        <i class="detail__menu__icon fas fa-dollar-sign"></i>
        <i class="detail__menu__icon fas fa-dollar-sign"></i>
        
        <div class="detail__menu__deta">
        <span class="detail__menu__dollar__price">Price range</span><span>$10-50</span>
        </div>
    </div>
    <div class="detail__menu__clock">
        <i class="detail__menu__clock__icon far fa-clock"></i>
        <div class="detail__menu__clock__details">
            <span class="detail__menu__clock__details__span">Today</span>
            <span>${recipe.hours} ${recipe.hours < "12:00" ? "am" : "pm"} - ${
    recipe.end
  } pm</span>
        </div>
    </div>
<div class="detail__menu__delivery">
    <i class="detail__menu__delivery__icon fas fa-truck"></i>
<div class="detail__menu__delivery__details">
    <span>Not Avaliable</span>
    </div>
</div>
<div class="detail__menu__parking">
    <i class="detail__menu__parking__icon fas fa-parking"></i>
    <div class="detail__menu__parking__details">
        <span>Garage, Validated</span>
    </div>
</div>

</div>

`;

  elements.maki.insertAdjacentHTML("afterbegin", menu);

  //RESERVATIONS

  const reserver = `


<div class="detail__reservation">
    <div class="detail__reservation__first">
            <i class="detail__reservation__first__icon fas fa-book-open"></i>
    <h5 class="header--5">Make a reservation</h5>
    </div>
    <form action="#" class="detail__reservation__form">
            <i class="detail__reservation__date far fa-calendar-alt"></i>  
        <input type="date" class="detail__reservation__input" value=${recipe.date} id="date-input">
    </form>
    <div class="detail__reservation__hours">
            <i class="detail__reservation__hours__icon far fa-clock"></i>
            <input type="time" class="detail__reservation__hours__select" id="myTime" min=${recipe.hours} max=${recipe.end} value=${recipe.hours}> 
    </div>
    <div class="detail__reservation__people">
            <i class="detail__reservation__people__icon fas fa-users"></i>
            <div class="detail__reservation__number">${recipe.people}</div>
            <div class="detail__reservation__person">People</div>      
            <button class="detail__reservation__button detail__reservation__minus">
                    <i class="detail__reservation__button__icon fas fa-minus"></i>
            </button>
            <button class="detail__reservation__button detail__reservation__plus">
                    <i class="detail__reservation__button__icon fas fa-plus"></i>
            </button>
    </div>
</div>

`;

  elements.maki.insertAdjacentHTML("afterbegin", reserver);

  //BUTTON
  const btn = `

<button class="detail__btn">
    <span class="detail__btn__span">Reserve a restaurant</span>
</button>

`;

  elements.maki.insertAdjacentHTML("afterbegin", btn);

  //SAVE BUTTON
  const like = `

<button class="detail__liked">
<i class="detail__liked__icon fas fa-save"></i>
</button>
`;

  elements.maki.insertAdjacentHTML("afterbegin", like);
};

//CLEAR SECTIONS

export const clearr = () => {
  elements.restaurant.innerHTML = "";
};

export const clearDetail = () => {
  elements.detailHeading.innerHTML = "";
};

export const clearing = () => {
  elements.maki.innerHTML = "";
};

//TEXT CONTENT FOR RESERVATIONS // UI

export const people = peep => {
  document.querySelector(".detail__reservation__number").textContent =
    peep.people;
};

export const updateDate = date => {
  document.querySelector(".detail__reservation__input").textContent = date.date;
};

export const updateTime = time => {
  document.querySelector(".detail__reservation__hours__select").textContent =
    time.hours;
};
