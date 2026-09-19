/* =========================================================
   SHOP EASE BACKEND API
   ========================================================= */

const API_BASE_URL = "https://shopease-d2jh.onrender.com/api";

let backendProducts = [];
let backendConnected = false;

/* =========================================================
   BACKEND PAGINATION STATE
   ========================================================= */

let backendCurrentPage = 1;
let backendTotalPages = 1;
let backendTotalProducts = 0;

const BACKEND_PRODUCTS_PER_PAGE = 24;

/* =========================================================
   LOAD PRODUCTS FROM BACKEND
   ========================================================= */

async function loadProductsFromBackend() {
    try {
        console.log("Connecting to ShopEase backend...");

        const response = await fetch(
            `${API_BASE_URL}/products`
        );

        if (!response.ok) {
            throw new Error(
                `Backend returned status ${response.status}`
            );
        }

        const result = await response.json();

        if (!result.success) {
            throw new Error(
                result.message || "Unable to load products"
            );
        }

        backendProducts = result.data || [];
        backendConnected = true;

        console.log(
            `ShopEase backend connected successfully. ${backendProducts.length} products received.`
        );

        return backendProducts;

    } catch (error) {

        backendConnected = false;

        console.error(
            "ShopEase backend connection failed:",
            error
        );

        return [];
    }
}
/* =========================================================
   SHOEASE - COMPLETE JAVASCRIPT
   STEP 1 → STEP 4
========================================================= */


/* =========================================================
   SETTINGS
========================================================= */

const PRODUCTS_PER_PAGE = 24;


/* =========================================================
   CATEGORY DATA
========================================================= */

const categoryData = {

    Fashion: {

        Women: [
            "Dresses",
            "Tops",
            "T-Shirts",
            "Jeans",
            "Trousers",
            "Kurtis",
            "Sarees",
            "Lehengas",
            "Skirts",
            "Jumpsuits"
        ],

        Men: [
            "T-Shirts",
            "Shirts",
            "Jeans",
            "Trousers",
            "Chinos",
            "Kurtas",
            "Blazers",
            "Jackets",
            "Shorts",
            "Sweatshirts"
        ],

        Kids: [
            "Dresses",
            "Frocks",
            "T-Shirts",
            "Shirts",
            "Jeans",
            "Shorts",
            "Kurtas",
            "Lehengas",
            "Joggers",
            "Sweatshirts"
        ]

    },


    Shoes: {

        Women: [
            "Heels",
            "Flats",
            "Sneakers",
            "Sandals",
            "Boots",
            "Loafers",
            "Slides"
        ],

        Men: [
            "Sneakers",
            "Formal Shoes",
            "Casual Shoes",
            "Loafers",
            "Boots",
            "Sports Shoes",
            "Sandals"
        ],

        Kids: [
            "School Shoes",
            "Sneakers",
            "Sports Shoes",
            "Running Shoes",
            "Sandals",
            "Casual Shoes"
        ]

    },


    Electronics: [
        "Mobiles",
        "Tablets",
        "Laptops",
        "Monitors",
        "Headphones",
        "Earbuds",
        "Speakers",
        "Cameras",
        "Gaming",
        "Smart Watches",
        "Mobile Accessories",
        "Computer Accessories",
        "Storage",
        "Chargers",
        "Networking",
        "Smart Home"
    ],


    "Home & Kitchen": [
        "Cookware",
        "Kitchen Appliances",
        "Dining",
        "Storage",
        "Home Decor",
        "Lighting",
        "Furniture",
        "Bedding",
        "Bath",
        "Cleaning",
        "Organization",
        "Bakeware",
        "Kitchen Tools"
    ]

};


/* =========================================================
   BRANDS
========================================================= */

const brands = {

    Fashion: [
        "StyleNest",
        "UrbanAura",
        "TrendLine",
        "ModaCraft",
        "VibeWear",
        "Urban Vogue",
        "EliteThreads",
        "DailyDrape"
    ],

    Shoes: [
        "StepStyle",
        "WalkPro",
        "UrbanStep",
        "SoleCraft",
        "FootFlex",
        "StreetSole",
        "MoveMax"
    ],

    Electronics: [
        "TechNova",
        "ElectroMax",
        "ByteCore",
        "NovaTech",
        "PixelPro",
        "VoltEdge",
        "SmartSphere"
    ],

    "Home & Kitchen": [
        "HomeCraft",
        "CasaLiving",
        "KitchenPro",
        "UrbanHome",
        "ComfortNest",
        "DailyHome",
        "PureLiving"
    ]

};


/* =========================================================
   IMAGE POOLS
========================================================= */

const imagePools = {

    Fashion: [

        "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=80",

        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=80",

        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",

        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",

        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80"

    ],


    Electronics: [

        "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=900&q=80",

        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",

        "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?auto=format&fit=crop&w=900&q=80",

        "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=900&q=80",

        "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=900&q=80"

    ],


    Shoes: [

        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",

        "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80",

        "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80",

        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=80",

        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80"

    ],


    "Home & Kitchen": [

        "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80",

        "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=80",

        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=80",

        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",

        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80"

    ]

};


/* =========================================================
   WORDS
========================================================= */

const words = {

    Fashion: [
        "Classic",
        "Premium",
        "Elegant",
        "Modern",
        "Everyday",
        "Comfort",
        "Signature",
        "Essential"
    ],

    Shoes: [
        "Classic",
        "Comfort",
        "Street",
        "Urban",
        "Premium",
        "Active",
        "Sport",
        "Essential"
    ],

    Electronics: [
        "Smart",
        "Pro",
        "Ultra",
        "Max",
        "Plus",
        "Prime",
        "Advanced",
        "Power"
    ],

    "Home & Kitchen": [
        "Premium",
        "Classic",
        "Essential",
        "Modern",
        "Smart",
        "Elegant",
        "Comfort",
        "Daily"
    ]

};


/* =========================================================
   GLOBAL VARIABLES
========================================================= */

let products = [];

let filteredProducts = [];

let currentPage = 1;

let currentCategory = "All";

let currentAudience = "All";

let currentSearch = "";

let selectedRating = 0;

let selectedPrice = 0;

let detailProduct = null;

let detailQuantity = 1;

let detailSelectedSize = "";


/* =========================================================
   START
========================================================= */

/* =========================================================
   START SHOP EASE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    async () => {

        /*
            First connect to the backend.
        */

        const apiProducts =
            await loadProductsFromBackend();


        /*
            If backend products are available,
            use them.

            If backend is unavailable,
            temporarily fall back to the
            browser-generated products.
        */

        if (apiProducts.length > 0) {

            products = apiProducts;

            console.log(
                `ShopEase is using ${products.length} backend products.`
            );

        } else {

            products = generateProducts();

            console.warn(
                "Backend unavailable. Using temporary local products."
            );

        }


        /*
            Prepare filtered products.
        */

        filteredProducts = [
            ...products
        ];


        /*
            Start the ShopEase UI.
        */

        setupEvents();

        updateCartCount();

        renderDeals();

        renderProducts();

        checkProductPage();

    }
);


/* =========================================================
   GENERATE 10,000 PRODUCTS
========================================================= */

function generateProducts() {

    const list = [];

    let number = 1;


    function addProduct(
        category,
        gender,
        subcategory,
        brand,
        name,
        description,
        price,
        discount,
        index,
        sizes
    ) {

        const prefix =
            category === "Fashion"
                ? "FAS"
                : category === "Shoes"
                    ? "SHO"
                    : category === "Electronics"
                        ? "ELE"
                        : "HOM";


        list.push({

            id:
                `${prefix}-${String(number).padStart(5, "0")}`,

            category,

            gender,

            subcategory,

            brand,

            name,

            description,

            price,

            originalPrice:
                Math.round(
                    price /
                    (1 - discount / 100)
                ),

            discount,

            rating:
                Number(
                    (
                        3.7 +
                        ((index * 13) % 14) / 10
                    ).toFixed(1)
                ),

            reviews:
                80 +
                ((index * 83) % 6000),

            image:
                imagePools[
                category
                ][
                index %
                imagePools[category].length
                ],

            stock:
                3 +
                ((index * 17) % 58),

            deliveryDays:
                2 +
                ((index * 7) % 5),

            sizes:
                sizes || []

        });

        number++;

    }


    /* FASHION */

    const fashionCounts = {

        Women: 1000,

        Men: 900,

        Kids: 600

    };


    Object.entries(
        fashionCounts
    ).forEach(
        ([gender, count]) => {

            for (
                let i = 0;
                i < count;
                i++
            ) {

                const subcategory =
                    categoryData
                        .Fashion
                    [gender]
                    [i %
                    categoryData
                        .Fashion
                    [gender]
                        .length
                    ];


                const brand =
                    brands
                        .Fashion
                    [i %
                    brands
                        .Fashion
                        .length
                    ];


                const word =
                    words
                        .Fashion
                    [i %
                    words
                        .Fashion
                        .length
                    ];


                const price =
                    399 +
                    ((i * 137) % 4200);


                const discount =
                    10 +
                    ((i * 7) % 61);


                addProduct(

                    "Fashion",

                    gender,

                    subcategory,

                    brand,

                    `${word} ${gender}'s ${subcategory}`,

                    `${word} ${subcategory.toLowerCase()} designed for ${gender.toLowerCase()} with a comfortable fit, stylish finish and everyday usability.`,

                    price,

                    discount,

                    i,

                    [
                        "XS",
                        "S",
                        "M",
                        "L",
                        "XL"
                    ]

                );

            }

        }
    );


    /* ELECTRONICS */

    for (
        let i = 0;
        i < 2500;
        i++
    ) {

        const subcategory =
            categoryData
                .Electronics
            [i %
            categoryData
                .Electronics
                .length
            ];


        const brand =
            brands
                .Electronics
            [i %
            brands
                .Electronics
                .length
            ];


        const word =
            words
                .Electronics
            [i %
            words
                .Electronics
                .length
            ];


        const price =
            599 +
            ((i * 173) % 85000);


        const discount =
            5 +
            ((i * 9) % 55);


        addProduct(

            "Electronics",

            "",

            subcategory,

            brand,

            `${brand} ${word} ${subcategory}`,

            `${brand} ${subcategory.toLowerCase()} featuring modern technology, practical performance and reliable everyday functionality.`,

            price,

            discount,

            i,

            []

        );

    }


    /* SHOES */

    const shoeCounts = {

        Women: 1000,

        Men: 900,

        Kids: 600

    };


    Object.entries(
        shoeCounts
    ).forEach(
        ([gender, count]) => {

            for (
                let i = 0;
                i < count;
                i++
            ) {

                const subcategory =
                    categoryData
                        .Shoes
                    [gender]
                    [i %
                    categoryData
                        .Shoes
                    [gender]
                        .length
                    ];


                const brand =
                    brands
                        .Shoes
                    [i %
                    brands
                        .Shoes
                        .length
                    ];


                const word =
                    words
                        .Shoes
                    [i %
                    words
                        .Shoes
                        .length
                    ];


                const price =
                    499 +
                    ((i * 151) % 6500);


                const discount =
                    10 +
                    ((i * 5) % 56);


                addProduct(

                    "Shoes",

                    gender,

                    subcategory,

                    brand,

                    `${word} ${gender}'s ${subcategory}`,

                    `${word} ${subcategory.toLowerCase()} made for ${gender.toLowerCase()} with comfortable cushioning, durable construction and a versatile design.`,

                    price,

                    discount,

                    i,

                    [
                        "6",
                        "7",
                        "8",
                        "9",
                        "10"
                    ]

                );

            }

        }
    );


    /* HOME & KITCHEN */

    for (
        let i = 0;
        i < 2500;
        i++
    ) {

        const subcategory =
            categoryData[
            "Home & Kitchen"
            ][
            i %
            categoryData[
                "Home & Kitchen"
            ].length
            ];


        const brand =
            brands[
            "Home & Kitchen"
            ][
            i %
            brands[
                "Home & Kitchen"
            ].length
            ];


        const word =
            words[
            "Home & Kitchen"
            ][
            i %
            words[
                "Home & Kitchen"
            ].length
            ];


        const price =
            299 +
            ((i * 119) % 25000);


        const discount =
            8 +
            ((i * 7) % 58);


        addProduct(

            "Home & Kitchen",

            "",

            subcategory,

            brand,

            `${brand} ${word} ${subcategory}`,

            `${brand} ${subcategory.toLowerCase()} designed to make everyday home and kitchen tasks easier, more convenient and more enjoyable.`,

            price,

            discount,

            i,

            []

        );

    }


    return list;

}


/* =========================================================
   EVENTS
========================================================= */

function setupEvents() {

    const searchButton =
        document.getElementById(
            "searchButton"
        );


    const searchInput =
        document.getElementById(
            "searchInput"
        );


    if (searchButton) {

        searchButton.addEventListener(
            "click",
            performSearch
        );

    }


    if (searchInput) {

    }


    document
        .getElementById(
            "sortSelect"
        )
        ?.addEventListener(
            "change",
            applyFilters
        );


    document
        .querySelectorAll(
            'input[name="categoryFilter"]'
        )
        .forEach(
            input => {

                input.addEventListener(
                    "change",
                    () => {

                        currentCategory =
                            input.value;

                        currentAudience =
                            "All";

                        applyFilters();

                    }
                );

            }
        );


    document
        .querySelectorAll(
            'input[name="ratingFilter"]'
        )
        .forEach(
            input => {

                input.addEventListener(
                    "change",
                    () => {

                        selectedRating =
                            Number(
                                input.value
                            );

                        applyFilters();

                    }
                );

            }
        );


    document
        .querySelectorAll(
            'input[name="priceFilter"]'
        )
        .forEach(
            input => {

                input.addEventListener(
                    "change",
                    () => {

                        selectedPrice =
                            Number(
                                input.value
                            );

                        applyFilters();

                    }
                );

            }
        );


    document.addEventListener(
        "click",
        event => {

            if (
                !event.target.closest(
                    ".nav-category-wrapper"
                )
            ) {

                closeNavMenus();

            }

        }
    );


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                closeCart();

                closeNavMenus();

                document
                    .querySelectorAll(
                        ".modal-overlay"
                    )
                    .forEach(
                        modal =>
                            modal.classList.remove(
                                "open"
                            )
                    );

            }

        }
    );

}


/* =========================================================
   PRODUCT PAGE
========================================================= */

function checkProductPage() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const id =
        params.get(
            "product"
        );


    if (!id) {

        showHomePage();

        return;

    }


    const product =
        products.find(
            item =>
                item.id === id
        );


    if (!product) {

        showHomePage();

        showToast(
            "Product not found."
        );

        return;

    }


    showProductPage(
        product
    );

}


function showHomePage() {

    document.getElementById(
        "homePage"
    ).style.display = "block";


    document.getElementById(
        "productPage"
    ).style.display = "none";

}


function showProductPage(product) {

    detailProduct =
        product;


    detailQuantity =
        1;


    detailSelectedSize =
        product.sizes?.[0] || "";


    document.getElementById(
        "homePage"
    ).style.display = "none";


    document.getElementById(
        "productPage"
    ).style.display = "block";


    window.scrollTo(
        {
            top: 0,
            behavior: "instant"
        }
    );


    populateProductDetails(
        product
    );


    renderRelatedProducts(
        product
    );

}


/* =========================================================
   PRODUCT DETAILS
========================================================= */

function populateProductDetails(
    product
) {

    setText(
        "detailProductBrand",
        product.brand
    );


    setText(
        "detailProductName",
        product.name
    );


    setText(
        "detailProductRating",
        `⭐ ${product.rating}`
    );


    setText(
        "detailProductReviews",
        `${product.reviews.toLocaleString()} ratings`
    );


    setText(
        "detailProductPrice",
        money(product.price)
    );


    setText(
        "detailProductOriginalPrice",
        money(product.originalPrice)
    );


    setText(
        "detailProductDiscount",
        `${product.discount}% OFF`
    );


    setText(
        "detailProductDescription",
        product.description
    );


    setText(
        "detailReviewScore",
        product.rating
    );


    setText(
        "detailReviewSummary",
        product.rating >= 4.5
            ? "Highly rated by customers"
            : "Popular with shoppers"
    );


    setText(
        "detailStock",

        product.stock <= 10

            ? `Only ${product.stock} left — order soon`

            : `✓ In Stock · ${product.stock} units available`
    );


    setText(
        "detailSellerName",
        `${product.brand} Verified Seller`
    );


    setText(
        "specBrand",
        product.brand
    );


    setText(
        "specCategory",
        product.category
    );


    setText(
        "specSubcategory",
        product.subcategory
    );


    setText(
        "specProductId",
        product.id
    );


    setText(
        "specAvailability",
        product.stock > 0
            ? "In Stock"
            : "Out of Stock"
    );


    const deliveryDate =
        new Date();


    deliveryDate.setDate(
        deliveryDate.getDate() +
        product.deliveryDays
    );


    setText(
        "detailDeliveryDate",
        `Available by ${formatDate(deliveryDate)}`
    );


    const image =
        document.getElementById(
            "detailProductImage"
        );


    image.src =
        product.image;


    image.alt =
        product.name;


    renderGallery(
        product
    );


    renderSizes(
        product
    );


    renderHighlights(
        product
    );


    updateDetailQuantity();

    updateDetailWishlistButton();

    updateBreadcrumb(
        product
    );

}


/* =========================================================
   GALLERY
========================================================= */

function renderGallery(
    product
) {

    const wrapper =
        document.getElementById(
            "productThumbnails"
        );


    if (!wrapper) {
        return;
    }


    const images =
        imagePools[
            product.category
        ].slice(
            0,
            5
        );


    wrapper.innerHTML = "";


    images.forEach(
        (src, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "product-thumb";


            if (
                index === 0
            ) {

                button.classList.add(
                    "active"
                );

            }


            button.innerHTML = `
                <img
                    src="${src}"
                    alt="Product view ${index + 1}"
                >
            `;


            button.onclick =
                () => {

                    document
                        .getElementById(
                            "detailProductImage"
                        )
                        .src = src;


                    wrapper
                        .querySelectorAll(
                            ".product-thumb"
                        )
                        .forEach(
                            item =>
                                item.classList.remove(
                                    "active"
                                )
                        );


                    button.classList.add(
                        "active"
                    );

                };


            wrapper.appendChild(
                button
            );

        }
    );

}


/* =========================================================
   HIGHLIGHTS
========================================================= */

function renderHighlights(
    product
) {

    const list =
        document.getElementById(
            "detailProductHighlights"
        );


    const points = [

        `Premium ${product.subcategory.toLowerCase()} quality`,

        "Designed for everyday use",

        "Quality checked before dispatch",

        `Fast delivery in ${product.deliveryDays}–${product.deliveryDays + 2} days`,

        "Eligible for applicable return and exchange policy"

    ];


    list.innerHTML =
        points
            .map(
                point =>
                    `<li>${escapeHTML(point)}</li>`
            )
            .join("");

}


/* =========================================================
   BREADCRUMB
========================================================= */

function updateBreadcrumb(
    product
) {

    const parts = [
        "Home",
        product.category
    ];


    if (
        product.gender
    ) {

        parts.push(
            product.gender
        );

    }


    parts.push(
        product.subcategory,
        product.name
    );


    document.getElementById(
        "productBreadcrumb"
    ).innerHTML =

        parts
            .map(
                (item, index) => {

                    if (
                        index ===
                        parts.length - 1
                    ) {

                        return `
                            <strong>
                                ${escapeHTML(item)}
                            </strong>
                        `;

                    }


                    return `
                        <span>
                            ${escapeHTML(item)}
                        </span>

                        <b>
                            ›
                        </b>
                    `;

                }
            )
            .join("");

}


/* =========================================================
   SIZES
========================================================= */

function renderSizes(
    product
) {

    const section =
        document.getElementById(
            "detailSizeSection"
        );


    const wrapper =
        document.getElementById(
            "detailSizeOptions"
        );


    const sizes =
        product.sizes || [];

    if (!sizes.length) {

        section.style.display =
            "none";

        return;

    }


    section.style.display =
        "block";


    wrapper.innerHTML = "";


    sizes.forEach(
        size => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "detail-size-option";


            if (
                size ===
                detailSelectedSize
            ) {

                button.classList.add(
                    "selected"
                );

            }


            button.textContent =
                size;


            button.onclick =
                () => {

                    detailSelectedSize =
                        size;

                    renderSizes(
                        product
                    );

                };


            wrapper.appendChild(
                button
            );

        }
    );

}


/* =========================================================
   QUANTITY
========================================================= */

function changeDetailQuantity(
    change
) {

    if (!detailProduct) {
        return;
    }


    detailQuantity =
        Math.max(
            1,

            Math.min(
                detailProduct.stock,

                detailQuantity +
                change
            )
        );


    updateDetailQuantity();

}


function updateDetailQuantity() {

    setText(
        "detailQuantity",
        detailQuantity
    );

}


/* =========================================================
   PRODUCT ACTIONS
========================================================= */

function addDetailProductToCart() {

    if (
        (detailProduct.sizes || []).length &&
        !detailSelectedSize
    ) {

        showToast(
            "Please select a size."
        );

        return false;

    }


    addToCart(
        detailProduct,
        detailQuantity,
        detailSelectedSize
    );

}


function buyDetailProductNow() {
    const added = addDetailProductToCart();

    if (added) {
        openCart();
    }
}

function toggleDetailWishlist() {

    toggleWishlist(
        detailProduct.id,
        true
    );


    updateDetailWishlistButton();

}


function updateDetailWishlistButton() {

    const button =
        document.getElementById(
            "detailWishlistButton"
        );


    const active =
        getWishlist().includes(
            detailProduct?.id
        );


    button.classList.toggle(
        "active",
        active
    );


    button.textContent =
        active
            ? "♥"
            : "♡";

}


/* =========================================================
   DELIVERY CHECK
========================================================= */

function checkDelivery() {

    const input =
        document.getElementById(
            "pincodeInput"
        );


    const result =
        document.getElementById(
            "pincodeResult"
        );


    const pin =
        input.value.trim();


    if (
        !/^[1-9][0-9]{5}$/.test(
            pin
        )
    ) {

        result.textContent =
            "Please enter a valid 6-digit PIN code.";

        result.style.color =
            "#c33c3c";

        return;

    }


    const deliveryDate =
        new Date();


    deliveryDate.setDate(
        deliveryDate.getDate() +
        (
            detailProduct?.deliveryDays ||
            4
        )
    );


    result.textContent =
        `✓ Delivery available. Estimated delivery by ${formatDate(deliveryDate)}.`;

    result.style.color =
        "#138a55";

}


/* =========================================================
   RELATED PRODUCTS
========================================================= */

function renderRelatedProducts(
    product
) {

    const wrapper =
        document.getElementById(
            "relatedProductsGrid"
        );


    let related =
        products
            .filter(
                item =>
                    item.id !== product.id &&
                    item.category === product.category &&
                    (
                        item.subcategory ===
                        product.subcategory ||

                        item.gender ===
                        product.gender
                    )
            )
            .slice(
                0,
                4
            );


    if (
        related.length < 4
    ) {

        related =
            products
                .filter(
                    item =>
                        item.id !== product.id &&
                        item.category === product.category
                )
                .slice(
                    0,
                    4
                );

    }


    wrapper.innerHTML =
        related
            .map(
                product => `

                    <article
                        class="related-product-card"
                        onclick="openProductPage('${product.id}')"
                    >

                        <div class="related-product-image">

                            <img
                                src="${product.image}"
                                alt="${escapeHTML(product.name)}"
                            >

                        </div>


                        <div class="related-product-info">

                            <div class="related-product-brand">
                                ${escapeHTML(product.brand)}
                            </div>

                            <div class="related-product-name">
                                ${escapeHTML(product.name)}
                            </div>

                            <div class="related-product-rating">
                                ⭐ ${product.rating}
                                ·
                                ${product.reviews.toLocaleString()}
                                reviews
                            </div>

                            <div class="related-product-price">
                                ${money(product.price)}
                            </div>

                        </div>

                    </article>

                `
            )
            .join("");

}


function openProductPage(
    id
) {

    window.location.href =
        `index.html?product=${encodeURIComponent(id)}`;

}


function goBackToShop() {

    window.location.href =
        "index.html";

}


/* =========================================================
   PRODUCT LISTING
========================================================= */

function renderProducts() {

    const grid =
        document.getElementById(
            "productGrid"
        );


    const start =
        (currentPage - 1) *
        PRODUCTS_PER_PAGE;


    const pageProducts =
        filteredProducts.slice(
            start,
            start +
            PRODUCTS_PER_PAGE
        );


    grid.innerHTML =
        pageProducts
            .map(
                product =>
                    productCardHTML(
                        product
                    )
            )
            .join("");


    renderPagination();

    updateResultsSummary();

}


function productCardHTML(
    product
) {

    const wishlist =
        getWishlist().includes(
            product.id
        );


    return `

        <article
            class="product-card"
            onclick="openProductPage('${product.id}')"
        >

            <div class="product-image-wrap">

                <img
                    class="product-image"
                    loading="lazy"
                    src="${product.image}"
                    alt="${escapeHTML(product.name)}"
                >


                <button
                    class="product-wishlist ${wishlist ? "active" : ""}"
                    onclick="event.stopPropagation();toggleWishlist('${product.id}')"
                >
                    ${wishlist ? "♥" : "♡"}
                </button>


                <span class="discount-badge">
                    ${product.discount}% OFF
                </span>

            </div>


            <div class="product-card-content">

                <div class="product-brand">
                    ${escapeHTML(product.brand)}
                </div>


                <h3 class="product-name">
                    ${escapeHTML(product.name)}
                </h3>


                <div class="product-rating">

                    ⭐ ${product.rating}

                    <small>
                        (${product.reviews.toLocaleString()})
                    </small>

                </div>


                <div class="product-price-row">

                    <strong>
                        ${money(product.price)}
                    </strong>

                    <span>
                        ${money(product.originalPrice)}
                    </span>

                </div>


                <div class="product-delivery">
                    🚚 Free delivery
                </div>


                ${product.stock <= 10
            ? `
                            <div class="product-stock-warning">
                                Hurry! Only ${product.stock} left
                            </div>
                        `
            : ""
        }


                <button
                    class="view-product-btn"
                    onclick="event.stopPropagation();openProductPage('${product.id}')"
                >
                    View Details
                </button>

            </div>

        </article>

    `;

}


/* =========================================================
   PAGINATION
========================================================= */

function renderPagination() {

    const wrapper =
        document.getElementById(
            "pagination"
        );


    const totalPages =
        Math.ceil(
            filteredProducts.length /
            PRODUCTS_PER_PAGE
        );


    wrapper.innerHTML = "";


    if (
        totalPages <= 1
    ) {

        return;

    }


    function addButton(
        text,
        page,
        disabled = false,
        active = false
    ) {

        const button =
            document.createElement(
                "button"
            );


        button.textContent =
            text;


        button.disabled =
            disabled;


        if (active) {

            button.classList.add(
                "active"
            );

        }


        button.onclick =
            () => {

                currentPage =
                    page;

                renderProducts();

                scrollToProducts();

            };


        wrapper.appendChild(
            button
        );

    }


    addButton(
        "←",
        Math.max(
            1,
            currentPage - 1
        ),
        currentPage === 1
    );


    let start =
        Math.max(
            1,
            currentPage - 2
        );


    let end =
        Math.min(
            totalPages,
            start + 4
        );


    if (
        end - start < 4
    ) {

        start =
            Math.max(
                1,
                end - 4
            );

    }


    for (
        let page = start;
        page <= end;
        page++
    ) {

        addButton(
            page,
            page,
            false,
            page === currentPage
        );

    }


    addButton(
        "→",
        Math.min(
            totalPages,
            currentPage + 1
        ),
        currentPage === totalPages
    );

}


/* =========================================================
   FILTERS
========================================================= */

function applyFilters() {

    const sort =
        document.getElementById(
            "sortSelect"
        ).value;


    filteredProducts =
        products.filter(
            product => {

                const categoryMatch =
                    currentCategory === "All" ||
                    product.category ===
                    currentCategory;


                const audienceMatch =
                    currentAudience === "All" ||
                    product.gender ===
                    currentAudience;


                const searchMatch =
                    !currentSearch ||

                    [
                        product.name,
                        product.brand,
                        product.category,
                        product.subcategory,
                        product.gender,
                        product.description
                    ]
                        .join(" ")
                        .toLowerCase()
                        .includes(
                            currentSearch
                        );


                const ratingMatch =
                    product.rating >=
                    selectedRating;


                const priceMatch =
                    selectedPrice === 0 ||
                    product.price <=
                    selectedPrice;


                return (
                    categoryMatch &&
                    audienceMatch &&
                    searchMatch &&
                    ratingMatch &&
                    priceMatch
                );

            }
        );


    if (
        sort === "price-low"
    ) {

        filteredProducts.sort(
            (a, b) =>
                a.price -
                b.price
        );

    }


    if (
        sort === "price-high"
    ) {

        filteredProducts.sort(
            (a, b) =>
                b.price -
                a.price
        );

    }


    if (
        sort === "rating"
    ) {

        filteredProducts.sort(
            (a, b) =>
                b.rating -
                a.rating
        );

    }


    if (
        sort === "discount"
    ) {

        filteredProducts.sort(
            (a, b) =>
                b.discount -
                a.discount
        );

    }


    currentPage = 1;


    renderProducts();

}


/* =========================================================
   CATEGORY FILTER
========================================================= */

function filterByCategory(
    category
) {

    currentCategory =
        category;


    currentAudience =
        "All";


    currentSearch =
        "";


    document.getElementById(
        "searchInput"
    ).value = "";


    document
        .querySelectorAll(
            'input[name="categoryFilter"]'
        )
        .forEach(
            input => {

                input.checked =
                    input.value ===
                    category;

            }
        );


    closeNavMenus();

    closeCategoryPanels();

    applyFilters();

    scrollToProducts();

}


/* =========================================================
   AUDIENCE FILTER
========================================================= */

function filterByAudience(
    category,
    audience
) {

    currentCategory =
        category;


    currentAudience =
        audience;


    currentSearch =
        "";


    document.getElementById(
        "searchInput"
    ).value = "";


    document
        .querySelectorAll(
            'input[name="categoryFilter"]'
        )
        .forEach(
            input => {

                input.checked =
                    input.value ===
                    category;

            }
        );


    closeNavMenus();

    closeCategoryPanels();

    applyFilters();

    scrollToProducts();

}


/* =========================================================
   SEARCH
========================================================= */

function performSearch() {

    currentSearch =
        document
            .getElementById(
                "searchInput"
            )
            .value
            .trim()
            .toLowerCase();


    currentCategory =
        "All";


    currentAudience =
        "All";


    document
        .querySelectorAll(
            'input[name="categoryFilter"]'
        )
        .forEach(
            input => {

                input.checked =
                    input.value ===
                    "All";

            }
        );


    applyFilters();

    scrollToProducts();

}


/* =========================================================
   CLEAR FILTERS
========================================================= */

function clearFilters() {

    currentCategory =
        "All";


    currentAudience =
        "All";


    currentSearch =
        "";


    selectedRating =
        0;


    selectedPrice =
        0;


    document.getElementById(
        "searchInput"
    ).value = "";


    document
        .querySelectorAll(
            'input[name="categoryFilter"]'
        )
        .forEach(
            input => {

                input.checked =
                    input.value ===
                    "All";

            }
        );


    document
        .querySelectorAll(
            'input[name="ratingFilter"]'
        )
        .forEach(
            input => {

                input.checked =
                    input.value ===
                    "0";

            }
        );


    document
        .querySelectorAll(
            'input[name="priceFilter"]'
        )
        .forEach(
            input => {

                input.checked =
                    input.value ===
                    "0";

            }
        );


    applyFilters();

}


/* =========================================================
   RESULT SUMMARY
========================================================= */

function updateResultsSummary() {

    let text =
        `${filteredProducts.length.toLocaleString()} products available`;


    if (currentSearch) {

        text =
            `${filteredProducts.length.toLocaleString()} products found for "${currentSearch}"`;

    }


    else if (
        currentAudience !== "All"
    ) {

        text =
            `${filteredProducts.length.toLocaleString()} ${currentAudience} products in ${currentCategory}`;

    }


    else if (
        currentCategory !== "All"
    ) {

        text =
            `${filteredProducts.length.toLocaleString()} products in ${currentCategory}`;

    }


    document.getElementById(
        "resultsSummary"
    ).textContent =
        text;

}


/* =========================================================
   DEALS
========================================================= */

function renderDeals() {

    const deals =
        products
            .filter(
                product =>
                    product.discount >= 55
            )
            .slice(
                0,
                4
            );


    document.getElementById(
        "dealGrid"
    ).innerHTML =

        deals
            .map(
                product => `

                    <article
                        class="deal-card"
                        onclick="openProductPage('${product.id}')"
                    >

                        <div class="deal-image">

                            <img
                                src="${product.image}"
                                alt="${escapeHTML(product.name)}"
                            >

                        </div>


                        <div class="deal-content">

                            <span class="deal-discount">
                                ${product.discount}% OFF
                            </span>

                            <h3>
                                ${escapeHTML(product.name)}
                            </h3>

                            <strong>
                                ${money(product.price)}
                            </strong>

                            <button class="deal-button">
                                View Deal →
                            </button>

                        </div>

                    </article>

                `
            )
            .join("");

}


/* =========================================================
   NAV MENUS
========================================================= */

function toggleNavMenu(
    id
) {

    const menu =
        document.getElementById(
            id
        );


    const alreadyOpen =
        menu.classList.contains(
            "open"
        );


    closeNavMenus();


    if (!alreadyOpen) {

        menu.classList.add(
            "open"
        );

    }

}


function closeNavMenus() {

    document
        .querySelectorAll(
            ".category-dropdown"
        )
        .forEach(
            menu =>
                menu.classList.remove(
                    "open"
                )
        );

}


/* =========================================================
   CATEGORY PANELS
========================================================= */

function toggleCategoryPanel(
    id
) {

    const panel =
        document.getElementById(
            id
        );


    const alreadyOpen =
        panel.classList.contains(
            "open"
        );


    closeCategoryPanels();


    if (!alreadyOpen) {

        panel.classList.add(
            "open"
        );

    }

}


function closeCategoryPanels() {

    document
        .querySelectorAll(
            ".category-panel"
        )
        .forEach(
            panel =>
                panel.classList.remove(
                    "open"
                )
        );

}


/* =========================================================
   CART
========================================================= */

function getCart() {

    try {

        return (
            JSON.parse(
                localStorage.getItem(
                    "shopEaseCart"
                )
            ) || []
        );

    }

    catch {

        return [];

    }

}


function saveCart(
    cart
) {

    localStorage.setItem(
        "shopEaseCart",
        JSON.stringify(cart)
    );


    updateCartCount();

}


function addToCart(
    product,
    quantity = 1,
    size = ""
) {

    const cart =
        getCart();


    const existing =
        cart.find(
            item =>
                item.id ===
                product.id &&
                item.size ===
                size
        );


    if (existing) {

        existing.product =
            product;

        existing.quantity +=
            quantity;

    } else {

        cart.push({
            id:
                product.id,

            quantity,

            size,

            product
        });

    }



    saveCart(
        cart
    );


    showToast(
        "Product added to cart."
    );
    return true;

}


function updateCartCount() {

    const count =
        getCart()
            .reduce(
                (
                    total,
                    item
                ) =>
                    total +
                    item.quantity,
                0
            );


    const element =
        document.getElementById(
            "cartCount"
        );


    if (element) {

        element.textContent =
            count;

    }

}


function openCart() {

    document
        .getElementById(
            "cartDrawer"
        )
        .classList.add(
            "open"
        );


    document
        .getElementById(
            "cartOverlay"
        )
        .classList.add(
            "open"
        );


    renderCart();

}


function closeCart() {

    document
        .getElementById(
            "cartDrawer"
        )
        .classList.remove(
            "open"
        );


    document
        .getElementById(
            "cartOverlay"
        )
        .classList.remove(
            "open"
        );

}


/* =========================================================
   CART RENDER
========================================================= */

function renderCart() {

    const wrapper =
        document.getElementById(
            "cartContent"
        );


    const cart =
        getCart();


    if (!cart.length) {

        wrapper.innerHTML = `

            <div class="empty-cart">

                <div class="empty-cart-icon">
                    🛒
                </div>

                <h3>
                    Your cart is empty
                </h3>

                <p>
                    Add products to your cart
                    to see them here.
                </p>

                <button
                    class="btn btn-primary"
                    onclick="closeCart();scrollToProducts()"
                >
                    Start Shopping
                </button>

            </div>

        `;

        return;

    }


    let bagTotal = 0;

    let originalTotal = 0;


    const items =
        cart
            .map(
                (
                    item,
                    index
                ) => {

                    const product =
                        item.product ||
                        products.find(
                            p => p.id === item.id
                        );


                    bagTotal +=
                        product.price *
                        item.quantity;


                    originalTotal +=
                        product.originalPrice *
                        item.quantity;


                    return `

                        <article class="cart-item">

                            <img
                                src="${product.image}"
                                alt="${escapeHTML(product.name)}"
                            >


                            <div class="cart-item-info">

                                <strong>
                                    ${escapeHTML(product.brand)}
                                </strong>

                                <h4>
                                    ${escapeHTML(product.name)}
                                </h4>

                                <p>
                                    ${escapeHTML(product.description)}
                                </p>


                                ${item.size
                            ? `
                                            <div class="cart-size">
                                                Size:
                                                ${escapeHTML(item.size)}
                                            </div>
                                        `
                            : ""
                        }


                                <div class="cart-item-price">
                                    ${money(product.price)}
                                </div>


                                <div class="cart-item-actions">

                                    <button
                                        onclick="changeCartQuantity(${index},-1)"
                                    >
                                        −
                                    </button>

                                    <span>
                                        ${item.quantity}
                                    </span>

                                    <button
                                        onclick="changeCartQuantity(${index},1)"
                                    >
                                        +
                                    </button>

                                </div>


                                <button
                                    class="cart-remove"
                                    onclick="removeCartItem(${index})"
                                >
                                    Remove
                                </button>

                            </div>

                        </article>

                    `;

                }
            )
            .join("");


    const coupon =
        bagTotal >= 1000
            ? Math.min(
                Math.round(
                    bagTotal * 0.10
                ),
                500
            )
            : 0;


    const delivery =
        bagTotal >= 2500
            ? 0
            : 79;


    const convenienceFee =
        29;


    const platformFee =
        22;


    const payable =
        bagTotal -
        coupon +
        delivery +
        convenienceFee +
        platformFee;


    const savings =
        Math.max(
            0,
            originalTotal -
            bagTotal +
            coupon
        );


    wrapper.innerHTML = `

        ${items}


        <div class="cart-extra-box">


            <div class="cart-extra-row">

                <div>

                    <strong>
                        🏷️ Apply Coupon
                    </strong>

                    <p>
                        Use SHOP10 for eligible orders.
                    </p>

                </div>

                <button onclick="applyCoupon()">
                    Select
                </button>

            </div>


            <div class="cart-extra-row">

                <div>

                    <strong>
                        💰 SuperCash
                    </strong>

                    <p>
                        You are earning ₹10 SuperCash
                    </p>

                    <small>
                        Amount will be credited
                        after return window.
                    </small>

                </div>

                <button onclick="showInfo('supercash')">
                    Know more
                </button>

            </div>


            <div class="cart-extra-row">

                <div>

                    <strong>
                        ⭐ Loyalty Points
                    </strong>

                    <p>
                        You have no loyalty points
                        at the moment.
                    </p>

                </div>

                <button onclick="showInfo('loyalty')">
                    Details
                </button>

            </div>


            <div class="cart-extra-row">

                <div>

                    <strong>
                        🧾 GST Invoice
                    </strong>

                    <p>
                        Save up to 24%
                        with GST benefits.
                    </p>

                </div>

                <button onclick="showInfo('gst')">
                    View Details
                </button>

            </div>

        </div>


        ${bagTotal >= 5000
            ? `
                    <div class="free-gift-box">

                        <strong>
                            🎁 Free Gifts
                        </strong>

                        <p>
                            Your order qualifies
                            for gifts worth up to ₹1,500.
                        </p>

                        <button onclick="showInfo('gifts')">
                            Know more
                        </button>

                    </div>
                `
            : ""
        }


        <div class="order-details">

            <h3>
                Order Details
            </h3>


            <div class="order-row">

                <span>
                    Bag Total
                </span>

                <strong>
                    ${money(bagTotal)}
                </strong>

            </div>


            <div class="order-row savings-row">

                <span>
                    Coupon Savings
                </span>

                <strong>
                    - ${money(coupon)}
                </strong>

            </div>


            <div class="order-row">

                <span>
                    Convenience Fee

                    <button
                        onclick="showInfo('convenience')"
                    >
                        What's this?
                    </button>

                </span>

                <strong>
                    ${money(convenienceFee)}
                </strong>

            </div>


            <div class="order-row">

                <span>
                    Delivery Fee
                </span>

                <strong>
                    ${delivery === 0
            ? "FREE"
            : money(delivery)
        }
                </strong>

            </div>


            <div class="order-row">

                <span>
                    Platform Fee
                </span>

                <strong>
                    ${money(platformFee)}
                </strong>

            </div>


            <div class="order-row total-row">

                <span>
                    Amount Payable
                </span>

                <strong>
                    ${money(payable)}
                </strong>

            </div>

        </div>


        <div class="return-policy-box">

            <strong>
                ↩️ Return & Refund Policy
            </strong>

            <p>
                Full amount will be refunded,
                excluding convenience fee.
            </p>

            <button onclick="showInfo('returns')">
                Read Policy
            </button>

        </div>


        <div class="cart-savings">

            You are saving
            <strong>
                ${money(savings)}
            </strong>
            on this order.

        </div>


        <button
            class="proceed-payment-btn"
            onclick="proceedToPayment()"
        >
            Proceed to Payment
        </button>

    `;

}


/* =========================================================
   CART QUANTITY
========================================================= */

function changeCartQuantity(
    index,
    change
) {

    const cart =
        getCart();


    if (!cart[index]) {
        return;
    }


    cart[index].quantity +=
        change;


    if (
        cart[index].quantity <= 0
    ) {

        cart.splice(
            index,
            1
        );

    }


    saveCart(
        cart
    );


    renderCart();

}


function removeCartItem(
    index
) {

    const cart =
        getCart();


    cart.splice(
        index,
        1
    );


    saveCart(
        cart
    );


    renderCart();


    showToast(
        "Product removed from cart."
    );

}


/* =========================================================
   WISHLIST
========================================================= */

function getWishlist() {

    try {

        return (
            JSON.parse(
                localStorage.getItem(
                    "shopEaseWishlist"
                )
            ) || []
        );

    }

    catch {

        return [];

    }

}


function saveWishlist(
    wishlist
) {

    localStorage.setItem(
        "shopEaseWishlist",
        JSON.stringify(
            wishlist
        )
    );

}


function toggleWishlist(
    id,
    silent = false
) {

    let wishlist =
        getWishlist();


    if (
        wishlist.includes(id)
    ) {

        wishlist =
            wishlist.filter(
                item =>
                    item !== id
            );


        if (!silent) {

            showToast(
                "Removed from wishlist."
            );

        }

    }

    else {

        wishlist.push(
            id
        );


        if (!silent) {

            showToast(
                "Added to wishlist."
            );

        }

    }


    saveWishlist(
        wishlist
    );


    if (
        !new URLSearchParams(
            window.location.search
        ).get("product")
    ) {

        renderProducts();

    }

}


function showWishlist() {

    const wishlist =
        getWishlist();


    if (!wishlist.length) {

        showToast(
            "Your wishlist is empty."
        );

        return;

    }


    openProductPage(
        wishlist[0]
    );

}


/* =========================================================
   SIZE GUIDE
========================================================= */

function showSizeGuide() {

    document
        .getElementById(
            "sizeGuideModal"
        )
        .classList.add(
            "open"
        );

}


/* =========================================================
   INFORMATION
========================================================= */

function showInfo(
    type
) {

    const information = {

        account: [
            "ACCOUNT",
            "Your ShopEase Account",
            "Account login, saved addresses, order history and profile settings will be connected in the authentication phase."
        ],

        orders: [
            "ORDERS",
            "Track Your Orders",
            "Order tracking will appear here after checkout and dispatch."
        ],

        contact: [
            "CUSTOMER SERVICE",
            "Contact ShopEase",
            "Customer support will be connected to the production support system."
        ],

        returns: [
            "RETURNS",
            "10-Day Return & Exchange",
            "Eligible products can be returned or exchanged within the applicable return window. Final refund rules depend on the order policy."
        ],

        delivery: [
            "DELIVERY",
            "Delivery Information",
            "Delivery estimates depend on product availability, seller, destination and order time."
        ],

        faq: [
            "HELP",
            "Frequently Asked Questions",
            "ShopEase FAQs will cover orders, payments, delivery, returns and accounts."
        ],

        about: [
            "ABOUT",
            "About ShopEase",
            "ShopEase is a marketplace project bringing fashion, electronics, shoes and home essentials into one shopping experience."
        ],

        privacy: [
            "PRIVACY",
            "Privacy Policy",
            "A complete privacy policy will be published before production launch."
        ],

        terms: [
            "LEGAL",
            "Terms & Conditions",
            "Complete marketplace terms will be published before production launch."
        ],

        security: [
            "SECURITY",
            "Secure Shopping",
            "ShopEase is designed for secure authentication, encrypted connections and secure payment processing."
        ],

        supercash: [
            "SUPERCASH",
            "SuperCash",
            "Save big, spend big and earn rewards on eligible purchases. Rewards are credited after the applicable return window."
        ],

        loyalty: [
            "LOYALTY",
            "Loyalty Points",
            "Loyalty points can be earned on eligible purchases according to the rewards program."
        ],

        gst: [
            "GST",
            "GST Invoice",
            "Eligible business customers can provide GST details during checkout to request a GST invoice."
        ],

        gifts: [
            "FREE GIFTS",
            "Free Gifts",
            "Orders above ₹5,000 may qualify for promotional gifts worth up to ₹1,500."
        ],

        convenience: [
            "ORDER FEE",
            "Convenience Fee",
            "The convenience fee covers certain operational services associated with processing an order."
        ]

    };


    const data =
        information[type] ||
        information.about;


    setText(
        "infoModalKicker",
        data[0]
    );


    setText(
        "infoModalTitle",
        data[1]
    );


    document.getElementById(
        "infoModalBody"
    ).innerHTML =
        `<p>${escapeHTML(data[2])}</p>`;


    document.getElementById(
        "infoModal"
    ).classList.add(
        "open"
    );

}


/* =========================================================
   MODAL
========================================================= */

function closeModal(
    id
) {

    document
        .getElementById(id)
        ?.classList.remove(
            "open"
        );

}


/* =========================================================
   NEWSLETTER
========================================================= */

function subscribeNewsletter(
    event
) {

    event.preventDefault();


    const email =
        document.getElementById(
            "newsletterEmail"
        ).value;


    showToast(
        `Subscribed ${email}`
    );


    event.target.reset();

}


/* =========================================================
   COUPON
========================================================= */

function applyCoupon() {

    showToast(
        "Coupon SHOP10 can be applied at checkout."
    );

}


/* =========================================================
   PAYMENT
========================================================= */

function proceedToPayment() {

    showToast(
        "Checkout will be connected in the next phase."
    );

}


/* =========================================================
   SCROLL
========================================================= */

function scrollToProducts() {

    document
        .getElementById(
            "productsSection"
        )
        ?.scrollIntoView({
            behavior: "smooth"
        });

}


function scrollToDeals() {

    document
        .getElementById(
            "dealsSection"
        )
        ?.scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================================
   TOAST
========================================================= */

function showToast(
    message
) {

    const toast =
        document.getElementById(
            "toast"
        );


    document.getElementById(
        "toastMessage"
    ).textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        window.toastTimer
    );


    window.toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2400
        );

}


/* =========================================================
   HELPERS
========================================================= */

function setText(
    id,
    value
) {

    const element =
        document.getElementById(
            id
        );


    if (element) {

        element.textContent =
            value;

    }

}


function money(
    value
) {

    return new Intl.NumberFormat(
        "en-IN",
        {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
        }
    ).format(
        value
    );

}


function formatDate(
    date
) {

    return date.toLocaleDateString(
        "en-IN",
        {
            day: "numeric",
            month: "short",
            year: "numeric"
        }
    );

}


function escapeHTML(
    value
) {

    return String(value)
        .replaceAll(
            "&",
            "&amp;"
        )
        .replaceAll(
            "<",
            "&lt;"
        )
        .replaceAll(
            ">",
            "&gt;"
        )
        .replaceAll(
            '"',
            "&quot;"
        )
        .replaceAll(
            "'",
            "&#039;"
        );

}
