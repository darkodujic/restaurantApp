
//RENDER SAVE UI
export const renderLike = like => {
    const saved = `
    
    <div class="item__items saved__item"><a href="#${like.id}">
    <button class="reserved__card__button saved__delete">
    <i class="reserved__card__delete saved__icon fas fa-times"></i>
 </button>
<img src="${like.image}" class="item__items__pic saved__pic">
<div class="item__items__details saved__details">
<h2 class="header--2 saved__header">${like.title}</h2>
<div class="item__items__type saved__type">${like.type}</div>
<div class="item__items__stars">
<img src="/yelp_stars/web_and_ios/small/small_${like.rating}.png">
</div>
<span class="item__items__span saved__span">${like.review} reviews</span>
</div>
</a></div>
    `;

    document.querySelector('.save').insertAdjacentHTML('afterend', saved);
}

//DELETE SAVE 
export const deleteHeartt = id => {

const item = document.querySelector(`.saved__item a[href*="${id}"]`).parentElement;

if(item) item.parentElement.removeChild(item);

};
