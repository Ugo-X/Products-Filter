let filteredProducts = [...products];

const productsContainer = document.querySelector(".products-container");

const displayProducts = () => {
  // if statement
  if (filteredProducts.length < 1) {
    productsContainer.innerHTML = `<h5>Sorry no products matched your search </h5>`;
    return;
  }

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
  displayProducts();
});

// Filtering based on compnay btns
const companies = document.querySelector(".companies");

const displayButtons = () => {
  const uniqueButtons = [
    ...new Set(products.map((product) => product.company)),
  ];
  companies.innerHTML = uniqueButtons
    .map((company) => {
      return `  <button class="company-btn btn" data-id = "${company}">${company}</button>`;
    })
    .join("");
  console.log(uniqueButtons);
};

displayButtons();

companies.addEventListener("click", (evt) => {
  const el = evt.target;
  if (el.classList.contains("company-btn")) {
    if (el.dataset.id === "all") {
      filteredProducts = [...products];
    } else {
      filteredProducts = products.filter((product) => {
        return product.company === el.dataset.id;
      });
    }
    searchInput.value = ''
    displayProducts()
  }
});
