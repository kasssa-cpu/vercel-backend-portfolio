export default async function renderProduct() {
    const productList = document.querySelector('.content');
    productList.innerHTML = "";

    try{
        // fetch data dari backend
        const res = await fetch('https://new-portofolio-project.vercel.app/api/products');
        const products = await res.json();
        console.log(res)
    
        products.forEach(product => {
            const li = document.createElement('li');
            li.classList.add('item-wrapper')
            li.innerHTML = `
            <img src="${product.img}" alt="${product.name}" class="image-item">
            <div class="description">
                <h3 class="product-name">${product.name}</h3>
                <h5 class="price-tag">PRICE: <span>Rp</span>${product.price}</h5>
                <button class="add-cart" data-id="${product._id}">
                    Add Cart
                </button>
            </div>
            `;
            productList.appendChild(li);
        });
        return document.querySelectorAll('.add-cart');
    } catch (err) {
        productList.innerHTML = "<p>Gagal memuat produk.</p>";
        console.error(err);
    }
}   

