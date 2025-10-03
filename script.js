// Fetch products from FakeStoreAPI
async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();

    const productList = document.getElementById("product-list");

    products.forEach(product => {
      const card = document.createElement("div");
      card.classList.add("product-card");

      card.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title.substring(0, 30)}...</h3>
        <p>${product.description.substring(0, 60)}...</p>
        <div class="price">$${product.price}</div>
        <button>Add to Cart</button>
      `;

      productList.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

// Call function on page load
fetchProducts();


