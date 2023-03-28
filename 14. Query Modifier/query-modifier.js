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
  },
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [ 'logitech', 'mouse', 'accessories' ]
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [ 'cooler', 'laptop', 'accessories', 'fan' ]
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
// select count(*) from products
db.products.find({}).count();
/**
 * TODO Output: 8
 */

// select * from products limit 4
db.products.find({}).limit(4);
/**
 * TODO Output:
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
  }
]
 */

// select * from products offset 2
// bisa digunakan untuk paging
db.products.find({}).skip(2);
/**
 * TODO Output:
 [
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
  },
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [ 'logitech', 'mouse', 'accessories' ]
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [ 'cooler', 'laptop', 'accessories', 'fan' ]
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

// select * from products limit 4 offset 2
// limit() dan skip() bisa digunakan untuk 'pagging'
// menampilkan cuma 4 data dan sebelumnya melakukan skip untuk 2 data
db.products.find({}).limit(4).skip(2);
/**
 * TODO Output:
 [
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
  },
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [ 'logitech', 'mouse', 'accessories' ]
  }
]
 */

// select * from products order by name asc, category desc
// 1 : untuk ASC
// -1 : untuk DESC
// mengurutkan dulu berdasarkan nama secara ASC baru jika ketemu nama yang sama maka mengurutkan berdasarkan category secara DESC
db.products.find({}).sort({
  name: 1,
  category: 1,
});
/**
 * TODO Ouput:
 [
  {
    _id: 5,
    name: 'Acer Precator XXI',
    price: Long("25000000"),
    category: 'laptop'
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [ 'cooler', 'laptop', 'accessories', 'fan' ]
  },
  { _id: 1, name: 'Indomie ayam bawang', price: Long("2000") },
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [ 'logitech', 'mouse', 'accessories' ]
  },
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
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'monitor', 'computer' ]
  }
]
 */
