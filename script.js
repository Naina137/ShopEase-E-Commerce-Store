const API_URL = "http://localhost:5000/api/products";

const productList = document.getElementById("productList");
const cartCount = document.getElementById("cartCount");

let cart = [];
let allProducts = [];


// =========================================
// LOAD PRODUCTS
// =========================================

async function loadProducts() {

    try {

        const response = await fetch(API_URL);

        const data = await response.json();

        console.log("API DATA:", data);

        allProducts = Array.isArray(data)
            ? data
            : data.products;

        if (!allProducts || allProducts.length === 0) {

            productList.innerHTML =
                "<p>No products available.</p>";

            return;
        }


        setupCategories();

        updateStoreStats();

        displayProducts(allProducts);

    }

    catch (error) {

        console.error("Error:", error);

        productList.innerHTML =
            "<p>Unable to connect to the server.</p>";

    }
}


// =========================================
// DISPLAY PRODUCTS
// =========================================

function displayProducts(products) {

    if (!products || products.length === 0) {

        productList.innerHTML =
            "<p>No matching products found.</p>";

        updateProductResult(0);

        return;
    }


    productList.innerHTML = products.map(product => `

        <div class="product-card">

            <h3>${product.name}</h3>

            <p>
                ${product.description || "Quality product"}
            </p>

            <p class="price">
                ₹${product.price}
            </p>

            <p>
                Category: ${product.category}
            </p>

            <p>
                Stock: ${product.stock}
            </p>

            <button
            class="add-to-cart-btn"
            onclick='addToCart(${JSON.stringify(product)})'>
            Add to Cart
        </button>

        </div>

    `).join("");


    updateProductResult(products.length);
}


// =========================================
// CATEGORY FILTER
// =========================================

function setupCategories() {

    const categoryFilter =
        document.getElementById("categoryFilter");

    if (!categoryFilter) return;


    const categories = [
        ...new Set(
            allProducts.map(product => product.category)
        )
    ];


    categoryFilter.innerHTML = `
        <option value="all">
            All Categories
        </option>
    `;


    categories.forEach(category => {

        categoryFilter.innerHTML += `
            <option value="${category}">
                ${category}
            </option>
        `;

    });
}


// =========================================
// SEARCH / FILTER / SORT
// =========================================

function applyFilters() {

    const searchInput =
        document.getElementById("searchInput");

    const categoryFilter =
        document.getElementById("categoryFilter");

    const sortProducts =
        document.getElementById("sortProducts");


    const searchText =
        searchInput
            ? searchInput.value.toLowerCase().trim()
            : "";


    const selectedCategory =
        categoryFilter
            ? categoryFilter.value
            : "all";


    const selectedSort =
        sortProducts
            ? sortProducts.value
            : "default";


    let filteredProducts =
        allProducts.filter(product => {

            const matchesSearch =
                product.name
                    .toLowerCase()
                    .includes(searchText) ||

                (product.description || "")
                    .toLowerCase()
                    .includes(searchText);


            const matchesCategory =
                selectedCategory === "all" ||
                product.category === selectedCategory;


            return matchesSearch && matchesCategory;

        });


    if (selectedSort === "low-high") {

        filteredProducts.sort(
            (a, b) =>
                Number(a.price) - Number(b.price)
        );

    }


    if (selectedSort === "high-low") {

        filteredProducts.sort(
            (a, b) =>
                Number(b.price) - Number(a.price)
        );

    }


    if (selectedSort === "name") {

        filteredProducts.sort(
            (a, b) =>
                a.name.localeCompare(b.name)
        );

    }


    displayProducts(filteredProducts);
}


// =========================================
// PRODUCT RESULT TEXT
// =========================================

function updateProductResult(count) {

    const result =
        document.getElementById("productResult");

    if (!result) return;


    if (count === 0) {

        result.textContent =
            "No products found.";

        return;
    }


    result.textContent =
        `Showing ${count} product${count === 1 ? "" : "s"}.`;
}


// =========================================
// STORE STATISTICS
// =========================================

function updateStoreStats() {

    const totalProducts =
        document.getElementById("totalProducts");

    const totalCategories =
        document.getElementById("totalCategories");


    const categories = [
        ...new Set(
            allProducts.map(product => product.category)
        )
    ];


    if (totalProducts) {

        totalProducts.textContent =
            `${allProducts.length}+`;

    }


    if (totalCategories) {

        totalCategories.textContent =
            `${categories.length}`;

    }
}


// =========================================
// CART
// =========================================

function addToCart(product) {

    const existingProduct =
        cart.find(
            item => item.name === product.name
        );


    if (existingProduct) {

        existingProduct.quantity++;

    }

    else {

        cart.push({
            ...product,
            quantity: 1
        });

    }


    updateCart();
}


function updateCart() {

    const cartItems =
        document.getElementById("cartItems");

    const cartTotal =
        document.getElementById("cartTotal");


    const totalItems =
        cart.reduce(
            (total, product) =>
                total + product.quantity,
            0
        );


    if (cartCount) {

        cartCount.textContent =
            totalItems;

    }


    if (!cartItems) return;


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Your cart is empty.
            </p>
        `;


        if (cartTotal) {

            cartTotal.textContent = "0";

        }


        return;
    }


    cartItems.innerHTML =
        cart.map(
            (product, index) => `

            <div class="cart-item">

                <h3>
                    ${product.name}
                </h3>

                <p class="cart-price">
                    ₹${product.price}
                </p>

                <div class="quantity-box">

                    <button
                        onclick="decreaseQuantity(${index})">
                        −
                    </button>

                    <span>
                        ${product.quantity}
                    </span>

                    <button
                        onclick="increaseQuantity(${index})">
                        +
                    </button>

                </div>

                <button
                    class="remove-item"
                    onclick="removeFromCart(${index})">

                    Remove

                </button>

            </div>

        `
        ).join("");


    const total =
        cart.reduce(
            (sum, product) =>
                sum +
                Number(product.price) *
                product.quantity,
            0
        );


    if (cartTotal) {

        cartTotal.textContent =
            total;

    }
}


function increaseQuantity(index) {

    cart[index].quantity++;

    updateCart();
}


function decreaseQuantity(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    }

    else {

        cart.splice(index, 1);

    }


    updateCart();
}


function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}


// =========================================
// CART PANEL
// =========================================

const cartButton =
    document.getElementById("cartButton");

const cartPanel =
    document.getElementById("cartPanel");

const closeCartButton =
    document.getElementById("closeCart");

const cartOverlay =
    document.getElementById("cartOverlay");


if (cartButton) {

    cartButton.addEventListener(
        "click",
        () => {

            cartPanel.classList.add("active");

            cartOverlay.classList.add("active");

        }
    );

}


function closeCart() {

    if (cartPanel) {

        cartPanel.classList.remove("active");

    }


    if (cartOverlay) {

        cartOverlay.classList.remove("active");

    }
}


if (closeCartButton) {

    closeCartButton.addEventListener(
        "click",
        closeCart
    );

}


if (cartOverlay) {

    cartOverlay.addEventListener(
        "click",
        closeCart
    );

}


// =========================================
// CHECKOUT
// =========================================

const checkoutButton =
    document.getElementById("checkoutButton");


if (checkoutButton) {

    checkoutButton.addEventListener(
        "click",
        () => {

            if (cart.length === 0) {

                alert("Your cart is empty.");

                return;
            }


            alert(
                "Checkout feature will be available soon."
            );

        }
    );

}


// =========================================
// SEARCH EVENTS
// =========================================

const searchInput =
    document.getElementById("searchInput");

const categoryFilter =
    document.getElementById("categoryFilter");

const sortProducts =
    document.getElementById("sortProducts");


if (searchInput) {

    searchInput.addEventListener(
        "input",
        applyFilters
    );

}


if (categoryFilter) {

    categoryFilter.addEventListener(
        "change",
        applyFilters
    );

}


if (sortProducts) {

    sortProducts.addEventListener(
        "change",
        applyFilters
    );

}


// =========================================
// START APPLICATION
// =========================================

loadProducts();