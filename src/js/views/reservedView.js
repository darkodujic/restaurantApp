import { elements } from "./base";

//RENDER RESERVATION UI

export const renderReserve = reserved => {
  const reserve = `
    
    <div class="reserved__card__new" data-itemid=${reserved.id}>
    <img src="${reserved.image}" class="reserved__card__new__img">
<h3 class="reserved__card__new__header">${reserved.title}</h3>

<button class="reserved__card__new__button">
    <i class="reserved__card__new__delete fas fa-times"></i>
 </button>

 <div class="reserved__card__new__dateils">
   
    <span class="reserved__card__new__location">${reserved.street} , ${reserved.city}</span>

         <span class="reserved__card__new__date">${reserved.date}</span>

         <span class="reserved__card__new__hours">${reserved.hours}</span>

         <span class="reserved__card__new__span"><i class="reserved__card__new__fork fas fa-utensils"></i></span>
    </div>
    
    `;

  elements.card.insertAdjacentHTML("beforeend", reserve);
};

//DELETE RESERVATION FROM UI

export const deleteItem = id => {
  const d = document.querySelector(`[data-itemid="${id}"`);
  if (d) d.parentElement.removeChild(d);
};
