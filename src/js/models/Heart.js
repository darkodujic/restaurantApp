export default class Heart {
  constructor() {
    this.heart = [];
  }

  //ADD SAVED RESTAURANTS
  addHeart(id, image, title, type, rating, review) {
    const like = {
      id,
      image,
      title,
      type,
      rating,
      review
    };
    this.heart.push(like);
    this.localData();
    return like;
  }

  //DELETE SAVED RESTAURANTS

  deleteHeart(id) {
    const index = this.heart.findIndex(el => el.id === id);
    this.heart.splice(index, 1);
    this.localData();
  }

  //CHECK IF RESTAURANT IS ALREADY SAVED

  isHeart(id) {
    return this.heart.findIndex(el => el.id === id) !== -1;
  }

  //LOCAL DATA SAVE

  localData() {
    localStorage.setItem("heart", JSON.stringify(this.heart));
  }

  readData() {
    const storage = JSON.parse(localStorage.getItem("heart"));

    if (storage) this.heart = storage;
  }
}
