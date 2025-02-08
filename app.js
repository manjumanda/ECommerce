// Product data that we will store in localStorage
const products = [
    {
        id: 1,
        title: "Snacks",
        price: "₹300/pack",
        image: "https://img.freepik.com/premium-photo/indian-street-snack-food-white_55610-2856.jpg?w=740"
    },
    {
        id: 2,
        title: "Chips",
        price: "₹200/pack",
        image: "https://img.freepik.com/free-photo/top-view-tasty-crispy-chips-bucket-with-glass-orange-juice-with-sauce-with-pine-nuts-glass-jar-beige-wooden-table_141793-88880.jpg?t=st=1732352589~exp=1732356189~hmac=18b18d41c05ef44a2fa114dc9a3fb3d258a93d9cc6b460c698a1bfee272f3564&w=1060"
    },
    {
        id: 3,
        title: "Cookies",
        price: "₹250/pack",
        image: "https://img.freepik.com/free-photo/top-view-fresh-grapefruit-with-crackers-cookies-wooden-desk_140725-65951.jpg?t=st=1732352618~exp=1732356218~hmac=0ba2c4fef52bdad41a65c623e1d4c273bdff046aac902133edb7e23b765f2693&w=1060"
    }
];

// Store data in localStorage
function storeProducts() {
    localStorage.setItem('products', JSON.stringify(products));
}

// Retrieve data from localStorage
function loadProducts() {
    const storedProducts = JSON.parse(localStorage.getItem('products'));
    const productList = document.getElementById('product-list');

    // Ensure products are available in localStorage before displaying
    if (storedProducts && storedProducts.length > 0) {
        storedProducts.forEach(product => {
            const productCard = `
                <div class="col">
                    <div class="card">
                        <img src="${product.image}" class="card-img-top" alt="${product.title}">
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text">${product.price}</p>
                        </div>
                    </div>
                </div>
            `;
            productList.innerHTML += productCard;
        });
    } else {
        // If no products in localStorage, show a message
        productList.innerHTML = '<p>No products available at the moment.</p>';
    }
}

// Initialize the app
storeProducts(); // Store products in localStorage
loadProducts();  // Load products from localStorage when the page loads
