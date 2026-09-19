const express = require("express");

const router = express.Router();

const products = require("../data/products");


/* =========================================================
   GET ALL PRODUCTS
   GET /api/products
   ========================================================= */

router.get("/", (req, res) => {

    try {

        const {
            category,
            gender,
            subcategory,
            search,
            minPrice,
            maxPrice,
            rating,
            page = 1,
            limit = 24
        } = req.query;


        let result = [...products];


        /* =====================================================
           CATEGORY FILTER
           ===================================================== */

        if (category && category !== "All") {

            result = result.filter(
                product =>
                    product.category.toLowerCase() ===
                    category.toLowerCase()
            );

        }


        /* =====================================================
           GENDER / AUDIENCE FILTER
           ===================================================== */

        if (gender && gender !== "All") {

            result = result.filter(
                product =>
                    product.gender &&
                    product.gender.toLowerCase() ===
                    gender.toLowerCase()
            );

        }


        /* =====================================================
           SUBCATEGORY FILTER
           ===================================================== */

        if (subcategory) {

            result = result.filter(
                product =>
                    product.subcategory &&
                    product.subcategory.toLowerCase() ===
                    subcategory.toLowerCase()
            );

        }


        /* =====================================================
           SEARCH
           ===================================================== */

        if (search) {

            const searchText =
                search.toLowerCase().trim();


            result = result.filter(product => {

                const searchableText = [

                    product.name,

                    product.brand,

                    product.category,

                    product.subcategory,

                    product.gender,

                    product.description

                ]
                    .filter(Boolean)
                    .join(" ")
                    .toLowerCase();


                return searchableText.includes(
                    searchText
                );

            });

        }


        /* =====================================================
           MINIMUM PRICE
           ===================================================== */

        if (minPrice !== undefined) {

            const minimum =
                Number(minPrice);


            if (!Number.isNaN(minimum)) {

                result = result.filter(
                    product =>
                        product.price >= minimum
                );

            }

        }


        /* =====================================================
           MAXIMUM PRICE
           ===================================================== */

        if (maxPrice !== undefined) {

            const maximum =
                Number(maxPrice);


            if (!Number.isNaN(maximum)) {

                result = result.filter(
                    product =>
                        product.price <= maximum
                );

            }

        }


        /* =====================================================
           RATING FILTER
           ===================================================== */

        if (rating !== undefined) {

            const minimumRating =
                Number(rating);


            if (!Number.isNaN(minimumRating)) {

                result = result.filter(
                    product =>
                        product.rating >=
                        minimumRating
                );

            }

        }


        /* =====================================================
           PAGINATION
           ===================================================== */

        const currentPage =
            Math.max(
                Number(page) || 1,
                1
            );


        const perPage =
            Math.min(
                Math.max(
                    Number(limit) || 24,
                    1
                ),
                100
            );


        const totalProducts =
            result.length;


        const totalPages =
            Math.ceil(
                totalProducts /
                perPage
            );


        const startIndex =
            (currentPage - 1) *
            perPage;


        const paginatedProducts =
            result.slice(
                startIndex,
                startIndex + perPage
            );


        /* =====================================================
           RESPONSE
           ===================================================== */

        res.json({

            success: true,

            data: paginatedProducts,

            pagination: {

                currentPage,

                perPage,

                totalProducts,

                totalPages,

                hasNextPage:
                    currentPage <
                    totalPages,

                hasPreviousPage:
                    currentPage > 1

            }

        });

    }


    catch (error) {

        console.error(
            "Product API error:",
            error
        );


        res.status(500).json({

            success: false,

            message:
                "Unable to load products."

        });

    }

});


/* =========================================================
   GET PRODUCTS BY CATEGORY
   GET /api/products/category/:category
   ========================================================= */

router.get(
    "/category/:category",
    (req, res) => {

        const category =
            req.params.category;


        const result =
            products.filter(
                product =>
                    product.category.toLowerCase() ===
                    category.toLowerCase()
            );


        res.json({

            success: true,

            data: result,

            count: result.length

        });

    }
);


/* =========================================================
   GET SINGLE PRODUCT
   GET /api/products/:id
   ========================================================= */

router.get(
    "/:id",
    (req, res) => {

        const product =
            products.find(
                item =>
                    item.id ===
                    req.params.id
            );


        if (!product) {

            return res.status(404).json({

                success: false,

                message:
                    "Product not found."

            });

        }


        res.json({

            success: true,

            data: product

        });

    }
);


module.exports = router;