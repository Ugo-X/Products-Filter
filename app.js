let filteredProducts = [...products];

const productsContainer = document.querySelector(".products-container");

const displayProducts = () => {
  // if statement

  productsContainer.innerHTML = filteredProducts
    .map(({ id, title, image, price }) => {
      return ` <!-- single product -->
<article class="product" data-id = "${id}">
  <img src="${image}" alt="product image" class="product-img img">
  <!-- footer -->
  <footer>
    <h5 class="product-name">
${title}
    </h5>
    <span class="product-price">$${price}</span>
  </footer>
</article>
<!-- end of single product -->
`;
    })
    .join("");
};
displayProducts();

// # Filter Based on Text
// select elements
const form = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");

form.addEventListener("keyup", () => {
  const inputValue = searchInput.value.toLowerCase();
  filteredProducts = products.filter((product) => {
    return product.title.includes(inputValue);
  });
  displayProducts()
});


