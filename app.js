const menu = {
  _meal: "",
  _price: 0,

  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") {
      this._meal = mealToCheck;
    } else {
      console.log("please provide a valid string");
    }
  },

  set price(priceToCheck) {
    if (typeof priceToCheck === "number") {
      this._price = priceToCheck;
    } else {
      console.log("please provide a valid number");
    }
  },
  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today's Special is ${this._meal} for ${this._price} AED`;
    } else {
      return "Meal or price was not set correctly";
    }
  },
};
menu._price = 100;
menu._meal = "pizza";
console.log(menu.todaysSpecial);
