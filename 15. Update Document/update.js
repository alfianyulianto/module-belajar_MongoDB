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
// ? update products set category = "food" where _id = 1
db.products.updateOne(
  {
    _id: 1,
  },
  {
    $set: {
      category: "food",
    },
  }
);
/**
 * TODO Output setelah di update:
  {
    _id: 1,
    name: 'Indomie ayam bawang',
    price: Long("2000"),
    category: 'food'
  },
 */

/**
 * * DATA PRODUCTS
 [
  {
    _id: 1,
    name: 'Indomie ayam bawang',
    price: Long("2000"),
    category: 'food'
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
// ? update products set category = "food" where _id = 2
db.products.updateOne(
  {
    _id: 2,
  },
  {
    $set: {
      category: "food",
    },
  }
);
/**
 * TODO Uotput setelah diupdate:
  { _id: 2, name: 'Mie sedap', price: Long("2000"), category: 'food' },
 */

/**
 * * DATA PRODUCTS
 [
  {
    _id: 1,
    name: 'Indomie ayam bawang',
    price: Long("2000"),
    category: 'food'
  },
  { _id: 2, name: 'Mie sedap', price: Long("2000"), category: 'food' },
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
// ? update products set tags = ["food"] where category = "food" and tags is null
// mengupdata data yang 'field categorynya sama dengan food dan field tagsnya is null' menjadi 'field tagsnya food'
db.products.updateMany(
  {
    $and: [
      {
        category: {
          $eq: "food",
        },
      },
      {
        tags: {
          $exists: false,
        },
      },
    ],
  },
  {
    $set: {
      tags: ["food"],
    },
  }
);
/**
 * TODO Output setelah di update:
  {
    _id: 1,
    name: 'Indomie ayam bawang',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ]
  },
  {
    _id: 2,
    name: 'Mie sedap',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ]
  },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food',
    tags: [ 'food' ]
  },
 */

/**
 * * DATA PRODUCTS
 [
  {
    _id: 1,
    name: 'Indomie ayam bawang',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ]
  },
  {
    _id: 2,
    name: 'Mie sedap',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ]
  },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food',
    tags: [ 'food' ]
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
// ? update products set wrong = "wrong"
db.products.updateMany({}, [
  {
    $set: {
      wrong: "wrong",
    },
  },
]);
/**
 * TODO Output setelah di update:
 [
 {
    _id: 1,
    name: 'Indomie ayam bawang',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ],
    wrong: 'wrong'
  },
  {
    _id: 2,
    name: 'Mie sedap',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ],
    wrong: 'wrong'
  },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food',
    tags: [ 'food' ],
    wrong: 'wrong'
  },
  {
    _id: 4,
    name: 'Samsung Galaxy 59+',
    price: Long("10000000"),
    category: 'handphone',
    wrong: 'wrong'
  },
  {
    _id: 5,
    name: 'Acer Precator XXI',
    price: Long("25000000"),
    category: 'laptop',
    wrong: 'wrong'
  },
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [ 'logitech', 'mouse', 'accessories' ],
    wrong: 'wrong'
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [ 'cooler', 'laptop', 'accessories', 'fan' ],
    wrong: 'wrong'
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'monitor', 'computer' ],
    wrong: 'wrong'
  }
 ]
 */

/**
 * * DATA PRODUCTS
 [
  {
    _id: 1,
    name: 'Indomie ayam bawang',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ],
    wrong: 'wrong'
  },
  {
    _id: 2,
    name: 'Mie sedap',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ],
    wrong: 'wrong'
  },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food',
    tags: [ 'food' ],
    wrong: 'wrong'
  },
  {
    _id: 4,
    name: 'Samsung Galaxy 59+',
    price: Long("10000000"),
    category: 'handphone',
    wrong: 'wrong'
  },
  {
    _id: 5,
    name: 'Acer Precator XXI',
    price: Long("25000000"),
    category: 'laptop',
    wrong: 'wrong'
  },
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [ 'logitech', 'mouse', 'accessories' ],
    wrong: 'wrong'
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [ 'cooler', 'laptop', 'accessories', 'fan' ],
    wrong: 'wrong'
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'monitor', 'computer' ],
    wrong: 'wrong'
  }
 ]
 */
// ? update products set wrong = null
// ini akan mebuat 'field wrong' bernilai null
db.products.updateMany({}, [
  {
    $set: {
      wrong: null,
    },
  },
]);
/**
 * TODO Output selteah di update:
 [
  {
    _id: 1,
    name: 'Indomie ayam bawang',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ],
    wrong: null
  },
  {
    _id: 2,
    name: 'Mie sedap',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ],
    wrong: null
  },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food',
    tags: [ 'food' ],
    wrong: null
  },
  {
    _id: 4,
    name: 'Samsung Galaxy 59+',
    price: Long("10000000"),
    category: 'handphone',
    wrong: null
  },
  {
    _id: 5,
    name: 'Acer Precator XXI',
    price: Long("25000000"),
    category: 'laptop',
    wrong: null
  },
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [ 'logitech', 'mouse', 'accessories' ],
    wrong: null
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [ 'cooler', 'laptop', 'accessories', 'fan' ],
    wrong: null
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'monitor', 'computer' ],
    wrong: null
  }
]
 */

/**
 * * DATA PRODUCTS
 [
  {
    _id: 1,
    name: 'Indomie ayam bawang',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ],
    wrong: null
  },
  {
    _id: 2,
    name: 'Mie sedap',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ],
    wrong: null
  },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food',
    tags: [ 'food' ],
    wrong: null
  },
  {
    _id: 4,
    name: 'Samsung Galaxy 59+',
    price: Long("10000000"),
    category: 'handphone',
    wrong: null
  },
  {
    _id: 5,
    name: 'Acer Precator XXI',
    price: Long("25000000"),
    category: 'laptop',
    wrong: null
  },
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [ 'logitech', 'mouse', 'accessories' ],
    wrong: null
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [ 'cooler', 'laptop', 'accessories', 'fan' ],
    wrong: null
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'monitor', 'computer' ],
    wrong: null
  }
]
 */
//! $uset : digunakan untuk menghilangkan sebuah field
db.products.updateMany({}, [
  {
    $unset: ["wrong"],
  },
]);

// ? insert wrong document
db.products.insertMany([
  {
    _id: 9,
    name: "Ups Salah",
    wrong: "Salah Lagi",
  },
]);
/**
 * TODO Ouput:
 [
  {
    _id: 1,
    name: 'Indomie ayam bawang',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ]
  },
  {
    _id: 2,
    name: 'Mie sedap',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ]
  },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food',
    tags: [ 'food' ]
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
  },
  { _id: 9, name: 'Ups Salah', wrong: 'Salah Lagi' }
]
 */

/**
 * * DATA PRODUCTS
 [
  {
    _id: 1,
    name: 'Indomie ayam bawang',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ]
  },
  {
    _id: 2,
    name: 'Mie sedap',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ]
  },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food',
    tags: [ 'food' ]
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
  },
  { _id: 9, name: 'Ups Salah', wrong: 'Salah Lagi' }
]
 */
// replace document with id 9
// replaceOne() : menreplace semua nya dari _id = 9
// walaupun _id = 9  ada "field wrong" maka tetap akan hilang atau kereplace
db.products.replaceOne(
  {
    _id: 9,
  },
  {
    name: "Adidas Pulseboost HD Running Shoes Sepatu lari Pria",
    price: new NumberLong(1100000),
    category: "shoes",
    tags: ["adidas", "shoes", "running"],
  }
);
/**
 * TODO Output setelah di update:
 [  
  {
    _id: 1,
    name: 'Indomie ayam bawang',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ]
  },
  {
    _id: 2,
    name: 'Mie sedap',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ]
  },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food',
    tags: [ 'food' ]
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
  },
  {
    _id: 9,
    name: 'Adidas Pulseboost HD Running Shoes Sepatu lari Pria',
    price: Long("1100000"),
    category: 'shoes',
    tags: [ 'adidas', 'shoes', 'running' ]
  }
]
 */
