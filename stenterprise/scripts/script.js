// script.js

// Get references to elements
const gridContainer = document.querySelector('.grid-container');
const sortingSelect = document.getElementById('sorting');
const cartItemsList = document.querySelector('.cart-items');
const checkoutButton = document.querySelector('.checkout');
const continueShoppingButton = document.querySelector('.continue-shopping');

// Sample product data (replace with your actual product data)
const products = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 500000 },
    // Add more products here
];

// Initialize cart
const cart = [];

// Function to display products
function displayProducts() {
    gridContainer.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="product${product.id}.jpg" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Price: ${product.price} satoshis</p>
            <button class="add-to-cart" data-product-id="${product.id}">Add to Cart</button>
        `;
        gridContainer.appendChild(productDiv);
    });
}

// Function to add product to cart
function addToCart(productId) {
    const product = products.find(product => product.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

// Function to update cart display
function updateCart() {
    cartItemsList.innerHTML = '';
    cart.forEach(product => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${product.name} - ${product.price} satoshis`;
        cartItemsList.appendChild(cartItem);
    });
}

// Add event listener for sorting
sortingSelect.addEventListener('change', () => {
    const sortBy = sortingSelect.value;
    if (sortBy === 'price') {
        products.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'name') {
        products.sort((a, b) => a.name.localeCompare(b.name));
    }
    displayProducts();
});

// Add event listener for adding products to cart
gridContainer.addEventListener('click', event => {
    if (event.target.classList.contains('add-to-cart')) {
        const productId = parseInt(event.target.getAttribute('data-product-id'));
        addToCart(productId);
    }
});

// Add event listener for checkout
checkoutButton.addEventListener('click', () => {
    alert('Proceeding to checkout...');
    // Add your actual checkout logic here
});

// Add event listener for continue shopping
continueShoppingButton.addEventListener('click', () => {
    // Clear the cart
    cart.length = 0;
    updateCart();
    // Scroll to the top of the grid
    gridContainer.scrollIntoView({ behavior: 'smooth' });
});

// Initial display of products
displayProducts();

