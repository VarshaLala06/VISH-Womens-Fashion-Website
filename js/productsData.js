const allproducts = [

    // Cafe Aesthetics
    {
        id: 1,
        collection: "Cafe Aesthetics",
        name: "Beige Oversized Hoodie",
        category: "Tops",
        price: 2499,
        image: "assests/products/hoodie.webp",
        description: "Cozy hoodie."
    },
    {
        id: 2,
        collection: "Cafe Aesthetics",
        name: "Light Wash Denim Jacket",
        category: "Tops",
        price: 3299,
        image: "assests/products/2.jpg",
        description: "Denim jacket."
    },
    {
        id: 3,
        collection: "Cafe Aesthetics",
        name: "Brown Knit Sweater",
        category: "Tops",
        price: 2199,
        image: "assests/products/3.jpg",
        description: "Soft sweater."
    },

    // Wedding Elegance
    {
        id: 4,
        collection: "Wedding Elegance",
        name: "Royal Bridal Lehenga",
        category: "Lehengas",
        price: 12999,
        image: "assests/products/4.jpg",
        description: "Bridal lehenga."
    },
    {
        id: 5,
        collection: "Wedding Elegance",
        name: "Golden Silk Saree",
        category: "Sarees",
        price: 7999,
        image: "assests/products/5.jpg",
        description: "Silk saree."
    },
    {
        id: 6,
        collection: "Wedding Elegance",
        name: "Designer Blouse",
        category: "Blouse",
        price: 2499,
        image: "assests/products/6.jpg",
        description: "Designer blouse."
    },

    // Everyday Casuals
    {
        id: 7,
        collection: "Everyday Casuals",
        name: "Graphic T-Shirt",
        category: "T-Shirts",
        price: 999,
        image: "assests/products/7.jpg",
        description: "Cotton tee."
    },
    {
        id: 8,
        collection: "Everyday Casuals",
        name: "Slim Fit Jeans",
        category: "Jeans",
        price: 1999,
        image: "assests/products/8.jpg",
        description: "Stretch jeans."
    },
    {
        id: 9,
        collection: "Everyday Casuals",
        name: "Checked Shirt",
        category: "Shirts",
        price: 1499,
        image: "assests/products/9.jpg",
        description: "Checked shirt."
    },

    // Wander Collection
    {
        id: 10,
        collection: "Wander Collection",
        name: "Cotton Kurta",
        category: "Kurtas",
        price: 1799,
        image: "assests/products/10.jpg",
        description: "Cotton kurta."
    },
    {
        id: 11,
        collection: "Wander Collection",
        name: "Designer Anarkali",
        category: "Dresses",
        price: 3499,
        image: "assests/products/11.jpg",
        description: "Anarkali dress."
    },
    {
        id: 12,
        collection: "Wander Collection",
        name: "Festive Dupatta",
        category: "Tops",
        price: 899,
        image: "assests/products/12.jpg",
        description: "Festive dupatta."
    },

    // Office Essentials
    {
        id: 13,
        collection: "Office Essentials",
        name: "Formal White Shirt",
        category: "Shirts",
        price: 1699,
        image: "assests/products/13.jpg",
        description: "Formal shirt."
    },
    {
        id: 14,
        collection: "Office Essentials",
        name: "Formal Trousers",
        category: "Jeans",
        price: 1999,
        image: "assests/products/14.jpg",
        description: "Office trousers."
    },
    {
        id: 15,
        collection: "Office Essentials",
        name: "Office Blazer",
        category: "Tops",
        price: 4999,
        image: "assests/products/15.jpg",
        description: "Office blazer."
    },

    // Beach Escape
    {
        id: 16,
        collection: "Beach Escape",
        name: "Floral Beach Shirt",
        category: "Shirts",
        price: 1299,
        image: "assests/products/16.jpg",
        description: "Beach shirt."
    },
    {
        id: 17,
        collection: "Beach Escape",
        name: "Beach Co-ord Set",
        category: "Dresses",
        price: 1599,
        image: "assests/products/17.jpg",
        description: "Beach co-ord."
    },
    {
        id: 18,
        collection: "Beach Escape",
        name: "Beach Dress",
        category: "Dresses",
        price: 1799,
        image: "assests/products/18.jpg",
        description: "Flowy dress."
    },

    // Urban Street Style
    {
        id: 19,
        collection: "Urban Street Style",
        name: "Cargo Jeans",
        category: "Jeans",
        price: 2299,
        image: "assests/products/19.jpg",
        description: "Cargo jeans."
    },
    {
        id: 20,
        collection: "Urban Street Style",
        name: "Oversized Tee",
        category: "T-Shirts",
        price: 1199,
        image: "assests/products/20.jpg",
        description: "Oversized tee."
    },
    {
        id: 21,
        collection: "Urban Street Style",
        name: "Bomber Jacket",
        category: "Tops",
        price: 3999,
        image: "assests/products/21.jpg",
        description: "Bomber jacket."
    },

    // Party Glam
    {
        id: 22,
        collection: "Party Glam",
        name: "Sequin Party Dress",
        category: "Dresses",
        price: 3999,
        image: "assests/products/22.jpg",
        description: "Party dress."
    },
    {
        id: 23,
        collection: "Party Glam",
        name: "Party Co-ord Set",
        category: "Dresses",
        price: 4999,
        image: "assests/products/23.jpg",
        description: "Party co-ord."
    },
    {
        id: 24,
        collection: "Party Glam",
        name: "Cocktail Gown",
        category: "Gowns",
        price: 6499,
        image: "assests/products/24.jpg",
        description: "Evening gown."
    },

    // Active Motion
    {
        id: 25,
        collection: "Active Motion",
        name: "Gym T-Shirt",
        category: "T-Shirts",
        price: 899,
        image: "assests/products/25.jpg",
        description: "Workout tee."
    },
    {
        id: 26,
        collection: "Active Motion",
        name: "Gym Leggings",
        category: "Jeans",
        price: 1599,
        image: "assests/products/26.jpg",
        description: "Gym leggings."
    },
    {
        id: 27,
        collection: "Active Motion",
        name: "Performance Hoodie",
        category: "Tops",
        price: 2499,
        image: "assests/products/27.jpg",
        description: "Performance hoodie."
    },
    {
    id: 28,
    name: "Floral Summer Dress",
    category: "Dresses",
    collection: "Beach Escape",
    price: 2299,
    image: "assests/products/28.jpg",
    description: "Lightweight floral dress perfect for vacations and summer outings."
},
{
    id: 29,
    name: "Elegant Maxi Dress",
    category: "Dresses",
    collection: "Party Glam",
    price: 3199,
    image: "assests/products/29.jpg",
    description: "Flowy maxi dress designed for evening parties and celebrations."
},
{
    id: 30,
    name: "Cotton Midi Dress",
    category: "Dresses",
    collection: "Everyday Casuals",
    price: 1899,
    image: "assests/products/30.jpg",
    description: "Comfortable cotton midi dress for daily wear."
},
{
    id: 31,
    name: "Ruffle Sleeve Dress",
    category: "Dresses",
    collection: "Cafe Aesthetics",
    price: 2599,
    image: "assests/products/31.jpg",
    description: "Stylish ruffle sleeve dress with a modern feminine look."
},
{
    id: 32,
    name: "Printed Wrap Dress",
    category: "Dresses",
    collection: "Beach Escape",
    price: 2799,
    image: "assests/products/32.jpg",
    description: "Printed wrap dress crafted for effortless elegance."
},
{
    id: 33,
    name: "Pleated Party Dress",
    category: "Dresses",
    collection: "Party Glam",
    price: 3499,
    image: "assests/products/33.jpg",
    description: "Pleated designer dress for birthdays and special occasions."
},

{
    id: 34,
    name: "Classic White Top",
    category: "Tops",
    collection: "Office Essentials",
    price: 1199,
    image: "assests/products/34.jpg",
    description: "Minimal white top suitable for office and casual styling."
},
{
    id: 35,
    name: "Ribbed Crop Top",
    category: "Tops",
    collection: "Urban Street Style",
    price: 999,
    image: "assests/products/35.jpg",
    description: "Stretchable ribbed crop top with a trendy fit."
},
{
    id: 36,
    name: "Floral Peplum Top",
    category: "Tops",
    collection: "Cafe Aesthetics",
    price: 1399,
    image: "assests/products/36.jpg",
    description: "Elegant peplum top featuring floral prints."
},
{
    id: 37,
    name: "Lace Sleeve Top",
    category: "Tops",
    collection: "Party Glam",
    price: 1699,
    image: "assests/products/37.jpg",
    description: "Soft lace sleeve top designed for evening outings."
},
{
    id: 38,
    name: "Sleeveless Casual Top",
    category: "Tops",
    collection: "Everyday Casuals",
    price: 1099,
    image: "assests/products/38.jpg",
    description: "Comfortable sleeveless top made from breathable fabric."
},
{
    id: 39,
    name: "Printed Tie-Front Top",
    category: "Tops",
    collection: "Beach Escape",
    price: 1499,
    image: "assests/products/39.jpg",
    description: "Stylish tie-front top perfect for holidays."
},

{
    id: 40,
    name: "Graphic Oversized T-Shirt",
    category: "T-Shirts",
    collection: "Urban Street Style",
    price: 999,
    image: "assests/products/40.jpg",
    description: "Oversized graphic tee inspired by street fashion."
},
{
    id: 41,
    name: "Basic Cotton Tee",
    category: "T-Shirts",
    collection: "Everyday Casuals",
    price: 799,
    image: "assests/products/41.jpg",
    description: "Premium cotton T-shirt for everyday comfort."
},
{
    id: 42,
    name: "Typography T-Shirt",
    category: "T-Shirts",
    collection: "Urban Street Style",
    price: 899,
    image: "assests/products/42.jpg",
    description: "Casual typography print T-shirt with relaxed fit."
},
{
    id: 43,
    name: "Striped Round Neck Tee",
    category: "T-Shirts",
    collection: "Cafe Aesthetics",
    price: 999,
    image: "assests/products/43.jpg",
    description: "Classic striped tee for everyday styling."
},
{
    id: 44,
    name: "Relaxed Fit T-Shirt",
    category: "T-Shirts",
    collection: "Active Motion",
    price: 1099,
    image: "assests/products/44.jpg",
    description: "Relaxed fit T-shirt designed for all-day comfort."
},
{
    id: 45,
    name: "Minimal Logo T-Shirt",
    category: "T-Shirts",
    collection: "Urban Street Style",
    price: 1199,
    image: "assests/products/45.jpg",
    description: "Premium logo T-shirt with clean minimalist design."
},
{
    id: 46,
    name: "Classic Formal Shirt",
    category: "Shirts",
    collection: "Office Essentials",
    price: 1799,
    image: "assests/products/46.jpg",
    description: "Premium formal shirt tailored for a polished professional look."
},
{
    id: 47,
    name: "Checked Casual Shirt",
    category: "Shirts",
    collection: "Everyday Casuals",
    price: 1599,
    image: "assests/products/47.jpg",
    description: "Soft checked shirt ideal for everyday comfort and style."
},
{
    id: 48,
    name: "Oversized Linen Shirt",
    category: "Shirts",
    collection: "Cafe Aesthetics",
    price: 1899,
    image: "assests/products/48.jpg",
    description: "Relaxed-fit linen shirt for effortless everyday fashion."
},
{
    id: 49,
    name: "Satin Party Shirt",
    category: "Shirts",
    collection: "Party Glam",
    price: 2199,
    image: "assests/products/49.jpg",
    description: "Elegant satin shirt designed for parties and evening events."
},
{
    id: 50,
    name: "Denim Shirt",
    category: "Shirts",
    collection: "Urban Street Style",
    price: 2099,
    image: "assests/products/50.jpg",
    description: "Stylish denim shirt that pairs perfectly with jeans."
},
{
    id: 51,
    name: "Printed Vacation Shirt",
    category: "Shirts",
    collection: "Beach Escape",
    price: 1699,
    image: "assests/products/51.jpg",
    description: "Printed shirt with vibrant patterns for vacation vibes."
},

{
    id: 52,
    name: "Slim Fit Blue Jeans",
    category: "Jeans",
    collection: "Everyday Casuals",
    price: 2499,
    image: "assests/products/52.jpg",
    description: "Stretchable slim-fit jeans offering all-day comfort."
},
{
    id: 53,
    name: "High Waist Mom Jeans",
    category: "Jeans",
    collection: "Urban Street Style",
    price: 2699,
    image: "assests/products/53.jpg",
    description: "Classic high-waisted mom jeans with a trendy silhouette."
},
{
    id: 54,
    name: "Distressed Denim Jeans",
    category: "Jeans",
    collection: "Urban Street Style",
    price: 2899,
    image: "assests/products/54.jpg",
    description: "Fashionable ripped jeans with a bold streetwear appeal."
},
{
    id: 55,
    name: "Black Skinny Jeans",
    category: "Jeans",
    collection: "Cafe Aesthetics",
    price: 2399,
    image: "assests/products/55.jpg",
    description: "Versatile skinny jeans that complement every outfit."
},
{
    id: 56,
    name: "Wide Leg Jeans",
    category: "Jeans",
    collection: "Everyday Casuals",
    price: 2799,
    image: "assests/products/56.jpg",
    description: "Comfortable wide-leg jeans inspired by modern fashion."
},
{
    id: 57,
    name: "Vintage Straight Jeans",
    category: "Jeans",
    collection: "Urban Street Style",
    price: 2599,
    image: "assests/products/57.jpg",
    description: "Vintage-inspired straight-fit denim with timeless styling."
},

{
    id: 58,
    name: "Pleated Mini Skirt",
    category: "Skirts",
    collection: "Cafe Aesthetics",
    price: 1599,
    image: "assests/products/58.jpg",
    description: "Pleated mini skirt perfect for chic everyday outfits."
},
{
    id: 59,
    name: "Floral Midi Skirt",
    category: "Skirts",
    collection: "Beach Escape",
    price: 1899,
    image: "assests/products/59.jpg",
    description: "Elegant floral midi skirt for breezy summer styling."
},
{
    id: 60,
    name: "Denim A-Line Skirt",
    category: "Skirts",
    collection: "Urban Street Style",
    price: 1799,
    image: "assests/products/60.jpg",
    description: "Classic denim A-line skirt with a modern twist."
},
{
    id: 61,
    name: "Wrap Skirt",
    category: "Skirts",
    collection: "Everyday Casuals",
    price: 1699,
    image: "assests/products/61.jpg",
    description: "Comfortable wrap skirt suitable for daily wear."
},
{
    id: 62,
    name: "Printed Maxi Skirt",
    category: "Skirts",
    collection: "Beach Escape",
    price: 2199,
    image: "assests/products/62.jpg",
    description: "Flowing printed maxi skirt designed for vacations."
},
{
    id: 63,
    name: "Satin Party Skirt",
    category: "Skirts",
    collection: "Party Glam",
    price: 2499,
    image: "assests/products/63.jpg",
    description: "Luxurious satin skirt crafted for parties and celebrations."
},
{
    id: 64,
    collection: "Wedding Elegance",
    name: "Silk Banarasi Saree",
    category: "Sarees",
    price: 4299,
    image: "assests/products/64.jpg",
    description: "Premium Banarasi silk saree for grand occasions."
},
{
    id: 65,
    collection: "Wedding Elegance",
    name: "Kanjivaram Silk Saree",
    category: "Sarees",
    price: 4999,
    image: "assests/products/65.jpg",
    description: "Traditional Kanjivaram saree with rich zari work."
},
{
    id: 66,
    collection: "Party Glam",
    name: "Sequin Party Saree",
    category: "Sarees",
    price: 3599,
    image: "assests/products/66.jpg",
    description: "Elegant sequin saree designed for parties."
},
{
    id: 67,
    collection: "Everyday Casuals",
    name: "Printed Cotton Saree",
    category: "Sarees",
    price: 1799,
    image: "assests/products/67.jpg",
    description: "Comfortable cotton saree for everyday elegance."
},
{
    id: 68,
    collection: "Wedding Elegance",
    name: "Pastel Linen Saree",
    category: "Sarees",
    price: 2499,
    image: "assests/products/68.jpg",
    description: "Minimal pastel linen saree with modern styling."
},
{
    id: 69,
    collection: "Wedding Elegance",
    name: "Designer Embroidered Saree",
    category: "Sarees",
    price: 5499,
    image: "assests/products/69.jpg",
    description: "Designer saree featuring luxurious embroidery."
},

{
    id: 70,
    collection: "Wedding Elegance",
    name: "Bridal Lehenga",
    category: "Lehengas",
    price: 8999,
    image: "assests/products/70.jpg",
    description: "Royal bridal lehenga with intricate embroidery."
},
{
    id: 71,
    collection: "Party Glam",
    name: "Mirror Work Lehenga",
    category: "Lehengas",
    price: 6999,
    image: "assests/products/71.jpg",
    description: "Mirror work lehenga perfect for festive celebrations."
},
{
    id: 72,
    collection: "Wedding Elegance",
    name: "Floral Printed Lehenga",
    category: "Lehengas",
    price: 5299,
    image: "assests/products/72.jpg",
    description: "Floral lehenga crafted for elegant wedding functions."
},
{
    id: 73,
    collection: "Wedding Elegance",
    name: "Velvet Designer Lehenga",
    category: "Lehengas",
    price: 8499,
    image: "assests/products/73.jpg",
    description: "Luxurious velvet lehenga with premium detailing."
},
{
    id: 74,
    collection: "Party Glam",
    name: "Sequin Lehenga Set",
    category: "Lehengas",
    price: 6499,
    image: "assests/products/74.jpg",
    description: "Sparkling sequin lehenga for glamorous evenings."
},
{
    id: 75,
    collection: "Wedding Elegance",
    name: "Traditional Festive Lehenga",
    category: "Lehengas",
    price: 5899,
    image: "assests/products/75.jpg",
    description: "Traditional lehenga for festivals and family events."
},

{
    id: 76,
    collection: "Everyday Casuals",
    name: "Printed Cotton Kurta",
    category: "Kurtas",
    price: 1299,
    image: "assests/products/76.jpg",
    description: "Comfortable cotton kurta for daily wear."
},
{
    id: 77,
    collection: "Office Essentials",
    name: "Straight Fit Kurta",
    category: "Kurtas",
    price: 1599,
    image: "assests/products/77.jpg",
    description: "Elegant straight-fit kurta suitable for office wear."
},
{
    id: 78,
    collection: "Cafe Aesthetics",
    name: "Floral A-Line Kurta",
    category: "Kurtas",
    price: 1699,
    image: "assests/products/78.jpg",
    description: "Stylish floral kurta with an A-line silhouette."
},
{
    id: 79,
    collection: "Wedding Elegance",
    name: "Embroidered Festive Kurta",
    category: "Kurtas",
    price: 2499,
    image: "assests/products/79.jpg",
    description: "Festive embroidered kurta with elegant craftsmanship."
},
{
    id: 80,
    collection: "Everyday Casuals",
    name: "Chikankari Kurta",
    category: "Kurtas",
    price: 2199,
    image: "assests/products/80.jpg",
    description: "Beautiful Chikankari kurta made with soft fabric."
},
{
    id: 81,
    collection: "Party Glam",
    name: "Designer Party Kurta",
    category: "Kurtas",
    price: 2799,
    image: "assests/products/81.jpg",
    description: "Premium party wear kurta with modern styling."
},

{
    id: 82,
    collection: "Party Glam",
    name: "Evening Gown",
    category: "Gowns",
    price: 4299,
    image: "assests/products/82.jpg",
    description: "Elegant evening gown designed for formal occasions."
},
{
    id: 83,
    collection: "Wedding Elegance",
    name: "Ball Gown",
    category: "Gowns",
    price: 6299,
    image: "assests/products/83.jpg",
    description: "Luxury ball gown with premium craftsmanship."
},
{
    id: 84,
    collection: "Party Glam",
    name: "Sequin Designer Gown",
    category: "Gowns",
    price: 5599,
    image: "assests/products/84.jpg",
    description: "Sparkling designer gown perfect for parties."
},
{
    id: 85,
    collection: "Beach Escape",
    name: "Flowy Summer Gown",
    category: "Gowns",
    price: 2999,
    image: "assests/products/85.jpg",
    description: "Lightweight flowy gown for beach vacations."
},
{
    id: 86,
    collection: "Cafe Aesthetics",
    name: "Pastel Satin Gown",
    category: "Gowns",
    price: 3899,
    image: "assests/products/86.jpg",
    description: "Elegant pastel satin gown with a graceful finish."
},
{
    id: 87,
    collection: "Wedding Elegance",
    name: "Luxury Reception Gown",
    category: "Gowns",
    price: 6999,
    image: "assests/products/87.jpg",
    description: "Premium reception gown crafted for unforgettable moments."
},
];