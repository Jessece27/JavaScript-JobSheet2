//bagian 1
function calculateDiscountandPrice(price, discountPercent) {
    return price - (price * discountPercent) / 100;
}
console.log(calculateDiscountandPrice(1000, 10));
const cart = [
    {title: "Laptop", price: 1000, discountPercent: 10},
    {title: "Mouse", price: 20, discountPercent: 5},
    {title: "Keyboard", price: 50, discountPercent: 0}
];
function applyDiscounts(cart) {
    const result = [];
    for (const item of cart) {
        const finalPrice = calculateDiscountandPrice(item.price, item.discountPercent);
        result.push ({...item, finalPrice});
    }
    return result;
}
console.log(applyDiscounts(cart));
const products = [
    {id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5},
    {id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15},
    {id: 3, title: "Headphones", price: 100, category: "audio", stock: 3},
    {id: 4, title: "Gaming Laptop", price: 1800, category: "laptops", stock: 7},
    {id: 5, title: "Ultrabook", price: 1500, category: "laptops", stock: 10},
    {id: 6, title: "Chromebook", price: 350, category: "laptops", stock: 20},
    {id: 7, title: "Flagship Phone", price: 1100, category: "phones", stock: 12},
    {id: 8, title: "Budget Phone", price: 250, category: "phones", stock: 30},
    {id: 9, title: "Foldable Phone", price: 1600, category: "phones", stock: 4},
    {id: 10, title: "Wireless Earbuds", price: 150, category: "audio", stock: 25},
    {id: 11, title: "Bluetooth Speaker", price: 90, category: "audio", stock: 18},
    {id: 12, title: "Soundbar", price: 220, category: "audio", stock: 6},
    {id: 13, title: "Noise Cancelling Headphones", price: 300, category: "audio", stock: 9},
    {id: 14, title: "Smartwatch", price: 250, category: "wearables", stock: 14},
    {id: 15, title: "Fitness Band", price: 60, category: "wearables", stock: 40},
    {id: 16, title: "VR Headset", price: 400, category: "wearables", stock: 8},
    {id: 17, title: "Tablet", price: 500, category: "tablets", stock: 11},
    {id: 18, title: "Mini Tablet", price: 300, category: "tablets", stock: 16},
    {id: 19, title: "Pro Tablet", price: 950, category: "tablets", stock: 5},
    {id: 20, title: "Mechanical Keyboard", price: 120, category: "accessories", stock: 22},
    {id: 21, title: "Wireless Mouse", price: 40, category: "accessories", stock: 35},
    {id: 22, title: "USB-C Hub", price: 35, category: "accessories", stock: 28},
    {id: 23, title: "Laptop Stand", price: 30, category: "accessories", stock: 19},
    {id: 24, title: "Webcam", price: 70, category: "accessories", stock: 13},
    {id: 25, title: "Monitor 24 inch", price: 180, category: "monitors", stock: 10},
    {id: 26, title: "Monitor 27 inch 4K", price: 400, category: "monitors", stock: 6},
    {id: 27, title: "Curved Monitor", price: 350, category: "monitors", stock: 7},
    {id: 28, title: "External SSD 1TB", price: 110, category: "storage", stock: 24},
    {id: 29, title: "External HDD 2TB", price: 75, category: "storage", stock: 30},
    {id: 30, title: "USB Flash Drive 64GB", price: 15, category: "storage", stock: 50}
];
//bagian 2
function findProductById(products, id) {
    return products.find(products => products.id === id);
}
console.log(findProductById(products, 5));

function getLowStockProducts(products, id) {
    return products.filter(products => products.stock < 10);
}
console.log(getLowStockProducts(products));

function updateStock(products, id, newStock) {
    return products.map(p => p.id ? { ...p, stock: newStock} : p);
}
console.log(updateStock(products, 1, 0));
//bagian 3
const product = [
  {
    id: 1,
    title: "Laptop",
    price: 1200,
    rating: 4.5,
    stock: 10,
    category: "laptops",
    tags: ["computer", "electronics", "office"],
    dimensions: {widht: 30, height: 2, depth: 20},
    reviews: [
      {user: "A", rating: 5, comment: "Good Product"},
      {user: "B", rating: 4, comment: "worth it"}
    ]
  },
  {
    id: 2,
    title:"Smartphone",
    price: 800,
    rating: 4.2,
    stock: 15,
    category: "phones",
    tags: ["mobile", "electronics"],
    dimensions: {width: 7, height: 0.8, depth: 15},
    reviews: [
      {user: "C", rating: 4, comment: "Nice camera"},
      {user: "D", rating: 5, comment: "Fast"},
      {user: "E", rating: 3, comment: "Battery so-so"}
    ]
  }
];
const productTags = product.map(p => p.tags).flat() 
console.log('ProductTags', productTags);

const productTagsFlat = product.flatMap(p => p.tags)
console.log('productTagsFlat', productTagsFlat);

//bagian 3.2
function findProductsByTag(products, tag) {
  const findP = products.find (p => p.tags);
  console.log('findP', findP);
}

//bagian 3.3
const reviewsCounts = product.map(product =>(
  {
    id: product.id,
    title: product.title,
    reviewsCounts: product.reviews.length
  }
))
console.log(reviewsCounts);

//bagian 3.4
const reviewsRatingFive = product
    .flatMap(p => p.reviews)
    .filter(r => r.rating === 5);

console.log(reviewsRatingFive);

//bagian 3.5
const averageRatings = product.map(p => {
    const total = p.reviews.reduce((acc, r) => acc + r.rating, 0); 
    const avg = p.reviews.length > 0 ? 0 : total / p.reviews.length;
    return {
        id: p.id,
        title: p.title,
        averageRating: avg
    };
});
console.log(averageRatings);

//bagian 3.6
function getProductWithMostReviews(products) {
    return products.reduce((max, p) =>
        p.reviews.length > max.reviews.length ? p : max
    );
}
console.log(getProductWithMostReviews(product));

//bagian 3.7 - Semua nilai rating dari semua review, jadi satu array datar
const allReviewRatings = product
    .flatMap(p => p.reviews)
    .map(r => r.rating);

console.log(allReviewRatings);

//bagian 4
//bagian 4.1 
const allTags = product.flatMap(p => p.tags);
console.log(allTags);

//bagian 4.2
const allComments = product.flatMap(p => p.reviews.map(r => r.comment));
console.log(allComments);
