export const elements = {
    inputType: document.querySelector('.form__select'),
    inputLocation: document.querySelector('.form__input'),
    searchResult: document.querySelector('.item'),
    container: document.querySelector('.container'),
    buttonRs: document.querySelector('.button__results'),
    restaurant: document.querySelector('.restaurant'),
    detailHeading: document.querySelector('.detail__heading'),
    detail: document.querySelector('.detail'),
    detailmenu: document.querySelector('.detail__menu'),
    detaillocation: document.querySelector('.detail__location'),
    maki: document.querySelector('.daki'),
    date: document.querySelector('.detail__reservation__input'),
    time: document.querySelector('.detail__reservation__hours__select'),
    people: document.querySelector('.detail__reservation__number'),
    base: document.querySelector('.head'),
    buttonreserved: document.querySelector('.detail__btn__add'),
    card: document.querySelector('.reserved__card'),
    image: document.querySelector('.reserved__card__new__img'),
    reserve: document.querySelector('.reserved'),
    saved: document.querySelector('.saved'),
    save: document.querySelector('.save')
}


export const renderLoader = parent => {
    const loader = `
    <div class="loader restaurant__loader">
    </div> 
    `
    parent.insertAdjacentHTML('afterbegin', loader);
}


export const deleteLoader = () => {
const loader = document.querySelector('.loader');

if (loader) {
    loader.parentElement.removeChild(loader);
}
}



