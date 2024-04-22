// const producto1 = {
//     nombre: "celular",
//     precio: 100000,
//     stock: 2
// };
// producto1.id = "id123";
// producto1["foto"] = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp";
// console.log(producto1);
class Product {
  constructor(id, title, price, stock, onsale, supplier) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.images = [];
    this.onsale = onsale;
    this._supplier = supplier;
  }
  sellUnits(units) {
    if (this.stock >= units) {
      this.stock -= units;
    } else {
      console.error("no hay suficiente stock pepito");
    }
  }
  get getSupplier() {
    return this._supplier;
  }
  set setSupplier(newName) {
    this._supplier = newName;
  }
}
const product1 = new Product("id123", "galaxy s4", 100, 20, true, "Samsung");
console.log(product1.getSupplier);
product1.setSupplier = "Xiaomi";
console.log(product1.getSupplier);
const product2 = new Product("id456", "pito 11", 200);
const product3 = new Product("id789", "iphone 12", 300, 10, false, "xiaomi");
console.log(product2, product3);
console.log(product2.title, product3.onsale);
const product4 = new Product("ID069", "Poco F5", 1500, 12, true, "Xiaomi");
product4.sellUnits(10);
product4.sellUnits(5);
console.log(product4);
