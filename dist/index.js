import Search from "../src/js/models/Search";
import Recipe from "../src/js/models/Recipe";
import Reserved from "../src/js/models/Reserved";
import * as searchView from "../src/js/views/searchView";
import * as recipeView from "../src/js/views/recipeView";
import * as reservedView from "../src/js/views/reservedView";
import { elements, renderLoader, deleteLoader } from "../src/js/views/base";
import Heart from "../src/js/models/Heart";
import * as heartView from "../src/js/views/heartView";
import flatpikr from "flatpickr";

//URADI LIKE BUTTON

//URADI DATE ONO

//style css

const state = {};
const controlSearch = async () => {
  const location = searchView.getLocation();
  const term = "restaurants";
  const sort_by = "rating";
  //const categories = searchView.getCategories();
  const categories = searchView.getCategories();

  if (location && term && sort_by && categories) {
    state.search = new Search(term, location, sort_by, categories);

    //UI PREPARE
    searchView.clearInput();
    searchView.clearType();
    searchView.clearResult();
    renderLoader(elements.searchResult);

    await state.search.getResult();

    deleteLoader();
    searchView.renderRestaurants(state.search.dare);
  }
};

//URADI SELECT ZA CITY LA

const receptSearch = async () => {
  const id = window.location.hash.replace("#", "");

  if (id) {
    //new recipe
    recipeView.clearr();
    recipeView.clearDetail();
    recipeView.clearing();

    renderLoader(elements.restaurant);

    if (state.search) searchView.higlihght(id);

    state.recipe = new Recipe(id);
    //UI

    //get method
    await state.recipe.getRecipe();
    //people
    state.recipe.calcPeople();
    state.recipe.calcDate();
    deleteLoader();
    //console it
    recipeView.renderRecept(state.recipe);
  }
};

const likeSearch = () => {
  try {
    if (!state.heart) state.heart = new Heart();
    const id = state.recipe.id;
    if (!state.heart.isHeart(id)) {
      //add state
      const newHeart = state.heart.addHeart(
        id,
        state.recipe.image,
        state.recipe.title,
        state.recipe.categories,
        state.recipe.rating,
        state.recipe.review
      );

      heartView.renderLike(newHeart);
    }
  } catch (error) {
    console.log();
  }
};

window.addEventListener("load", () => {
  state.heart = new Heart();

  state.heart.readData();

  state.heart.heart.forEach(like => heartView.renderLike(like));
});

window.addEventListener("load", () => {
  state.reserved = new Reserved();

  state.reserved.readData();

  state.reserved.reserved.forEach(res => reservedView.renderReserve(res));
});

const reserveRestaurant = async () => {
  try {
    if (!state.reserved) state.reserved = new Reserved();

    const id = state.recipe.id;

    if (!state.reserved.isHeart(id)) {
      renderLoader(elements.reserve);

      const item = state.reserved.addItem(
        state.recipe.image,
        state.recipe.title,
        state.recipe.street,
        state.recipe.city,
        state.recipe.date,
        state.recipe.hours
      );

      reservedView.renderReserve(item);
      deleteLoader();
    }
  } catch (error) {
    console.log();
  }
};

document.querySelector(".form").addEventListener("submit", e => {
  e.preventDefault();
  controlSearch();
});

elements.searchResult.addEventListener("click", e => {
  const btn = e.target.closest(".item__button");

  if (btn) {
    const Go = parseInt(btn.dataset.goto, 10);
    searchView.clearResult();
    searchView.renderRestaurants(state.search.dare, Go);
  }
});

elements.detail.addEventListener("click", e => {
  const id = state.recipe.id;
  if (
    e.target.matches(
      ".detail__reservation__minus, detail__reservation__minus *"
    )
  ) {
    if (state.recipe.people > 1) {
      state.recipe.updatePeople("dec");
      recipeView.people(state.recipe);
    }
  } else if (
    e.target.matches(".detail__reservation__plus, detail__reservation__plus *")
  ) {
    state.recipe.updatePeople("inc");
    recipeView.people(state.recipe);
  } else if (e.target.matches(".detail__btn, detail__btn *")) {
    reserveRestaurant();
  } else if (e.target.matches(".detail__liked, detail__liked *")) {
    likeSearch();
  } else if (
    e.target.matches(
      ".detail__reservation__input, .detail__reservation__input *"
    )
  ) {
    ////URADI OVO !!!
    const val = e.target.value;
    state.recipe.updateDate(val);
  } else if (
    e.target.matches(
      ".detail__reservation__hours__select, .detail__reservation__hours__select *"
    )
  ) {
    const val = e.target.value;
    state.recipe.updateTime(val);
  }
});

elements.saved.addEventListener("click", e => {
  const id = state.recipe.id;
  if (e.target.matches(".reserved__card__button, .reserved__card__button *")) {
    state.heart.deleteHeart(id);
    heartView.deleteHeartt(id);
  }
});

elements.card.addEventListener("click", e => {
  try {
    const id = e.target.closest(".reserved__card__new").dataset.itemid;
    if (
      e.target.matches(
        ".reserved__card__new__button, .reserved__card__new__button *"
      )
    ) {
      state.reserved.deleteItem(id);
      reservedView.deleteItem(id);
    }
  } catch (error) {
    console.log();
  }
});

window.addEventListener("hashchange", receptSearch);
window.addEventListener("load", receptSearch);

function scroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top + window.scrollY;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animate(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animate);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animate);
}
const dar = document.querySelector(".form__input");
const select = document.querySelector(".form__select");

document.querySelector(".form__btn").addEventListener("click", () => {
  if (dar.value !== "" && select.value !== "") {
    setTimeout(() => {
      scroll(".item", 1000);
    }, 600);
  }
});

window.addEventListener("click", e => {
  if (e.target.matches(".detail__liked")) {
    setTimeout(() => {
      scroll(".item", 1000);
    }, 600);
  }
});

window.addEventListener("click", e => {
  if (e.target.matches(".detail__btn")) {
    setTimeout(() => {
      scroll(".reserved", 800);
    }, 600);
  }
});

/*async function getResult() {
    const bearer = 'Bearer ' + 'GIDbaihzLPYj898sa3slEi15RURCxE-9C-pBT43L0lKTAd7zij0UCD6RM7U0yvvL1htFi2TUBwbF71ggGu_QUxOTqcfq2p7c4DBB4iIekxkrxoJk1TrPa-qi4EG4XHYx';
    const proxy = 'https://cors-anywhere.herokuapp.com/';

   fetch(`${proxy}https://api.yelp.com/v3/businesses/search?term=restaurants&location=Los Angeles`, {
       method: 'GET',
       headers: {'Content-Type': 'application/json',
                    'Authorization': bearer,
    }
   })
   .then(res => res.json())
   .then(console.log) 
}
getResult();
*/
