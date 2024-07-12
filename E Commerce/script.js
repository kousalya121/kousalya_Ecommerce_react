document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            name: "Espresso",
            price: "$3.00",
            image: "https://www.adityabirlacapital.com/healthinsurance/active-together/wp-content/uploads/2019/12/How-Are-Espressos-Good-For-Health_blog_lower_1-1200x675.png",
            description: "A strong and bold coffee."
        },
        {
            name: "Latte",
            price: "$4.00",
            image: "https://www.caffesociety.co.uk/assets/recipe-images/latte-small.jpg",
            description: "A smooth and creamy coffee."
        },
        {
            name: "Cappuccino",
            price: "$3.50",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX16DNQoHtFIwkIP7CT6UTUVdO5RlGIY9-1Q&s",
            description: "A rich and frothy coffee."
        },
        // Add more products as needed
    ];

    const productContainer = document.querySelector('.product-list');
    const cartContainer = document.querySelector('.cart-list');
    const cartCount = document.getElementById('cart-count');
    const checkoutButton = document.getElementById('checkout');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCartCount() {
        cartCount.textContent = cart.length;
    }

    function displayCart() {
        cartContainer.innerHTML = '';
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <span>${item.name} - ${item.price}</span>
                <button data-index="${index}">Remove</button>
            `;
            cartContainer.appendChild(cartItem);
        });
    }

    products.forEach((product, index) => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button>Add to Cart</button>
        `;
        productElement.querySelector('button').addEventListener('click', () => {
            cart.push(products[index]);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            displayCart();
        });
        productContainer.appendChild(productElement);
    });

    cartContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const index = e.target.getAttribute('data-index');
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            displayCart();
        }
    });

    checkoutButton.addEventListener('click', () => {
        alert('Proceed to checkout!');
        // Add checkout functionality here
    });

    updateCartCount();
    displayCart();

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message!');
        contactForm.reset();
    });
});
