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
// script.js

class Product {
  // Existing code...

  static applyDiscount(products, discount) {
    products.forEach((product) => {
      product.price -= product.price * discount;
    });
  }
}
// script.js

class Store {
  constructor() {
    this.inventory = [];
  }

  addProduct(product) {
    this.inventory.push(product);
  }

  getInventoryValue() {
    return this.inventory.reduce(
      (total, product) => total + product.getTotalValue(),
      0
    );
  }

  findProductByName(name) {
    return this.inventory.find((product) => product.name === name) || null;
  }
}
// script.js

const apple = new Product("Apple", 2.5, 50);
const banana = new Product("Banana", 1.2, 100);
const bread = new Product("Bread", 2.0, 30);

const store = new Store();
store.addProduct(apple);
store.addProduct(banana);
store.addProduct(bread);
store.addProduct(milk);
store.addProduct(yogurt);

console.log(
  `Total Inventory Value (Before Discount): $${store
    .getInventoryValue()
    .toFixed(2)}`
);
