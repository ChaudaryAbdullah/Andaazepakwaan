// Scroll-to-Top Button
document.addEventListener("DOMContentLoaded", () => {
    const scrollTopBtn = document.createElement("button");
    scrollTopBtn.innerText = "⬆️";
    scrollTopBtn.style.position = "fixed";
    scrollTopBtn.style.bottom = "20px";
    scrollTopBtn.style.right = "20px";
    scrollTopBtn.style.display = "none";
    scrollTopBtn.style.backgroundColor = "black";
    scrollTopBtn.style.color = "white";
    scrollTopBtn.style.border = "none";
    scrollTopBtn.style.borderRadius = "50%";
    scrollTopBtn.style.padding = "10px 15px";
    scrollTopBtn.style.cursor = "pointer";
    document.body.appendChild(scrollTopBtn);
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });
    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
// Dynamic Year in Footer
const yearElement = document.querySelector("footer p.mb-1");
if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.innerHTML = `&copy; ${currentYear} Andaaz-e-Pakwan. All rights reserved.`;
}
// Basic Form Validation (For Contact Us Page)
function validateContactForm() {
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (!name || !email || !message) {
        alert("All fields are required!");
        return false;
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        alert("Invalid email address!");
        return false;
    }
    return true;
}
document.addEventListener('DOMContentLoaded', () => {
    const orderButtons = document.querySelectorAll('.order-btn');

    // Function to add items to cart
    const addToCart = (item) => {
        // Retrieve current cart from localStorage
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Add the new item
        cart.push(item);

        // Save updated cart back to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        alert(`${item.name} has been added to your cart!`);
    };

    // Attach event listeners to "ORDER NOW" buttons
    orderButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const card = button.closest('.card');
            const name = card.querySelector('.card-title').textContent;
            const price = parseInt(button.getAttribute('data-price'), 10);
            const image = card.querySelector('img').src;

            // Create the item object
            const item = {
                name,
                price,
                image
            };

            addToCart(item);
        });
    });
});
// Initialize an empty cart array
let cart = [];

// Function to add an item to the cart
function addToCart(itemName, itemPrice, itemImage) {
    // Create a new item object
    const item = {
        name: itemName,
        price: parseFloat(itemPrice),
        image: itemImage,
        quantity: 1,
    };

    // Check if the item is already in the cart
    const existingItem = cart.find(cartItem => cartItem.name === itemName);

    if (existingItem) {
        // Increase quantity if the item already exists
        existingItem.quantity += 1;
    } else {
        // Add new item to the cart
        cart.push(item);
    }

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Show a success message
    alert(`${itemName} has been added to your cart!`);
}

// Load cart from localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }

    // Setup individual button functionality

    // Big Burrgir Button
    document.querySelector('#big-burrgir-btn').addEventListener('click', () => {
        addToCart('Big Burrgir', 750, 'bigburger.avif');
    });

    // Indian Vada Pao Button
    document.querySelector('#vada-pao-btn').addEventListener('click', () => {
        addToCart('Indian Vada Pao', 250, 'paoi.jpg');
    });

    // Tarzan Tikka Button
    document.querySelector('#tarzan-tikka-btn').addEventListener('click', () => {
        addToCart('Tarzan Tikka', 1700, 'tarzantikka.jpg');
    });

    // Smoked Pizza Button
    document.querySelector('#smoked-pizza-btn').addEventListener('click', () => {
        addToCart('Smoked Pizza', 1750, 'smoked.jpg');
    });

    // Honey Banana Pie Button
    document.querySelector('#banana-pie-btn').addEventListener('click', () => {
        addToCart('Honey Banana Pie', 2500, 'pie.jpg');
    });

    // Strawberry Smoothie Button
    document.querySelector('#smoothie-btn').addEventListener('click', () => {
        addToCart('Strawberry Smoothie', 800, 'smth.jpg');
    });

    // Half Cooked Fried Fish Button
    document.querySelector('#fried-fish-btn').addEventListener('click', () => {
        addToCart('Half Cooked Fried Fish', 4000, 'fish.jpg');
    });

    // Salmon Sandwich Button
    document.querySelector('#salmon-sandwich-btn').addEventListener('click', () => {
        addToCart('Salmon Sandwich', 950, 'sandwich.jpg');
    });
});
