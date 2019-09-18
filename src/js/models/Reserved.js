import uniqid from "uniqid";
import { elements } from "../views/base";
import * as reservedView from "../views/reservedView";
export default class Reserved {
  constructor() {
    this.reserved = [];
  }

  //ADD ITEM
  addItem(image, title, street, city, date, hours) {
    const reserve = {
      id: uniqid(),
      image,
      title,
      street,
      city,
      date,
      hours
    };

    this.reserved.push(reserve);
    this.localData();
    return reserve;
  }

  //DELETE ITEM

  deleteItem(id) {
    const index = this.reserved.findIndex(el => el.id === id);
    this.reserved.splice(index, 1);
    this.localData();
  }

  isHeart(id) {
    return this.reserved.findIndex(el => el.id === id) !== -1;
  }
  //LOCAL DATA

  localData() {
    localStorage.setItem("reserved", JSON.stringify(this.reserved));
  }

  readData() {
    const storage = JSON.parse(localStorage.getItem("reserved"));

    if (storage) this.reserved = storage;
  }
}
