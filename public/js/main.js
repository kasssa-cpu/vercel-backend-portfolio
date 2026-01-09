console.log("MAIN JS BARU JALAN");

import renderProduct from "./products.js";
import initialCart from "./cart.js";
import openNavbar from "./navbar.js";


document.addEventListener('DOMContentLoaded', async () => {
    openNavbar();
    const addCartButtons = await renderProduct();
    console.log(addCartButtons)
    initialCart(addCartButtons);
});















