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
