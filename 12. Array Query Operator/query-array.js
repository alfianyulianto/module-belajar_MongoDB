/**
 * * DATA PRODUCTS
 [
  { _id: 1, name: 'Indomie ayam bawang', price: Long("2000") },
  { _id: 2, name: 'Mie sedap', price: Long("2000") },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food'
  },
  {
    _id: 4,
    name: 'Samsung Galaxy 59+',
    price: Long("10000000"),
    category: 'handphone'
  },
  {
    _id: 5,
    name: 'Acer Precator XXI',
    price: Long("25000000"),
    category: 'laptop'
  }
]
k
 */
// ?  insert some products  with tags
db.products.insertMany([
  {
    _id: 6,
    name: "Logitech M235 Wireless Mouse",
    price: new NumberLong("175000"),
    category: "laptop",
    tags: ["logitech", "mouse", "accessories"],
  },
  {
    _id: 7,
    name: "Havit Cooler Pad Gaming 5Fan Blue led F2082",
    price: new NumberLong("200000"),
    category: "laptop",
    tags: ["cooler", "laptop", "accessories", "fan"],
  },
  {
    _id: 8,
    name: "Samsung LC24F390FHEXXD Curved Monitor ",
    price: new NumberLong("1750000"),
    category: "computer",
    tags: ["samsung", "monitor", "computer"],
  },
]);

// ? select * from products where (tags = "samsung" and tags = "monitor")
db.products.find({
  tags: {
    $all: ["samsung", "monitor"],
  },
});
/**
 * TODO Output:
 [
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'monitor', 'computer' ]
  }
]

 */

// ? select * from products where tags in ("samsung",  "logitect")
// dengan query operator '$in' artinya sama seperti logical operator OR
db.products.find({
  tags: {
    $elemMatch: {
      $in: ["samsung", "logitech"],
    },
  },
});
/**
 * TODO Output
 [
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [ 'logitech', 'mouse', 'accessories' ]
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'monitor', 'computer' ]
  }
]

 */

// ? select * from products where size(tags) = 3
db.products.find({
  tags: {
    $size: 3,
  },
});
/**
 * TODO Outuput:
 [
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [ 'logitech', 'mouse', 'accessories' ]
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'monitor', 'computer' ]
  }
]
 */
