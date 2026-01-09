// cart.js
export default async function initialCart(addCartButtons) {
    const displayCart = document.querySelector('#cart-link');
    const closeCart = document.querySelector('.close-cart');
    const cartBadge = document.querySelector('.cart-badge');
    const cartList = document.getElementById('cart-list');

    let cart = {};

    // Fetch produk
    const res = await fetch('https://new-portofolio-project.vercel.app/api/products');
    const products = await res.json();

    // Toggle cart
    displayCart.addEventListener('click', () => {
        document.body.classList.toggle('show-display-cart');
    });

    closeCart.addEventListener('click', () => {
        displayCart.click();
    });

    // ADD TO CART BUTTON
    addCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.dataset.id;
            const product = products.find(p => p._id === productId);

            if (cart[productId]) {
                cart[productId].quantity++;
                updateQty(productId);
            } else {
                cart[productId] = { product, quantity: 1 };
                renderItem(productId);
            }

            updateBadge();
        });
    });

    // RENDER SATU ITEM SAJA
    function renderItem(id) {
        const item = cart[id];

        const li = document.createElement('li');
        li.classList.add('item-wrapper');
        li.dataset.itemId = id;

        li.innerHTML = `
            <img src="${item.product.img}" class="image-item">
            <div class="description">
                <h3 class="product-name">${item.product.name}</h3>
                <h5 class="price-tag">PRICE: Rp${item.product.price}</h5>
                <div class="qty-button">
                    <button class="qty-minus" data-id="${id}">-</button>
                    <span class="qty">${item.quantity}</span>
                    <button class="qty-plus" data-id="${id}">+</button>
                </div>
            </div>
        `;

        cartList.appendChild(li);
    }

    // UPDATE QTY
    function updateQty(id) {
        const itemEl = cartList.querySelector(`[data-item-id="${id}"]`);
        if (!itemEl) return;
        itemEl.querySelector('.qty').textContent = cart[id].quantity;
    }

    // EVENT DELEGATION
    cartList.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (!id || !cart[id]) return;

        if (e.target.classList.contains('qty-plus')) {
            cart[id].quantity++;
            updateQty(id);
        }

        if (e.target.classList.contains('qty-minus')) {
            cart[id].quantity--;
            if (cart[id].quantity <= 0) {
                delete cart[id];
                cartList.querySelector(`[data-item-id="${id}"]`).remove();
            } else {
                updateQty(id);
            }
        }

        updateBadge();
    });

    function updateBadge() {
        const total = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
        if (total > 0) {
            cartBadge.textContent = total;
            cartBadge.classList.remove('hidden');
        } else {
            cartBadge.classList.add('hidden');
        }
    }
}
