// This file contains JavaScript code for interactive features of the website.

document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.getElementById('cart-count');

    let cart = [];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const donutId = this.dataset.id;
            const donutName = this.dataset.name;
            const donutPrice = this.dataset.price;

            addToCart(donutId, donutName, donutPrice);
            showConfetti();
        });
    });

    function addToCart(id, name, price) {
        const item = { id, name, price };
        cart.push(item);
        updateCartCount();
    }

    function updateCartCount() {
        cartCount.textContent = cart.length;
    }

    function showConfetti() {
        // Placeholder for confetti animation
        alert('Yay! Donut added to cart! 🎉');
    }
});