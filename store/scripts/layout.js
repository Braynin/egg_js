// const navSelector = document.getElementById("navbar");
// const options = [
//   { title: "Ofertas de la semana", linkTo: "./outlet.html" },
//   { title: "Como comprar", linkTo: "./how.html" },
//   { title: "Costos y tarifas", linkTo: "./taxs.html" },
//   { title: "Mis pedides", linkTo: "./orders.html" },
//   { title: "Garantia papi mas nah", linkTo: "./warranty.html" },
// ];
// for (let option of options) {
//   const anchor = document.createElement("a");
//   anchor.className = "nav-button";
//   anchor.textContent = option.title;
//   anchor.href = option.linkTo;
//   navSelector.appendChild(anchor);
// }
const footerSelector = document.getElementById("footer");
const options = [
  { title: "Ofertas de la semana", opts: ["Laptops", "Audio", "Auticulares"] },
  { title: "Como comprar", opts: ["Formas de pago", "Envios", "Devoluciones"] },
  { title: "Costos y tarifas", opts: ["Impuestos", "Facturacion"] },
  { title: "Mis pedidos", opts: ["Pedir Nuevamente", "Lista de deseos"] },
  { title: "Garantia papi mas nah", opts: [] },
];
for (let option of options) {
  const anchor = document.createElement("a");
  anchor.className = "nav-button";
  anchor.textContent = option.title;
  anchor.href = option.linkTo;
  navSelector.appendChild(anchor);
}
