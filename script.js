 // script.js

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Cart Interaction - Adding items and displaying a temporary notification
const cartButtons = document.querySelectorAll(".add-to-cart");
cartButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Display a toast message when item is added to the cart
        showToast("Item added to cart!");
    });
});

// Function to show a temporary toast notification
function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = message;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.classList.add("show");
    }, 100); // Add show class to trigger CSS animation
    setTimeout(() => {
        toast.classList.remove("show");
        document.body.removeChild(toast);
    }, 3000); // Remove toast after 3 seconds
}

// Contact Form Validation
document.getElementById("contactForm")?.addEventListener("submit", function(event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        event.preventDefault();
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    }
});

// Tracking Order - Simulated Order Check
document.getElementById("trackOrderButton")?.addEventListener("click", function() {
    const orderId = document.getElementById("orderId").value.trim();
    if (!orderId) {
        alert("Please enter your order ID.");
        return;
    }
    // Simulate an order tracking response
    alert(`Tracking status for Order ID: ${orderId} - Order is in transit.`);
});
