// script.js

class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getTotalValue() {
    return this.price * this.quantity;
  }

  toString() {
    return `Product: ${this.name}, Price: $${this.price.toFixed(
      2
    )}, Quantity: ${this.quantity}`;
  }
}
// script.js

class PerishableProduct extends Product {
  constructor(name, price, quantity, expirationDate) {
    super(name, price, quantity);
    this.expirationDate = expirationDate;
  }

  toString() {
    return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
  }
}
// script.js

const milk = new PerishableProduct("Milk", 1.5, 10, "2024-12-31");
const yogurt = new PerishableProduct("Yogurt", 2.0, 20, "2024-12-15");

console.log(milk.toString());
console.log(yogurt.toString());
