const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurguer = document.querySelector('.menu');
const mobileMenu = document.querySelector('.container');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector(".product-detail-close")
const aside = document.querySelector(".product-detail");
const producDetailContainer = document.querySelector(".second-product-detail")
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuBurguer.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);


function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains("inactive");

    if (!isAsideClosed) {
        aside.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains("inactive");

    if (!isAsideClosed) {
        aside.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    }
    /* menuDesktop: not yet */
    aside.classList.toggle("inactive");
}

function openProducDetailAside() {
    producDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside() {
    producDetailContainer.classList.add("inactive");
}

const productList = [];
productList.push({
    name: "Bicicleta",
    price: 120,
    image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    name: "Chaqueta",
    price: 50,
    image: "https://images.pexels.com/photos/13094233/pexels-photo-13094233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    name: "Celular",
    price: 200,
    image: "https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    name: "Cámara",
    price: 150,
    image: "https://images.pexels.com/photos/5487134/pexels-photo-5487134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});


/* <div class="product-card">
    <img
        src="https://images.pexels.com/photos/5487134/pexels-photo-5487134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="" />
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img
                src="./assets/Platzi_YardSale_Icons/bt_add_to_cart.svg"
                alt="" />
        </figure>
    </div>
</div> */

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
        productImg.addEventListener("click", openProducDetailAside);
        
        //recordar que product = {name, price, image} -> product.image
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
        
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = '$' + product.price;
        //repasar el $ de diego
        const productName = document.createElement("p");
        productName.innerText = product.name;
        
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./assets/Platzi_YardSale_Icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCart);
        
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        //ahora vamos a insertar el product card, que acabamos de hacerlo, dentro de cards container
        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList)