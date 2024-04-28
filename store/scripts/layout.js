const navSelector = document.getElementById("navbar");
const footerSelector = document.getElementById("footer");
const options = [
  {
    title: "Ofertas de la semana",
    linkTo: "#",
    opts: [
      { title: "Laptops", linkTo: "#" },
      { title: "Audio", linkTo: "#" },
      { title: "Auticulares", linkTo: "#" },
    ],
  },
  {
    title: "Como comprar",
    linkTo: "#",
    opts: [
      { title: "Formas de pago", linkTo: "#" },
      { title: "Envios", linkTo: "#" },
      { title: "Devoluciones", linkTo: "#" },
    ],
  },
  {
    title: "Costos y tarifas",
    linkTo: "#",
    opts: [
      { title: "Impuestos", linkTo: "#" },
      { title: "Facturacion", linkTo: "#" },
    ],
  },
  {
    title: "Mis pedidos",
    linkTo: "#",
    opts: [
      { title: "Pedir Nuevamente", linkTo: "#" },
      { title: "Lista de deseos", linkTo: "#" },
    ],
  },
  { title: "Garantia papi mas nah", linkTo: "#", opts: [] },
];

for (let option of options) {
  const anchor = document.createElement("a");
  anchor.className = "nav-a";
  anchor.textContent = option.title;
  anchor.href = option.linkTo;
  navSelector.appendChild(anchor);
}

for (let option of options) {
  const ul = document.createElement("ul");
  ul.className = "footer-ul";
  const li = document.createElement("li");
  li.className = "footer-main-item";
  const a = document.createElement("a");
  a.className = "footer-a";
  a.textContent = option.title;
  a.href = option.linkTo;
  li.appendChild(a);
  ul.appendChild(li);
  for (let opt of option.opts) {
    const liopt = document.createElement("li");
    liopt.className = "footer-li";
    const aopt = document.createElement("a");
    aopt.className = "footer-a";
    aopt.href = option.linkTo;
    aopt.textContent = opt.title;
    liopt.appendChild(aopt);
    ul.appendChild(liopt);
  }
  footerSelector.appendChild(ul);
}
