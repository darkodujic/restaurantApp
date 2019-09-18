import {elements} from './base';

//GET INPUT
export const getCategories = () => elements.inputType.value;
export const getLocation = () => elements.inputLocation.value;

//RENDER RESULTS
const limitTitle = (title, limit = 8) => {
    const newTitle = [];
    if (title.length > limit) {
        title.split(' ').reduce((acc, cur) => {
            if (acc + cur.length <= limit) {
                newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0);

        return `${newTitle.join(' ')} ...`
    }

    return title;
}

const renderResults = result => {
    const markup = 
    `
    <div class="item__items item__search"><a href="#${result.id}">  
    <img src="${result.image_url}" class="item__items__pic">
    <div class="item__items__details">
    <h2 class="header--2">${limitTitle(result.name)}</h2>
    <div class="item__items__type">${result.location.city}</div>
    <div class="item__items__stars">
   
    <img src="/yelp_stars/web_and_ios/small/small_${result.rating}.png">
</div>
<span class="item__items__span">${result.review_count} reviews</span>
</div>
</div></a>
    `;

    elements.searchResult.insertAdjacentHTML('beforeend', markup);
}


//TITLE LIMIT



//PAGINATION

const createButton = (page, type) => `
<button class="item__button item__button--${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
<i class="item__button__icon far fa-arrow-alt-circle-${type === 'prev' ? 'left' : 'right'}"></i>
</button>
`;



const renderButtons = (page, fullPage, resPage) => {
    const pages = Math.ceil(fullPage / resPage);

    let button;
    if (page === 1 && pages > 1) {
        ///NEXT ONLY
      button = createButton(page, 'next');
    }else if (page === pages && pages > 1) {
        //PREV ONLY
        button = createButton(page, 'prev');
    }else if (page < pages) {
        //BOTH
        button = ` ${createButton(page, 'prev')}
                ${createButton(page, 'next')}
                `;
    }

    elements.searchResult.insertAdjacentHTML('beforeend', button);

};

export const renderRestaurants = (restaurants, page = 1, resPage = 4)  => {
  const start = (page - 1) * resPage;
  const end = page * resPage;
    restaurants.slice(start, end).forEach(renderResults);

    renderButtons(page, restaurants.length, resPage);
}

//CLEAR INPUTS

export const clearInput = () => elements.inputLocation.value = '';

export const clearType = () => elements.inputType.value = '';

export const clearResult = () => elements.searchResult.innerHTML = '';



//HIGHLIGHT ITEM

export const higlihght = id => {
    try {

    if (document.querySelector('.item__items--active')) {
        document.querySelector('.item__items--active').classList.remove('item__items--active');
    }
   document.querySelector(`.item__search a[href*="${id}"]`).classList.add('item__items--active');
    }catch(error) {
        console.log();
    }
}





