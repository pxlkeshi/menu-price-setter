# Menu Object with Getters and Setters in JavaScript

This project demonstrates how to use **getters** and **setters** in JavaScript to safely manage and validate object properties.

## 🚀 Features

- Custom setter methods to validate input before updating properties.
- A getter that returns a formatted string based on internal values.
- Demonstrates encapsulation with naming conventions (e.g., `_meal`, `_price`).

## 🧾 How It Works

### Object Structure

```js
const menu = {
  _meal: "",
  _price: 0,
  set meal(mealToCheck) { ... },
  set price(priceToCheck) { ... },
  get todaysSpecial() { ... }
};
