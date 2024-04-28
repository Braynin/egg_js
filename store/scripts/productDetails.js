const query = location.search;
const params = new URLSearchParams(query);
const idQuery = params.get("id");

function printDetails(id) {
  const product = products.find((product) => product.id == id);

  const detailsTemplate = `
      <section class="product-images-block">
          <div class="product-images">
          ${product.photos
            .map(
              (photo) =>
                `<img class="mini-img" src="${photo}" alt="${product.title}" onclick="changeMini(event)" />`
            )
            .join("")}
          </div>
          <img
            class="big-img"
            id="big-img"
            src="${product.photos[2]}"
            alt="${product.title}"
          />
        </section>
        <div class="product-description-block">
          <h1 class="product-title">${product.title}</h1>
          <form class="product-selector">
            <fieldset class="product-fieldset">
              <label class="product-label" for="color">Color</label>
              <select
                class="product-select"
                type="text"
                placeholder="Selecciona un color"
                id="color"
              >
              ${product.colors
                .map((color) => `<option value="${color}">${color}</option>`)
                .join("")}
              </select>
            </fieldset>
          </form>
          <div class="product-description">
            <span class="product-label">Descripción</span>
            <p>
              ${product.description}
            </p>
          </div>
        </div>
        <div class="product-checkout-block">
          <div class="checkout-container">
            <span class="checkout-total-label">Total:</span>
            <h2 id="price" class="checkout-total-price">$${product.price}</h2>
            <p class="checkout-description">
              ${product.taxPolicy}
            </p>
            <ul class="checkout-policy-list">
              <li>
                <span class="policy-icon"
                  ><img src="./assets/truck.png" alt="Truck"
                /></span>
                <span class="policy-desc"
                  >Agrega el producto al carrito para conocer los costos de
                  envío</span
                >
              </li>
              <li>
                <span class="policy-icon"
                  ><img src="./assets/plane.png" alt="Plane"
                /></span>
                <span class="policy-desc"
                  >Recibí aproximadamente entre 10 y 15 días hábiles,
                  seleccionando envío normal</span
                >
              </li>
            </ul>
            <div class="checkout-process">
              <div class="top">
                <input type="number" min="1" value="1" onclick="changePrice(event)" />
                <button type="button" class="cart-btn">
                  Añadir al Carrito
                </button>
              </div>
            </div>
          </div>
        </div>
  `;
  const detailsSelector = document.querySelector("#details");
  detailsSelector.innerHTML = detailsTemplate;
}

function changeMini(event) {
  const selectedSrc = event.target.src;
  const bigSelector = document.querySelector("#big-img");
  bigSelector.src = selectedSrc;
}

function changePrice(event) {
  const quantity = event.target.value;
  const product = products.find((product) => product.id == idQuery);
  const priceSelector = document.querySelector("#price");
  priceSelector.innerHTML = `$${quantity * product.price}`;
}
printDetails(idQuery);
