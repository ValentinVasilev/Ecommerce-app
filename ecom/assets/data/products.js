const products = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/1/1.jpg",
      "https://dummyjson.com/image/i/products/1/2.jpg",
      "https://dummyjson.com/image/i/products/1/3.jpg",
      "https://dummyjson.com/image/i/products/1/4.jpg",
      "https://dummyjson.com/image/i/products/1/thumbnail.jpg"
    ]
  },
  {
    id: 2,
    title: "iPhone X",
    description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/2/1.jpg",
      "https://dummyjson.com/image/i/products/2/2.jpg",
      "https://dummyjson.com/image/i/products/2/3.jpg",
      "https://dummyjson.com/image/i/products/2/thumbnail.jpg"
    ]
  },
  {
    id: 3,
    title: "Samsung Universe 9",
    description: "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    discountPercentage: 15.46,
    rating: 4.09,
    stock: 36,
    brand: "Samsung",
    category: "smartphones",
    thumbnail: "https://dummyjson.com/image/i/products/3/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/3/1.jpg"
    ]
  },
  {
    id: 4,
    title: "OPPOF19",
    description: "OPPO F19 is officially announced on April 2021.",
    price: 280,
    discountPercentage: 17.91,
    rating: 4.3,
    stock: 123,
    brand: "OPPO",
    category: "smartphones",
    thumbnail: "https://dummyjson.com/image/i/products/4/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/4/1.jpg",
      "https://dummyjson.com/image/i/products/4/2.jpg",
      "https://dummyjson.com/image/i/products/4/3.jpg",
      "https://dummyjson.com/image/i/products/4/4.jpg",
      "https://dummyjson.com/image/i/products/4/thumbnail.jpg"
    ]
  },
  {
    id: 5,
    title: "Huawei P30",
    description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    price: 499,
    discountPercentage: 10.58,
    rating: 4.09,
    stock: 32,
    brand: "Huawei",
    category: "smartphones",
    thumbnail: "https://dummyjson.com/image/i/products/5/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/5/1.jpg",
      "https://dummyjson.com/image/i/products/5/2.jpg",
      "https://dummyjson.com/image/i/products/5/3.jpg"
    ]
  },
  {
    id: 6,
    title: "MacBook Pro",
    description: "MacBook Pro 2021 with mini-LED display may launch between September, November",
    price: 1749,
    discountPercentage: 11.02,
    rating: 4.57,
    stock: 83,
    brand: "APPle",
    category: "laptops",
    thumbnail: "https://dummyjson.com/image/i/products/6/thumbnail.png",
    images: [
      "https://dummyjson.com/image/i/products/6/1.png",
      "https://dummyjson.com/image/i/products/6/2.jpg",
      "https://dummyjson.com/image/i/products/6/3.png",
      "https://dummyjson.com/image/i/products/6/4.jpg"
    ]
  },
  {
    id: 7,
    title: "Samsung Galaxy Book",
    description: "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
    price: 1499,
    discountPercentage: 4.15,
    rating: 4.25,
    stock: 50,
    brand: "Samsung",
    category: "laptops",
    thumbnail: "https://dummyjson.com/image/i/products/7/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/7/1.jpg",
      "https://dummyjson.com/image/i/products/7/2.jpg",
      "https://dummyjson.com/image/i/products/7/3.jpg",
      "https://dummyjson.com/image/i/products/7/thumbnail.jpg"
    ]
  },
  {
    id: 8,
    title: "Microsoft Surface Laptop 4",
    description: "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
    price: 1499,
    discountPercentage: 10.23,
    rating: 4.43,
    stock: 68,
    brand: "Microsoft Surface",
    category: "laptops",
    thumbnail: "https://dummyjson.com/image/i/products/8/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/8/1.jpg",
      "https://dummyjson.com/image/i/products/8/2.jpg",
      "https://dummyjson.com/image/i/products/8/3.jpg",
      "https://dummyjson.com/image/i/products/8/4.jpg",
      "https://dummyjson.com/image/i/products/8/thumbnail.jpg"
    ]
  },
  {
    id: 9,
    title: "Infinix INBOOK",
    description: "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
    price: 1099,
    discountPercentage: 11.83,
    rating: 4.54,
    stock: 96,
    brand: "Infinix",
    category: "laptops",
    thumbnail: "https://dummyjson.com/image/i/products/9/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/9/1.jpg",
      "https://dummyjson.com/image/i/products/9/2.png",
      "https://dummyjson.com/image/i/products/9/3.png",
      "https://dummyjson.com/image/i/products/9/4.jpg",
      "https://dummyjson.com/image/i/products/9/thumbnail.jpg"
    ]
  },
  {
    id: 10,
    title: "HP Pavilion 15-DK1056WM",
    description: "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
    price: 1099,
    discountPercentage: 6.18,
    rating: 4.43,
    stock: 89,
    brand: "HP Pavilion",
    category: "laptops",
    thumbnail: "https://dummyjson.com/image/i/products/10/thumbnail.jpeg",
    images: [
      "https://dummyjson.com/image/i/products/10/1.jpg",
      "https://dummyjson.com/image/i/products/10/2.jpg",
      "https://dummyjson.com/image/i/products/10/3.jpg",
      "https://dummyjson.com/image/i/products/10/thumbnail.jpeg"
    ]
  },
  {
    id: 11,
    title: "perfume Oil",
    description: "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
    price: 13,
    discountPercentage: 8.4,
    rating: 4.26,
    stock: 65,
    brand: "Impression of Acqua Di Gio",
    category: "fragrances",
    thumbnail: "https://dummyjson.com/image/i/products/11/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/11/1.jpg",
      "https://dummyjson.com/image/i/products/11/2.jpg",
      "https://dummyjson.com/image/i/products/11/3.jpg",
      "https://dummyjson.com/image/i/products/11/thumbnail.jpg"
    ]
  },
  {
    id: 12,
    title: "Brown Perfume",
    description: "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
    price: 40,
    discountPercentage: 15.66,
    rating: 4,
    stock: 52,
    brand: "Royal_Mirage",
    category: "fragrances",
    thumbnail: "https://dummyjson.com/image/i/products/12/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/12/1.jpg",
      "https://dummyjson.com/image/i/products/12/2.jpg",
      "https://dummyjson.com/image/i/products/12/3.png",
      "https://dummyjson.com/image/i/products/12/4.jpg",
      "https://dummyjson.com/image/i/products/12/thumbnail.jpg"
    ]
  },
  {
    id: 13,
    title: "Fog Scent Xpressio Perfume",
    description: "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
    price: 13,
    discountPercentage: 8.14,
    rating: 4.59,
    stock: 61,
    brand: "Fog Scent Xpressio",
    category: "fragrances",
    thumbnail: "https://dummyjson.com/image/i/products/13/thumbnail.webp",
    images: [
      "https://dummyjson.com/image/i/products/13/1.jpg",
      "https://dummyjson.com/image/i/products/13/2.png",
      "https://dummyjson.com/image/i/products/13/3.jpg",
      "https://dummyjson.com/image/i/products/13/4.jpg",
      "https://dummyjson.com/image/i/products/13/thumbnail.webp"
    ]
  },
  {
    id: 14,
    title: "Non-Alcoholic Concentrated Perfume Oil",
    description: "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
    price: 120,
    discountPercentage: 15.6,
    rating: 4.21,
    stock: 114,
    brand: "Al Munakh",
    category: "fragrances",
    thumbnail: "https://dummyjson.com/image/i/products/14/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/14/1.jpg",
      "https://dummyjson.com/image/i/products/14/2.jpg",
      "https://dummyjson.com/image/i/products/14/3.jpg",
      "https://dummyjson.com/image/i/products/14/thumbnail.jpg"
    ]
  },
  {
    id: 15,
    title: "Eau De Perfume Spray",
    description: "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
    price: 30,
    discountPercentage: 10.99,
    rating: 4.7,
    stock: 105,
    brand: "Lord - Al-Rehab",
    category: "fragrances",
    thumbnail: "https://dummyjson.com/image/i/products/15/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/15/1.jpg",
      "https://dummyjson.com/image/i/products/15/2.jpg",
      "https://dummyjson.com/image/i/products/15/3.jpg",
      "https://dummyjson.com/image/i/products/15/4.jpg",
      "https://dummyjson.com/image/i/products/15/thumbnail.jpg"
    ]
  },
  {
    id: 16,
    title: "Hyaluronic Acid Serum",
    description: "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
    price: 19,
    discountPercentage: 13.31,
    rating: 4.83,
    stock: 110,
    brand: "L'Oreal Paris",
    category: "skincare",
    thumbnail: "https://dummyjson.com/image/i/products/16/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/16/1.png",
      "https://dummyjson.com/image/i/products/16/2.webp",
      "https://dummyjson.com/image/i/products/16/3.jpg",
      "https://dummyjson.com/image/i/products/16/4.jpg",
      "https://dummyjson.com/image/i/products/16/thumbnail.jpg"
    ]
  },
  {
    id: 17,
    title: "Tree Oil 30ml",
    description: "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
    price: 12,
    discountPercentage: 4.09,
    rating: 4.52,
    stock: 78,
    brand: "Hemani Tea",
    category: "skincare",
    thumbnail: "https://dummyjson.com/image/i/products/17/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/17/1.jpg",
      "https://dummyjson.com/image/i/products/17/2.jpg",
      "https://dummyjson.com/image/i/products/17/3.jpg",
      "https://dummyjson.com/image/i/products/17/thumbnail.jpg"
    ]
  },
  {
    id: 18,
    title: "Oil Free Moisturizer 100ml",
    description: "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
    price: 40,
    discountPercentage: 13.1,
    rating: 4.56,
    stock: 88,
    brand: "Dermive",
    category: "skincare",
    thumbnail: "https://dummyjson.com/image/i/products/18/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/18/1.jpg",
      "https://dummyjson.com/image/i/products/18/2.jpg",
      "https://dummyjson.com/image/i/products/18/3.jpg",
      "https://dummyjson.com/image/i/products/18/4.jpg",
      "https://dummyjson.com/image/i/products/18/thumbnail.jpg"
    ]
  },
  {
    id: 19,
    title: "Skin Beauty Serum.",
    description: "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
    price: 46,
    discountPercentage: 10.68,
    rating: 4.42,
    stock: 54,
    brand: "ROREC White Rice",
    category: "skincare",
    thumbnail: "https://dummyjson.com/image/i/products/19/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/19/1.jpg",
      "https://dummyjson.com/image/i/products/19/2.jpg",
      "https://dummyjson.com/image/i/products/19/3.png",
      "https://dummyjson.com/image/i/products/19/thumbnail.jpg"
    ]
  },
  {
    id: 20,
    title: "Freckle Treatment Cream- 15gm",
    description: "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
    price: 70,
    discountPercentage: 16.99,
    rating: 4.06,
    stock: 140,
    brand: "Fair & Clear",
    category: "skincare",
    thumbnail: "https://dummyjson.com/image/i/products/20/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/20/1.jpg",
      "https://dummyjson.com/image/i/products/20/2.jpg",
      "https://dummyjson.com/image/i/products/20/3.jpg",
      "https://dummyjson.com/image/i/products/20/4.jpg",
      "https://dummyjson.com/image/i/products/20/thumbnail.jpg"
    ]
  },
  {
    id: 21,
    title: "- Daal Masoor 500 grams",
    description: "Fine quality Branded Product Keep in a cool and dry place",
    price: 20,
    discountPercentage: 4.81,
    rating: 4.44,
    stock: 133,
    brand: "Saaf & Khaas",
    category: "groceries",
    thumbnail: "https://dummyjson.com/image/i/products/21/thumbnail.png",
    images: [
      "https://dummyjson.com/image/i/products/21/1.png",
      "https://dummyjson.com/image/i/products/21/2.jpg",
      "https://dummyjson.com/image/i/products/21/3.jpg"
    ]
  },
  {
    id: 22,
    title: "Elbow Macaroni - 400 gm",
    description: "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
    price: 14,
    discountPercentage: 15.58,
    rating: 4.57,
    stock: 146,
    brand: "Bake Parlor Big",
    category: "groceries",
    thumbnail: "https://dummyjson.com/image/i/products/22/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/22/1.jpg",
      "https://dummyjson.com/image/i/products/22/2.jpg",
      "https://dummyjson.com/image/i/products/22/3.jpg"
    ]
  },
  {
    id: 23,
    title: "Orange Essence Food Flavou",
    description: "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
    price: 14,
    discountPercentage: 8.04,
    rating: 4.85,
    stock: 26,
    brand: "Baking Food Items",
    category: "groceries",
    thumbnail: "https://dummyjson.com/image/i/products/23/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/23/1.jpg",
      "https://dummyjson.com/image/i/products/23/2.jpg",
      "https://dummyjson.com/image/i/products/23/3.jpg",
      "https://dummyjson.com/image/i/products/23/4.jpg",
      "https://dummyjson.com/image/i/products/23/thumbnail.jpg"
    ]
  },
  {
    id: 24,
    title: "cereals muesli fruit nuts",
    description: "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
    price: 46,
    discountPercentage: 16.8,
    rating: 4.94,
    stock: 113,
    brand: "fauji",
    category: "groceries",
    thumbnail: "https://dummyjson.com/image/i/products/24/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/24/1.jpg",
      "https://dummyjson.com/image/i/products/24/2.jpg",
      "https://dummyjson.com/image/i/products/24/3.jpg",
      "https://dummyjson.com/image/i/products/24/4.jpg",
      "https://dummyjson.com/image/i/products/24/thumbnail.jpg"
    ]
  },
  {
    id: 25,
    title: "Gulab Powder 50 Gram",
    description: "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds",
    price: 70,
    discountPercentage: 13.58,
    rating: 4.87,
    stock: 47,
    brand: "Dry Rose",
    category: "groceries",
    thumbnail: "https://dummyjson.com/image/i/products/25/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/25/1.png",
      "https://dummyjson.com/image/i/products/25/2.jpg",
      "https://dummyjson.com/image/i/products/25/3.png",
      "https://dummyjson.com/image/i/products/25/4.jpg",
      "https://dummyjson.com/image/i/products/25/thumbnail.jpg"
    ]
  },
  {
    id: 26,
    title: "Plant Hanger For Home",
    description: "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
    price: 41,
    discountPercentage: 17.86,
    rating: 4.08,
    stock: 131,
    brand: "Boho Decor",
    category: "home-decoration",
    thumbnail: "https://dummyjson.com/image/i/products/26/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/26/1.jpg",
      "https://dummyjson.com/image/i/products/26/2.jpg",
      "https://dummyjson.com/image/i/products/26/3.jpg",
      "https://dummyjson.com/image/i/products/26/4.jpg",
      "https://dummyjson.com/image/i/products/26/5.jpg",
      "https://dummyjson.com/image/i/products/26/thumbnail.jpg"
    ]
  },
  {
    id: 27,
    title: "Flying Wooden Bird",
    description: "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
    price: 51,
    discountPercentage: 15.58,
    rating: 4.41,
    stock: 17,
    brand: "Flying Wooden",
    category: "home-decoration",
    thumbnail: "https://dummyjson.com/image/i/products/27/thumbnail.webp",
    images: [
      "https://dummyjson.com/image/i/products/27/1.jpg",
      "https://dummyjson.com/image/i/products/27/2.jpg",
      "https://dummyjson.com/image/i/products/27/3.jpg",
      "https://dummyjson.com/image/i/products/27/4.jpg",
      "https://dummyjson.com/image/i/products/27/thumbnail.webp"
    ]
  },
  {
    id: 28,
    title: "3D Embellishment Art Lamp",
    description: "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
    price: 20,
    discountPercentage: 16.49,
    rating: 4.82,
    stock: 54,
    brand: "LED Lights",
    category: "home-decoration",
    thumbnail: "https://dummyjson.com/image/i/products/28/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/28/1.jpg",
      "https://dummyjson.com/image/i/products/28/2.jpg",
      "https://dummyjson.com/image/i/products/28/3.png",
      "https://dummyjson.com/image/i/products/28/4.jpg",
      "https://dummyjson.com/image/i/products/28/thumbnail.jpg"
    ]
  },
  {
    id: 29,
    title: "Handcraft Chinese style",
    description: "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
    price: 60,
    discountPercentage: 15.34,
    rating: 4.44,
    stock: 7,
    brand: "luxury palace",
    category: "home-decoration",
    thumbnail: "https://dummyjson.com/image/i/products/29/thumbnail.webp",
    images: [
      "https://dummyjson.com/image/i/products/29/1.jpg",
      "https://dummyjson.com/image/i/products/29/2.jpg",
      "https://dummyjson.com/image/i/products/29/3.webp",
      "https://dummyjson.com/image/i/products/29/4.webp",
      "https://dummyjson.com/image/i/products/29/thumbnail.webp"
    ]
  },
  {
    id: 30,
    title: "Key Holder",
    description: "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
    price: 30,
    discountPercentage: 2.92,
    rating: 4.92,
    stock: 54,
    brand: "Golden",
    category: "home-decoration",
    thumbnail: "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/30/1.jpg",
      "https://dummyjson.com/image/i/products/30/2.jpg",
      "https://dummyjson.com/image/i/products/30/3.jpg",
      "https://dummyjson.com/image/i/products/30/thumbnail.jpg"
    ]
  },
  // {
  //   id: 7631,
  //   "SKU": "HEH-9133",
  //   "Name": "On Cloud Nine Pillow",
  //   "Product URL": "https://www.domain.com/product/heh-9133",
  //   price: 24.99,
  //   "Retail Price": 24.99,
  //   "Thumbnail URL": "https://www.domain.com/images/heh-9133_600x600.png",
  //   "Search Keywords": "lorem, ipsum, dolor, ...", description: "Sociosqu facilisis duis ...",
  //   category: "Home>Home Decor>Pillows|Back In Stock", "Category ID": "298|511", brand: "FabDecor",
  //   "Child SKU": "", "Child Price": "", "Color": "White", "Color Family": "White", "Color Swatches": "",
  //   "Size": "", "Shoe Size": "", "Pants Size": "", "Occassion": "", "Season": "", "Badges": "",
  //   "Rating Avg": 4.2,
  //   "Rating Count": 8,
  //   "Inventory Count": 21,
  //   "Date Created": "2018-03-03 17:41:13"
  // },
  // { id: 7615, "SKU": "HEH-2245", "Name": "Simply Sweet Blouse", "Product URL": "https://www.domain.com/product/heh-2245", price: 42, "Retail Price": 59.95, "Thumbnail URL": "https://www.domain.com/images/heh-2245_600x600.png", "Search Keywords": "lorem, ipsum, dolor, ...", description: "Sociosqu facilisis duis ...", category: "Clothing>Tops>Blouses|Clearance|Tops On Sale", "Category ID": "285|512|604", brand: "Entity Apparel", "Child SKU": "HEH-2245-RSWD-SM|HEH-2245-RSWD-MD|HEH-2245-THGR-SM|EH-2245-THGR-MD|HEH-2245-DKCH-SM|HEH-2245-DKCH-MD", "Child Price": "42|59.99", "Color": "Rosewood|Thyme Green|Dark Charcoal", "Color Family": "Red|Green|Grey", "Color Swatches": "[{\"color\":\"Rosewood\", \"family\":\"Red\", \"swatch_hex\":\"#65000b\", \"thumbnail\":\"/images/heh-2245-rswd-sm_600x600.png\", \"price\":42}, {\"color\":\"Thyme Green\", \"family\":\"Green\", \"swatch_img\":\"/swatches/thyme_green.png\", \"thumbnail\":\"/images/heh-2245-thgr-sm_600x600.png\", \"price\":59.99}, {\"color\":\"Dark Charcoal\", \"family\":\"Grey\", \"swatch_hex\":\"#36454f\", \"thumbnail\":\"/images/heh-2245-dkch-sm_600x600.png\", \"price\":59.99}]", "Size": "Small|Medium", "Shoe Size": "", "Pants Size": "", "Occassion": "", "Season": "Summer|Spring", "Badges": "Exclusive|Clearance", "Rating Avg": 4.5, "Rating Count": 10, "Inventory Count": 8, "Date Created": "2018-03-20 22:24:21" },
  // { id: 8100, "SKU": "WKS-6016", "Name": "Uptown Girl Blouse", "Product URL": "https://www.domain.com/product/wks-6016", price: 58, "Retail Price": 89.95, "Thumbnail URL": "https://www.domain.com/images/wks-6016_600x600.png", "Search Keywords": "lorem, ipsum, dolor, ...", description: "Sociosqu facilisis duis ...", category: "Clothing>Tops>Blouses", "Category ID": 285, brand: "Entity Apparel", "Child SKU": "WKS-6016-CORD-MD|WKS-6016-KEGR-MD", "Child Price": "", "Color": "Coral Red|Kelly Green", "Color Family": "Red|Green", "Color Swatches": "[{\"color\":\"Coral Red\", \"family\":\"Red\", \"swatch_img\":\"/swatches/coral_red.png\", \"thumbnail\":\"/images/wks-6016-cord-md_600x600.png\", \"price\":58}, {\"color\":\"Kelly Green\", \"family\":\"Green\", \"swatch_img\":\"/swatches/kelly_green.png\", \"thumbnail\":\"/images/wks-6016-kegr-md_600x600.png\", \"price\":58}]", "Size": "Medium", "Shoe Size": "", "Pants Size": "", "Occassion": "", "Season": "Summer|Spring", "Badges": "Exclusive", "Rating Avg": 4.2, "Rating Count": 11, "Inventory Count": 9, "Date Created": "2018-03-16 21:55:28" },
  // { id: 6489, "SKU": "DKO-PROF", "Name": "Knock Your Socks Off Lace-Up Heels", "Product URL": "https://www.domain.com/product/dko-prof", price: 38, "Retail Price": 60, "Thumbnail URL": "https://www.domain.com/images/dko-prof_600x600.png", "Search Keywords": "lorem, ipsum, dolor, ...", description: "Sociosqu facilisis duis ...", category: "Shoes>Heels>Lace-Up Heels|Featured Products|Shoes On Sale", "Category ID": "310|719|605", brand: "Spark Collective", "Child SKU": "DKO-PROF-BLK-5|DKO-PROF-BLK-5.5|DKO-PROF-BLK-6|DKO-PROF-BLK-7|DKO-PROF-BLK-7.5", "Child Price": "", "Color": "Black", "Color Family": "Black", "Color Swatches": "", "Size": "", "Shoe Size": "5|5.5|6|7|7.5", "Pants Size": "", "Occassion": "", "Season": "", "Badges": "Featured", "Rating Avg": 4.9, "Rating Count": 4, "Inventory Count": 19, "Date Created": "2018-02-28 23:37:28" },
  // { id: 7732, "SKU": "HEH-2172", "Name": "My Cup of Tea Sweater", "Product URL": "https://www.domain.com/product/heh-2172", price: 68, "Retail Price": 68, "Thumbnail URL": "https://www.domain.com/images/heh-2172_600x600.png", "Search Keywords": "lorem, ipsum, dolor, ...", description: "Sociosqu facilisis duis ...", category: "Clothing>Tops>Sweaters", "Category ID": 277, brand: "Enigma Clothes", "Child SKU": "HEH-2172-WHT-MD|HEH-2172-WHT-LG", "Child Price": "", "Color": "White", "Color Family": "White", "Color Swatches": "", "Size": "Medium|Large", "Shoe Size": "", "Pants Size": "", "Occassion": "", "Season": "Winter", "Badges": "", "Rating Avg": 4.6, "Rating Count": 22, "Inventory Count": 3, "Date Created": "2018-03-01 20:18:20" },
  // { id: 7609, "SKU": "HEH-2211", "Name": "Walk On Out Slip On Sneakers", "Product URL": "https://www.domain.com/product/heh-2211", price: 34.99, "Retail Price": 34.99, "Thumbnail URL": "https://www.domain.com/images/heh-2211_600x600.png", "Search Keywords": "lorem, ipsum, dolor, ...", description: "Sociosqu facilisis duis ...", category: "Shoes>Sneakers>Slip-On Sneakers", "Category ID": 302, brand: "Temptation", "Child SKU": "HEH-2211-BSQ-6|HEH-2211-BSQ-7|HEH-2211-BSQ-8|HEH-2211-BSQ-9|HEH-2211-BSQ-10|HEH-2211-BSQ-10.5", "Child Price": "", "Color": "Bisque", "Color Family": "Beige", "Color Swatches": "", "Size": "", "Shoe Size": "6|7|8|9|10|10.5", "Pants Size": "", "Occassion": "", "Season": "", "Badges": "", "Rating Avg": 3.9, "Rating Count": 5, "Inventory Count": 2, "Date Created": "2018-03-20 22:15:34" },
  // { id: 7675, "SKU": "DKO-CAMEL", "Name": "Warm Hearts Sweater", "Product URL": "https://www.domain.com/product/dko-camel", price: 54.49, "Retail Price": 54.49, "Thumbnail URL": "https://www.domain.com/images/dko-camel_600x600.png", "Search Keywords": "lorem, ipsum, dolor, ...", description: "Sociosqu facilisis duis ...", category: "Clothing>Tops>Sweaters|Back In Stock|Featured Products", "Category ID": "277|511|719", brand: "Legacy Apparel", "Child SKU": "DKO-CAMEL-GRY-SM", "Child Price": "", "Color": "Grey", "Color Family": "Grey", "Color Swatches": "", "Size": "Small", "Shoe Size": "", "Pants Size": "", "Occassion": "", "Season": "Winter", "Badges": "Featured|Free Shipping", "Rating Avg": 5, "Rating Count": 2, "Inventory Count": 20, "Date Created": "2018-03-19 20:53:04" },
  // { id: 7463, "SKU": "WKS-5026", "Name": "Silver Lining Dress", "Product URL": "https://www.domain.com/product/wks-5026", price: 62, "Retail Price": 62, "Thumbnail URL": "https://www.domain.com/images/wks-5026_600x600.png", "Search Keywords": "lorem, ipsum, dolor, ...", description: "Sociosqu facilisis duis ...", category: "Dresses>Formal Dresses|All Dresses", "Category ID": "220|201", brand: "Temptation", "Child SKU": "WKS-5026-GRNP-XS|WKS-5026-GRNP-SM|WKS-5026-GRNP-MD", "Child Price": "", "Color": "Green Print", "Color Family": "Green", "Color Swatches": "", "Size": "X-Small|Small|Medium", "Shoe Size": "", "Pants Size": "", "Occassion": "Formal", "Season": "", "Badges": "", "Rating Avg": 5, "Rating Count": 9, "Inventory Count": 0, "Date Created": "2018-03-01 19:59:05" },
  // { id: 7677, "SKU": "PCH-8738", "Name": "Follow The Beat Sneakers", "Product URL": "https://www.domain.com/product/pch-8738", price: 32, "Retail Price": 32, "Thumbnail URL": "https://www.domain.com/images/pch-8738_600x600.png", "Search Keywords": "lorem, ipsum, dolor, ...", description: "Sociosqu facilisis duis ...", category: "Shoes>Sneakers>Slip-On Sneakers", "Category ID": 302, brand: "Fusion Fashion", "Child SKU": "PCH-8738-GRY-8|PCH-8738-GRY-9|PCH-8738-BLK-8|PCH-8738-BLK-9|PCH-8738-LEP-8|PCH-8738-LEP-9", "Child Price": "", "Color": "Grey|Black|Leopard", "Color Family": "Grey|Black|Multi", "Color Swatches": "[{\"color\":\"Grey\", \"family\":\"Grey\", \"swatch_hex\":\"#d3d3d3\", \"thumbnail\":\"/images/pch-8738-gry-8_600x600.png\", \"price\":32}, {\"color\":\"Black\", \"family\":\"Black\", \"swatch_hex\":\"#000000\", \"thumbnail\":\"/images/pch-8738-blk-8_600x600.png\", \"price\":32}, {\"color\":\"Leopard\", \"family\":[\"Black\",\"Multi\"], \"swatch_img\":\"/swatches/leopard.png\", \"thumbnail\":\"/images/pch-8738-lep-8_600x600.png\", \"price\":32}]", "Size": "", "Shoe Size": "8|9", "Pants Size": "", "Occassion": "", "Season": "", "Badges": "", "Rating Avg": 4.5, "Rating Count": 1, "Inventory Count": 8, "Date Created": "2019-01-31 16:24:09" },
  // { id: 8099, "SKU": "PCH-8475", "Name": "Cup of Joe Pillow", "Product URL": "https://www.domain.com/product/pch-8475", price: 36, "Retail Price": 36, "Thumbnail URL": "https://www.domain.com/images/pch-8475_600x600.png", "Search Keywords": "lorem, ipsum, dolor, ...", description: "Sociosqu facilisis duis ...", category: "Home>Home Decor>Pillows", "Category ID": 298, brand: "FabDecor", "Child SKU": "", "Child Price": "", "Color": "Seafoam Green", "Color Family": "Green", "Color Swatches": "", "Size": "", "Shoe Size": "", "Pants Size": "", "Occassion": "", "Season": "", "Badges": "", "Rating Avg": 4, "Rating Count": 1, "Inventory Count": 18, "Date Created": "2018-02-28 19:03:26" },
  // { id: 7425, "SKU": "BCO-SK101", "Name": "Burst Your Bubble Denim Jacket", "Product URL": "https://www.domain.com/product/bco-sk101", price: 84, "Retail Price": 110, "Thumbnail URL": "https://www.domain.com/images/bco-sk101_600x600.png", "Search Keywords": "lorem, ipsum, dolor, ...", description: "Sociosqu facilisis duis ...", category: "Clothing>Tops>Jackets|Clearance|Tops On Sale", "Category ID": "279|512|604", brand: "Zigzag Clothing", "Child SKU": "BCO-SK101-WSDM-LG", "Child Price": "", "Color": "Washed Denim", "Color Family": "Denim", "Color Swatches": "", "Size": "Large", "Shoe Size": "", "Pants Size": "", "Occassion": "", "Season": "", "Badges": "Clearance", "Rating Avg": 5, "Rating Count": 1, "Inventory Count": 17, "Date Created": "2018-05-04 21:32:28" },
  // { id: 8102, "SKU": "HEH-2254", "Name": "Walk It Out Heels", "Product URL": "https://www.domain.com/product/heh-2254", price: 32, "Retail Price": 32, "Thumbnail URL": "https://www.domain.com/images/heh-2254_600x600.png", "Search Keywords": "lorem, ipsum, dolor, ...", description: "Sociosqu facilisis duis ...", category: "Shoes>Heels>Pumps|New Arrivals|Featured Products", "Category ID": "311|510|719", brand: "Fusion Fashion", "Child SKU": "HEH-2254-BLK-6|HEH-2254-BLK-7|HEH-2254-BLK-8", "Child Price": "", "Color": "Black", "Color Family": "Black", "Color Swatches": "", "Size": "", "Shoe Size": "6|7|8", "Pants Size": "", "Occassion": "", "Season": "", "Badges": "Featured", "Rating Avg": 4.7, "Rating Count": 5, "Inventory Count": 10, "Date Created": "2019-01-31 16:48:23" },
  // { id: 9964, "SKU": "BCO-2208", "Name": "Word To The Wise Journal", "Product URL": "https://www.domain.com/product/bco-2208", price: 14.95, "Retail Price": 14.95, "Thumbnail URL": "https://www.domain.com/images/bco-2208_600x600.png", "Search Keywords": "lorem, ipsum, dolor, ...", description: "Sociosqu facilisis duis ...", category: "Home>Desk Decor>Journals", "Category ID": 410, brand: "Vintage Home", "Child SKU": "", "Child Price": "", "Color": "Blue", "Color Family": "Blue", "Color Swatches": "", "Size": "", "Shoe Size": "", "Pants Size": "", "Occassion": "", "Season": "", "Badges": "", "Rating Avg": 4, "Rating Count": 32, "Inventory Count": 5, "Date Created": "2018-10-18 15:19:37" },
  // { id: 10440, "SKU": "KOI-721", "Name": "Basic Beauty Off-The-Shoulder Dress", "Product URL": "https://www.domain.com/product/koi-721", price: 52, "Retail Price": 78, "Thumbnail URL": "https://www.domain.com/images/koi-721_600x600.png", "Search Keywords": "lorem, ipsum, dolor, ...", description: "Sociosqu facilisis duis ...", category: "Dresses>Off-The-Shoulder Dresses|Dresses On Sale", "Category ID": "221|603", brand: "Oasis", "Child SKU": "KOI-721-BLP-SM|KOI-721-BLP-MD", "Child Price": "", "Color": "Blue Print", "Color Family": "Blue|Multi", "Color Swatches": "", "Size": "Small|Medium", "Shoe Size": "", "Pants Size": "", "Occassion": "Graduation", "Season": "", "Badges": "Exclusive", "Rating Avg": 3.2, "Rating Count": 15, "Inventory Count": 30, "Date Created": "2018-03-03 17:38:50" },
  // { id: 6060, "SKU": "VBH-V5102", "Name": "Sunset Boulevard Pants", "Product URL": "https://www.domain.com/product/vbh-v5102", price: 44, "Retail Price": 60, "Thumbnail URL": "https://www.domain.com/images/vbh-v5102_600x600.png", "Search Keywords": "lorem, ipsum, dolor, ...", description: "Sociosqu facilisis duis ...", category: "Clothing>Bottoms>Pants|All Bottoms", "Category ID": "236|204", brand: "Monolith", "Child SKU": "VBH-V5102-WHT-24|VBH-V5102-WHT-25|VBH-V5102-WHT-26|VBH-V5102-WHT-27|VBH-V5102-BEG-24|VBH-V5102-BEG-25|VBH-V5102-BEG-26|VBH-V5102-BEG-27|VBH-V5102-BEG-30|VBH-V5102-BEG-31", "Child Price": "", "Color": "White|Beige", "Color Family": "White|Beige", "Color Swatches": "[{\"color\":\"White\", \"family\":\"White\", \"swatch_hex\":\"#ffffff\", \"thumbnail\":\"/images/vbh-v5102-wht-24_600x600.png\", \"price\":44}, {\"color\":\"Beige\", \"family\":\"Beige\", \"swatch_hex\":\"#f5f5dc\", \"thumbnail\":\"/images/vbh-v5102-bge-24_600x600.png\", \"price\":44}]", "Size": "", "Shoe Size": "", "Pants Size": "24|25|26|27|30|31", "Occassion": "", "Season": "", "Badges": "", "Rating Avg": 3.8, "Rating Count": 33, "Inventory Count": 1, "Date Created": "2018-02-28 23:57:53" },
  // { id: 10448, "SKU": "SKE-15460", "Name": "Across The Pond Boots", "Product URL": "https://www.domain.com/product/ske-15460", price: 74.49, "Retail Price": 74.49, "Thumbnail URL": "https://www.domain.com/images/ske-15460_600x600.png", "Search Keywords": "lorem, ipsum, dolor, ...", description: "Sociosqu facilisis duis ...", category: "Shoes>Boots>Flat Boots", "Category ID": 334, brand: "Legacy Collective", "Child SKU": "SKE-15460-BRN-6|SKE-15460-BRN-7|SKE-15460-BRN-8.5", "Child Price": "", "Color": "Brown", "Color Family": "Brown", "Color Swatches": "", "Size": "", "Shoe Size": "6|7|8.5", "Pants Size": "", "Occassion": "", "Season": "", "Badges": "", "Rating Avg": 5, "Rating Count": 6, "Inventory Count": 0, "Date Created": "2018-06-25 18:09:07" },
  // { id: 8137, "SKU": "PCH-8705", "Name": "Once Upon A Time Lace Dress", "Product URL": "https://www.domain.com/product/pch-8705", price: 50, "Retail Price": 108, "Thumbnail URL": "https://www.domain.com/images/pch-8705_600x600.png", "Search Keywords": "lorem, ipsum, dolor, ...", description: "Sociosqu facilisis duis ...", category: "Dresses>Lace Dresses|Dresses>All Dresses|New Arrivals", "Category ID": "222|201|510", brand: "Oasis", "Child SKU": "PCH-8705-WHT-SM|PCH-8705-WHT-MD|PCH-8705-WHT-LG|PCH-8705-BLK-SM|PCH-8705-BLK-MD|PCH-8705-BLK-LG|PCH-8705-LTBL-SM|PCH-8705-LTBL-MD|PCH-8705-LTBL-LG", "Child Price": "50|72|108", "Color": "White|Black|Light Blue", "Color Family": "White|Black|Blue", "Color Swatches": "[{\"color\":\"White\", \"family\":\"White\", \"swatch_hex\":\"#ffffff\", \"thumbnail\":\"/images/pch-8705-wht-sm_600x600.png\", \"price\":50}, {\"color\":\"Black\", \"family\":\"Black\", \"swatch_hex\":\"#000000\", \"thumbnail\":\"/images/pch-8705-blk-sm_600x600.png\", \"price\":108}, {\"color\":\"Light Blue\", \"family\":\"Blue\", \"swatch_img\":\"/swatches/light_blue.png\", \"thumbnail\":\"/images/pch-8705-ltbl-sm_600x600.png\", \"price\":72}]", "Size": "Small|Medium|Large", "Shoe Size": "", "Pants Size": "", "Occassion": "Party", "Season": "", "Badges": "", "Rating Avg": 5, "Rating Count": 4, "Inventory Count": 0, "Date Created": "2019-02-15 20:33:28" },
  // { id: 10018, "SKU": "PGF-ESS", "Name": "Lovey Dovey Maxi Dress", "Product URL": "https://www.domain.com/product/pgf-ess", price: 68, "Retail Price": 68, "Thumbnail URL": "https://www.domain.com/images/pgf-ess_600x600.png", "Search Keywords": "lorem, ipsum, dolor, ...", description: "Sociosqu facilisis duis ...", category: "Dresses>Maxi Dresses|Dresses>All Dresses|New Arrivals", "Category ID": "223|201|510", brand: "Oasis", "Child SKU": "PGF-ESS-FUOR-SM|PGF-ESS-FUOR-MD|PGF-ESS-FUOR-LG|PGF-ESS-PRPT-SM|PGF-ESS-PRPT-MD|PGF-ESS-PRPT-LG", "Child Price": "", "Color": "Fuschia Orange|Perfect Petals|Island Time", "Color Family": "Orange|Pink|Yellow|Multi", "Color Swatches": "[{\"color\":\"Fuschia Orange\", \"family\":[\"Orange\",\"Pink\"], \"swatch_img\":\"/swatches/fuschia_orange.png\", \"thumbnail\":\"/images/pgf-ess-fuor-sm_600x600.png\", \"price\":68}, {\"color\":\"Perfect Petals\", \"family\":\"Pink\", \"swatch_img\":\"/swatches/perfect_petals.png\", \"thumbnail\":\"/images/pgf-ess-prpt-sm_600x600.png\", \"price\":68}, {\"color\":\"Island Time\", \"family\":[\"Yellow\",\"Orange\",\"Multi\"], \"swatch_img\":\"/swatches/island_time.png\", \"thumbnail\":\"/images/pgf-ess-istm-sm_600x600.png\", \"price\":68}]", "Size": "Small|Medium|Large", "Shoe Size": "", "Pants Size": "", "Occassion": "Party", "Season": "", "Badges": "", "Rating Avg": 4.8, "Rating Count": 12, "Inventory Count": 24, "Date Created": "2019-02-20 21:38:02" },
  // { id: 5670, "SKU": "HEH-2223", "Name": "Shot in the Dark Pillow", "Product URL": "https://www.domain.com/product/heh-2223", price: 40, "Retail Price": 40, "Thumbnail URL": "https://www.domain.com/images/heh-2223_600x600.png", "Search Keywords": "lorem, ipsum, dolor, ...", description: "Sociosqu facilisis duis ...", category: "Home>Home Decor>Pillows", "Category ID": 298, brand: "Vintage Home", "Child SKU": "", "Child Price": "", "Color": "Coral", "Color Family": "Red", "Color Swatches": "", "Size": "", "Shoe Size": "", "Pants Size": "", "Occassion": "", "Season": "", "Badges": "Free Shipping", "Rating Avg": 4, "Rating Count": 3, "Inventory Count": 8, "Date Created": "2018-03-01 20:28:28" },
  // { id: 9020, "SKU": "PGF-RIK", "Name": "Diamonds Are Forever Pillow", "Product URL": "https://www.domain.com/product/pgf-rik", price: 36, "Retail Price": 36, "Thumbnail URL": "https://www.domain.com/images/pgf-rik_600x600.png", "Search Keywords": "lorem, ipsum, dolor, ...", description: "Sociosqu facilisis duis ...", category: "Home>Home Decor>Pillows", "Category ID": 298, brand: "Vintage Home", "Child SKU": "", "Child Price": "", "Color": "Light Blue", "Color Family": "Blue", "Color Swatches": "", "Size": "", "Shoe Size": "", "Pants Size": "", "Occassion": "", "Season": "", "Badges": "Free Shipping", "Rating Avg": 5, "Rating Count": 3, "Inventory Count": 11, "Date Created": "2018-03-16 22:17:50" },

]

export default products;


