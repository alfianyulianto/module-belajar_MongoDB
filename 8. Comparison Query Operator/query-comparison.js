/**
 * * DATA CUSTOMERS
 [ { _id: 'alfian', name: 'Alfian Yulianto' } ]
 */
// ? select * from customers where _id = "alfian"
db.customers.find({
  _id: {
    $eq:"alfian"
  }
})


/**
 * * DATA PRODUCTS
 [
  { _id: 1, name: 'Indomie ayam bawang', price: Long("2000") },
  { _id: 2, name: 'Mie sedap', price: Long("2000") },
]
 */
// ? select * from products where price > 1000
db.products.find({
  price: {
    $gt:1000
  }
})

/**
 * * DATA PRODUCTS
 [
  { _id: 1, name: 'Indomie ayam bawang', price: Long("2000") },
  { _id: 2, name: 'Mie sedap', price: Long("2000") },
]
 */
// ? select * from products where name = "Indomie ayam bawang" and price > 1000
db.products.find({
  name: {
    $eq: "Indomie ayam bawang"
  },
  price: {
    $gt: 1000
  }
})


/**
 * * DATA PRODUCTS
 [
  { _id: 1, name: 'Indomie ayam bawang', price: Long("2000") },
  { _id: 2, name: 'Mie sedap', price: Long("2000") },
]
 */
// ? insert product document
// ketika ada sebuah collection yang mana ada 'field atau column' baru maka kita tidak perlu melakukan 'outer table atau menambahkan column baru' 
db.products.insertMany([
  {
    _id: 3,
    name: "Pop Mie Rasa Bakso",
    price: new NumberLong("2500"),
    category: "food"
  },
  {
    _id: 4,
    name: "Samsung Galaxy 59+",
    price: new NumberLong("10000000"),
    category: "handphone"
  },
  {
    _id: 5,
    name: "Acer Precator XXI",
    price: new NumberLong("25000000"),
    category: "laptop"
  },
])
/**
Output: 
/**
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
 */


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
 */
// ? select * from products category in ('handphone', 'laptop') and price > 5000000
db.products.find({
  category: {
    $in: ['handphone', 'laptop'],
  },
  price: {
    $gt: 5000000
  }
})
/** 
* TODO Output: 
[
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

*/