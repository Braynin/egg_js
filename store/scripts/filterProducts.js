const $productList = document.getElementById("productList");
const $inputSearch = document.getElementById("inputSearch");

const handleSearchProduct = (event, productsList) => {
  const valueInputSearch = event.target.value;
  const filterProducts = productsList.filter((product) => {
    return product.name.toLowerCase().includes(valueInputSearch.toLowerCase());
  });
  return filterProducts;
};

const loadProducts = (productsList) => {
  for (const product of productsList) {
    $productList.innerHTML += cardProductTemplate(product);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  loadProducts(products);
});

$inputSearch.addEventListener("keyup", (event) => {
  $productList.innerHTML = "";
  const filteredProductList = handleSearchProduct(event, products);
  loadProducts(filteredProductList);
});
