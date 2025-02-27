const products = [
    { "id": 1, "name": "Wireless Bluetooth Headphones", "category": "Electronics", "price": 49.99, "rating": 4.5, "image": "https://via.placeholder.com/150" },
    { "id": 2, "name": "Gaming Mouse", "category": "Electronics", "price": 29.99, "rating": 4.2, "image": "https://via.placeholder.com/150" },
    { "id": 3, "name": "Mechanical Keyboard", "category": "Electronics", "price": 79.99, "rating": 4.7, "image": "https://via.placeholder.com/150" },
    { "id": 4, "name": "Smartwatch", "category": "Wearable", "price": 199.99, "rating": 4.8, "image": "https://via.placeholder.com/150" },
    { "id": 5, "name": "Running Shoes", "category": "Fashion", "price": 59.99, "rating": 4.3, "image": "https://via.placeholder.com/150" },
    { "id": 6, "name": "Leather Wallet", "category": "Fashion", "price": 19.99, "rating": 4.0, "image": "https://via.placeholder.com/150" },
    { "id": 7, "name": "Digital Camera", "category": "Electronics", "price": 349.99, "rating": 4.6, "image": "https://via.placeholder.com/150" },
    { "id": 8, "name": "Backpack", "category": "Accessories", "price": 39.99, "rating": 4.4, "image": "https://via.placeholder.com/150" },
    { "id": 9, "name": "Sunglasses", "category": "Fashion", "price": 24.99, "rating": 4.1, "image": "https://via.placeholder.com/150" },
    { "id": 10, "name": "Water Bottle", "category": "Home & Kitchen", "price": 14.99, "rating": 4.2, "image": "https://via.placeholder.com/150" },
    { "id": 11, "name": "Bluetooth Speaker", "category": "Electronics", "price": 59.99, "rating": 4.5, "image": "https://via.placeholder.com/150" },
    { "id": 12, "name": "Electric Kettle", "category": "Home & Kitchen", "price": 34.99, "rating": 4.6, "image": "https://via.placeholder.com/150" },
    { "id": 13, "name": "Portable Power Bank", "category": "Electronics", "price": 39.99, "rating": 4.3, "image": "https://via.placeholder.com/150" },
    { "id": 14, "name": "Smart LED Bulb", "category": "Home & Kitchen", "price": 19.99, "rating": 4.7, "image": "https://via.placeholder.com/150" },
    { "id": 15, "name": "Noise Cancelling Earbuds", "category": "Electronics", "price": 89.99, "rating": 4.8, "image": "https://via.placeholder.com/150" },
    { "id": 16, "name": "Travel Pillow", "category": "Accessories", "price": 22.99, "rating": 4.2, "image": "https://via.placeholder.com/150" },
    { "id": 17, "name": "Yoga Mat", "category": "Fitness", "price": 29.99, "rating": 4.5, "image": "https://via.placeholder.com/150" },
    { "id": 18, "name": "Men's Wrist Watch", "category": "Fashion", "price": 129.99, "rating": 4.6, "image": "https://via.placeholder.com/150" },
    { "id": 19, "name": "Wireless Charger", "category": "Electronics", "price": 27.99, "rating": 4.3, "image": "https://via.placeholder.com/150" },
    { "id": 20, "name": "Graphic T-Shirt", "category": "Fashion", "price": 19.99, "rating": 4.1, "image": "https://via.placeholder.com/150" }
];

document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("searchBar")) {
        document.getElementById("searchBar").addEventListener("input", updateProducts);
        document.getElementById("categoryFilter").addEventListener("change", updateProducts);
        document.getElementById("sortPrice").addEventListener("change", updateProducts);
        updateProducts()
    }
});

function updateProducts() {
    const searchQuery = document.getElementById("searchBar").value.toLowerCase();
    const selectedCategory = document.getElementById("categoryFilter").value;
    const sortOrder = document.getElementById("sortPrice").value;

    let filteredProducts = products.filter(p =>
        (selectedCategory === "all" || p.category === selectedCategory) &&
        p.name.toLowerCase().includes(searchQuery)
    );

    filteredProducts.sort((a, b) => sortOrder === "low-high" ? a.price - b.price : b.price - a.price);
    displayProducts(filteredProducts, searchQuery);
}

function displayProducts(productList, searchQuery) {
    const productListContainer = document.getElementById("productList");
    productListContainer.innerHTML = "";

    productList.forEach(product => {
        let highlightedName = product.name.replace(new RegExp(searchQuery, "gi"), match => `<mark>${match}</mark>`);
        productListContainer.innerHTML += `
            <div class="product">
                <img src="${product.img}" alt="${product.name}">
                <h3>${highlightedName}</h3> <span>Rating:${product.rating}</span>
                <p>₹${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
    });
}

function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let product = products.find(p => p.id === productId);
    let item = cart.find(p => p.id === productId);

    if (item) {
        item.quantity++;
    } else {
        product.quantity = 1;
        cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item added to cart!");
}

function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartTable = document.getElementById("cartItems");
    let cartTotal = document.getElementById("cartTotal");

    if (!cartTable || !cartTotal) return; // Prevent errors on pages without a cart

    cartTable.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        cartTable.innerHTML += `
            <tr>
                <td><img src="${item.img}" width="50"></td>
                <td>${item.name}</td>
                <td>₹${item.price}</td>
                <td>${item.category}</td>
                <td>
                    <button onclick="updateQuantity(${item.id}, -1)">-</button> 
                    ${item.quantity} 
                    <button onclick="updateQuantity(${item.id}, 1)">+</button>
                </td>
                <td><button onclick="removeItem(${item.id})">🗑</button></td>
            </tr>
        `;
    });

    cartTotal.innerText =  "Your cart is empty! Add some products!";
}

function updateQuantity(id, change) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    let item = cart.find(p => p.id === id);

    item.quantity += change;
    if (item.quantity <= 0) cart = cart.filter(p => p.id !== id);

    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

function removeItem(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart = cart.filter(p => p.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

function checkout() {
    if (confirm("Proceed with checkout?")) {
        localStorage.removeItem("cart");
        alert("Thank you for your purchase!");
        displayCart();
    }
}

function goToCart() { location.href = "cart.html"; }
function goToProducts() { location.href = "index.html"; }
