class Product {
  constructor(
    id,
    title,
    price,
    stock,
    photos,
    onSale,
    supplier,
    colors,
    description,
    taxPolicy
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.photos = photos;
    this.onSale = onSale;
    this._supplier = supplier;
    this.colors = colors;
    this.description = description;
    this.taxPolicy = taxPolicy;
  }

  get supplier() {
    return this._supplier;
  }
  set supplier(newName) {
    this._supplier = newName;
  }

  sellUnits(units) {
    if (this.stock - units < 0) {
      return console.error("No hay suficiente stock");
    } else {
      this.stock -= units;
      console.log(
        `Se vendieron ${units} unidades de ${this.title}, quedan: ${this.stock}`
      );
    }
  }
}

const product1 = new Product(
  "001",
  "Macbook Pro 15'4",
  750000,
  20,
  ["./assets/mock1.jpg", "./assets/mock2.jpg", "./assets/mock3.jpg"],
  "50% Off",
  "Mac",
  ["black", "white"],
  "Space Gray",
  "Incluye impuesto País y percepción AFIP"
);
const product2 = new Product(
  "002",
  "Havit HV-MS801",
  30,
  20,
  ["./assets/mock1.jpg", "./assets/mock2.jpg", "./assets/mock3.jpg"],
  "50% Off",
  "Havit",
  ["black", "white"],
  "Havit Computer and Laptop accessories brings to you the world of computing at your fingertips. Browse through our huge collection and add that elusive item to your PC unit that you have been searching for long. Interface Type: USB Product size?123*76*40MM net weight?115g The Number of Key:6 keys Image processing: 3000 FPS Resolutin: 800-1200-1600-2400DPI Key Life:3,000,000 Cable Length:1.6m Operating Voltage: 5V",
  "Incluye impuesto País y percepción AFIP"
);
const product3 = new Product(
  "003",
  "K616 Fizz Rgb Pro",
  99,
  20,
  ["./assets/mock1.jpg", "./assets/mock2.jpg", "./assets/mock3.jpg"],
  "50% Off",
  "Redragon",
  ["Blanco", "Rosado", "Lila"],
  "El K616-RGB FIZZ PRO te asegurará una respuesta ultrarrápida de 1 ms en modo inalámbrico de 2,4 GHz, 0 latencia y 0 input lag. Además, permite conexión a través de Bluetooth 5.0 con una velocidad de transmisión de hasta 2 Mbps, manteniendo siempre al mínimo las pérdidas. Gracias a su diseño compacto 60% y a su práctico cable desmontable, el K616-RGB FIZZ PRO te permitirá ganar más espacio para el mouse en donde quiera que decidas iniciar tus partidas. Prepárate para ser invencible, a tu estilo",
  "Incluye impuesto País y percepción AFIP"
);
const product4 = new Product(
  "004",
  "Macbook Pro 15'4",
  15000,
  20,
  ["./assets/mock1.jpg", "./assets/mock2.jpg", "./assets/mock3.jpg"],
  "50% Off",
  "Mac",
  ["black", "white"],
  "Space Gray",
  "Incluye impuesto País y percepción AFIP"
);
const product5 = new Product(
  "005",
  "Macbook Pro 15'4",
  15,
  20,
  ["./assets/mock1.jpg", "./assets/mock2.jpg", "./assets/mock3.jpg"],
  "50% Off",
  "Mac",
  ["black", "white"],
  "Space Gray",
  "Incluye impuesto País y percepción AFIP"
);
const product6 = new Product(
  "006",
  "Macbook Pro 15'4",
  55,
  20,
  ["./assets/mock1.jpg", "./assets/mock2.jpg", "./assets/mock3.jpg"],
  "50% Off",
  "Mac",
  ["black", "white"],
  "Space Gray",
  "Incluye impuesto País y percepción AFIP"
);

const products = [product1, product2, product3, product4, product5, product6];

function createCard(product) {
  return `
  <article class="product-card">
    <a href="./details.html?id=${product.id}">
      <img class="product-img" src="${product.photos[2]}" alt="${product.id}" />
      <div class="product-info">
        <span class="product-title">${product.title}</span>
        <span class="product-description">${product.supplier}</span>
        <div class="product-price-block">
          <span class="product-price">$${product.price}</span>
          <span class="product-discount">${product.onSale}</span>
        </div>
        <div class="product-tax-policy">${product.taxPolicy}</div>
      </div>
    </a>  
  </article>
`;
}

function printCards(arrayProducts, selector) {
  let productsTemplate = "";

  arrayProducts.forEach((product) => {
    productsTemplate += createCard(product);
  });

  const productsContainer = document.getElementById(selector);
  productsContainer.innerHTML = productsTemplate;
}

printCards(products, "products");
