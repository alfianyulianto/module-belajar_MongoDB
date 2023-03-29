/**
 * * DATA PRODUCTS
 [
  {
    _id: 1,
    name: 'Indomie ayam bawang',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z")
  },
  {
    _id: 2,
    name: 'Mie sedap',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z")
  },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z")
  },
  {
    _id: 4,
    name: 'Samsung Galaxy 59+',
    price: Long("10000000"),
    category: 'handphone',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z")
  },
  {
    _id: 5,
    name: 'Acer Precator XXI',
    price: Long("25000000"),
    category: 'laptop',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z")
  },
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [ 'logitech', 'mouse', 'accessories' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z")
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [ 'cooler', 'laptop', 'accessories', 'fan' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z")
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'monitor', 'computer' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z")
  },
  {
    _id: 9,
    name: 'Adidas Pulseboost HD Running Shoes Sepatu lari Pria',
    price: Long("1100000"),
    category: 'shoes',
    tags: [ 'adidas', 'shoes', 'running' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z")
  }
]
 */
// ? update products set ratings = [90, 80, 70]
db.products.updateMany(
  {},
  {
    $set: {
      ratings: [90, 80, 70],
    },
  }
);
/**
 * TODO Uoutput setelah di update:
 [
  {
    _id: 1,
    name: 'Indomie ayam bawang',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 2,
    name: 'Mie sedap',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 4,
    name: 'Samsung Galaxy 59+',
    price: Long("10000000"),
    category: 'handphone',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 5,
    name: 'Acer Precator XXI',
    price: Long("25000000"),
    category: 'laptop',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [ 'logitech', 'mouse', 'accessories' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [ 'cooler', 'laptop', 'accessories', 'fan' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'monitor', 'computer' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 9,
    name: 'Adidas Pulseboost HD Running Shoes Sepatu lari Pria',
    price: Long("1100000"),
    category: 'shoes',
    tags: [ 'adidas', 'shoes', 'running' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 90, 80, 70 ]
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
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 2,
    name: 'Mie sedap',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 4,
    name: 'Samsung Galaxy 59+',
    price: Long("10000000"),
    category: 'handphone',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 5,
    name: 'Acer Precator XXI',
    price: Long("25000000"),
    category: 'laptop',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [ 'logitech', 'mouse', 'accessories' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [ 'cooler', 'laptop', 'accessories', 'fan' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'monitor', 'computer' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 9,
    name: 'Adidas Pulseboost HD Running Shoes Sepatu lari Pria',
    price: Long("1100000"),
    category: 'shoes',
    tags: [ 'adidas', 'shoes', 'running' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 90, 80, 70 ]
  }
]
 */
// ? update first element of array, query must include array fields
db.products.updateMany(
  {
    ratings: 90,
  },
  {
    $set: {
      "ratings.$": 100,
    },
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
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 100, 80, 70 ]
  },
  {
    _id: 2,
    name: 'Mie sedap',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 100, 80, 70 ]
  },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 100, 80, 70 ]
  },
  {
    _id: 4,
    name: 'Samsung Galaxy 59+',
    price: Long("10000000"),
    category: 'handphone',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 80, 70 ]
  },
  {
    _id: 5,
    name: 'Acer Precator XXI',
    price: Long("25000000"),
    category: 'laptop',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 80, 70 ]
  },
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [ 'logitech', 'mouse', 'accessories' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 80, 70 ]
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [ 'cooler', 'laptop', 'accessories', 'fan' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 80, 70 ]
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'monitor', 'computer' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 80, 70 ]
  },
  {
    _id: 9,
    name: 'Adidas Pulseboost HD Running Shoes Sepatu lari Pria',
    price: Long("1100000"),
    category: 'shoes',
    tags: [ 'adidas', 'shoes', 'running' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 80, 70 ]
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
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 100, 80, 70 ]
  },
  {
    _id: 2,
    name: 'Mie sedap',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 100, 80, 70 ]
  },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 100, 80, 70 ]
  },
  {
    _id: 4,
    name: 'Samsung Galaxy 59+',
    price: Long("10000000"),
    category: 'handphone',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 80, 70 ]
  },
  {
    _id: 5,
    name: 'Acer Precator XXI',
    price: Long("25000000"),
    category: 'laptop',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 80, 70 ]
  },
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [ 'logitech', 'mouse', 'accessories' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 80, 70 ]
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [ 'cooler', 'laptop', 'accessories', 'fan' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 80, 70 ]
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'monitor', 'computer' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 80, 70 ]
  },
  {
    _id: 9,
    name: 'Adidas Pulseboost HD Running Shoes Sepatu lari Pria',
    price: Long("1100000"),
    category: 'shoes',
    tags: [ 'adidas', 'shoes', 'running' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 80, 70 ]
  }
]
 */
// ? update all element of array
// merubah seluruh element pada array menjadi 100
db.products.updateMany(
  {},
  {
    $set: {
      "ratings.$[]": 100,
    },
  }
);
/**
 * TODO Outpur setelah di update:
 [
  {
    _id: 1,
    name: 'Indomie ayam bawang',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 100, 100, 100 ]
  },
  {
    _id: 2,
    name: 'Mie sedap',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 100, 100, 100 ]
  },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 100, 100, 100 ]
  },
  {
    _id: 4,
    name: 'Samsung Galaxy 59+',
    price: Long("10000000"),
    category: 'handphone',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 100, 100 ]
  },
  {
    _id: 5,
    name: 'Acer Precator XXI',
    price: Long("25000000"),
    category: 'laptop',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 100, 100 ]
  },
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [ 'logitech', 'mouse', 'accessories' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 100, 100 ]
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [ 'cooler', 'laptop', 'accessories', 'fan' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 100, 100 ]
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'monitor', 'computer' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 100, 100 ]
  },
  {
    _id: 9,
    name: 'Adidas Pulseboost HD Running Shoes Sepatu lari Pria',
    price: Long("1100000"),
    category: 'shoes',
    tags: [ 'adidas', 'shoes', 'running' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 100, 100 ]
  }
]
 */

/**
 * *D ATA PRODUCTS
 [
  {
    _id: 1,
    name: 'Indomie ayam bawang',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 100, 100, 100 ]
  },
  {
    _id: 2,
    name: 'Mie sedap',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 100, 100, 100 ]
  },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 100, 100, 100 ]
  },
  {
    _id: 4,
    name: 'Samsung Galaxy 59+',
    price: Long("10000000"),
    category: 'handphone',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 100, 100 ]
  },
  {
    _id: 5,
    name: 'Acer Precator XXI',
    price: Long("25000000"),
    category: 'laptop',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 100, 100 ]
  },
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [ 'logitech', 'mouse', 'accessories' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 100, 100 ]
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [ 'cooler', 'laptop', 'accessories', 'fan' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 100, 100 ]
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'monitor', 'computer' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 100, 100 ]
  },
  {
    _id: 9,
    name: 'Adidas Pulseboost HD Running Shoes Sepatu lari Pria',
    price: Long("1100000"),
    category: 'shoes',
    tags: [ 'adidas', 'shoes', 'running' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 100, 100 ]
  }
]
 */
// ? update products set ratings = [90, 80, 70]
db.products.updateMany(
  {},
  {
    $set: {
      ratings: [90, 80, 70],
    },
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
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 2,
    name: 'Mie sedap',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 4,
    name: 'Samsung Galaxy 59+',
    price: Long("10000000"),
    category: 'handphone',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 5,
    name: 'Acer Precator XXI',
    price: Long("25000000"),
    category: 'laptop',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [ 'logitech', 'mouse', 'accessories' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [ 'cooler', 'laptop', 'accessories', 'fan' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'monitor', 'computer' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 9,
    name: 'Adidas Pulseboost HD Running Shoes Sepatu lari Pria',
    price: Long("1100000"),
    category: 'shoes',
    tags: [ 'adidas', 'shoes', 'running' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 90, 80, 70 ]
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
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 2,
    name: 'Mie sedap',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 4,
    name: 'Samsung Galaxy 59+',
    price: Long("10000000"),
    category: 'handphone',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 5,
    name: 'Acer Precator XXI',
    price: Long("25000000"),
    category: 'laptop',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [ 'logitech', 'mouse', 'accessories' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [ 'cooler', 'laptop', 'accessories', 'fan' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'monitor', 'computer' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 9,
    name: 'Adidas Pulseboost HD Running Shoes Sepatu lari Pria',
    price: Long("1100000"),
    category: 'shoes',
    tags: [ 'adidas', 'shoes', 'running' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 90, 80, 70 ]
  }
]
 */
// update element of array based on arrayFilters
// merubah data element pada array menjadi 100 jika tiap-tiap element di array nilainya lebih dari sama dengan 80
db.products.updateMany(
  {},
  {
    $set: {
      "ratings.$[element]": 100,
    },
  },
  {
    arrayFilters: [
      {
        element: {
          $gte: 80,
        },
      },
    ],
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
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 100, 100, 70 ]
  },
  {
    _id: 2,
    name: 'Mie sedap',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 100, 100, 70 ]
  },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 100, 100, 70 ]
  },
  {
    _id: 4,
    name: 'Samsung Galaxy 59+',
    price: Long("10000000"),
    category: 'handphone',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 100, 70 ]
  },
  {
    _id: 5,
    name: 'Acer Precator XXI',
    price: Long("25000000"),
    category: 'laptop',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 100, 70 ]
  },
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [ 'logitech', 'mouse', 'accessories' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 100, 70 ]
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [ 'cooler', 'laptop', 'accessories', 'fan' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 100, 70 ]
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'monitor', 'computer' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 100, 70 ]
  },
  {
    _id: 9,
    name: 'Adidas Pulseboost HD Running Shoes Sepatu lari Pria',
    price: Long("1100000"),
    category: 'shoes',
    tags: [ 'adidas', 'shoes', 'running' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 100, 70 ]
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
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 100, 100, 70 ]
  },
  {
    _id: 2,
    name: 'Mie sedap',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 100, 100, 70 ]
  },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 100, 100, 70 ]
  },
  {
    _id: 4,
    name: 'Samsung Galaxy 59+',
    price: Long("10000000"),
    category: 'handphone',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 100, 70 ]
  },
  {
    _id: 5,
    name: 'Acer Precator XXI',
    price: Long("25000000"),
    category: 'laptop',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 100, 70 ]
  },
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [ 'logitech', 'mouse', 'accessories' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 100, 70 ]
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [ 'cooler', 'laptop', 'accessories', 'fan' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 100, 70 ]
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'monitor', 'computer' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 100, 70 ]
  },
  {
    _id: 9,
    name: 'Adidas Pulseboost HD Running Shoes Sepatu lari Pria',
    price: Long("1100000"),
    category: 'shoes',
    tags: [ 'adidas', 'shoes', 'running' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 100, 70 ]
  }
]
 */
// update element of array with given index
// merubah field setting denga index ke 0 menjadi 50 dan index ke 1 menjadi 60
db.products.updateMany(
  {},
  {
    $set: {
      "ratings.0": 50,
      "ratings.1": 60,
    },
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
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 50, 60, 70 ]
  },
  {
    _id: 2,
    name: 'Mie sedap',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 50, 60, 70 ]
  },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 50, 60, 70 ]
  },
  {
    _id: 4,
    name: 'Samsung Galaxy 59+',
    price: Long("10000000"),
    category: 'handphone',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 50, 60, 70 ]
  },
  {
    _id: 5,
    name: 'Acer Precator XXI',
    price: Long("25000000"),
    category: 'laptop',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 50, 60, 70 ]
  },
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [ 'logitech', 'mouse', 'accessories' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 50, 60, 70 ]
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [ 'cooler', 'laptop', 'accessories', 'fan' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 50, 60, 70 ]
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'monitor', 'computer' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 50, 60, 70 ]
  },
  {
    _id: 9,
    name: 'Adidas Pulseboost HD Running Shoes Sepatu lari Pria',
    price: Long("1100000"),
    category: 'shoes',
    tags: [ 'adidas', 'shoes', 'running' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 50, 60, 70 ]
  }
]
 */

/**
 * * DATA PRODUCTS
 /**
 * TODO Output setelah di update:
 [
  {
    _id: 1,
    name: 'Indomie ayam bawang',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 50, 60, 70 ]
  },
  {
    _id: 2,
    name: 'Mie sedap',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 50, 60, 70 ]
  },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 50, 60, 70 ]
  },
  {
    _id: 4,
    name: 'Samsung Galaxy 59+',
    price: Long("10000000"),
    category: 'handphone',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 50, 60, 70 ]
  },
  {
    _id: 5,
    name: 'Acer Precator XXI',
    price: Long("25000000"),
    category: 'laptop',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 50, 60, 70 ]
  },
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [ 'logitech', 'mouse', 'accessories' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 50, 60, 70 ]
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [ 'cooler', 'laptop', 'accessories', 'fan' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 50, 60, 70 ]
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'monitor', 'computer' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 50, 60, 70 ]
  },
  {
    _id: 9,
    name: 'Adidas Pulseboost HD Running Shoes Sepatu lari Pria',
    price: Long("1100000"),
    category: 'shoes',
    tags: [ 'adidas', 'shoes', 'running' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 50, 60, 70 ]
  }
]
 */
// add "popular" to array if not exists
// menugbah field tags di _id 1 ditambahkan dengan kata 'popullar'
db.products.updateOne(
  {
    _id: 1,
  },
  {
    $addToSet: {
      tags: "popular",
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
    tags: [ 'food', 'popular' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 50, 60, 70 ]
 */

/**
 * * DATA PRODUCTS
 [
  {
    _id: 1,
    name: 'Indomie ayam bawang',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food', 'popular' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 50, 60, 70 ]
  },
  {
    _id: 2,
    name: 'Mie sedap',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 50, 60, 70 ]
  },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 50, 60, 70 ]
  },
  {
    _id: 4,
    name: 'Samsung Galaxy 59+',
    price: Long("10000000"),
    category: 'handphone',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 50, 60, 70 ]
  },
  {
    _id: 5,
    name: 'Acer Precator XXI',
    price: Long("25000000"),
    category: 'laptop',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 50, 60, 70 ]
  },
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [ 'logitech', 'mouse', 'accessories' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 50, 60, 70 ]
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [ 'cooler', 'laptop', 'accessories', 'fan' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 50, 60, 70 ]
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'monitor', 'computer' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 50, 60, 70 ]
  },
  {
    _id: 9,
    name: 'Adidas Pulseboost HD Running Shoes Sepatu lari Pria',
    price: Long("1100000"),
    category: 'shoes',
    tags: [ 'adidas', 'shoes', 'running' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 50, 60, 70 ]
  }
]
 */
// remove first element of array
// menghapus element pertama dari filed ratings
db.products.updateMany(
  {},
  {
    $pop: {
      ratings: -1,
    },
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
    tags: [ 'food', 'popular' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 60, 70 ]
  },
  {
    _id: 2,
    name: 'Mie sedap',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 60, 70 ]
  },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 60, 70 ]
  },
  {
    _id: 4,
    name: 'Samsung Galaxy 59+',
    price: Long("10000000"),
    category: 'handphone',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 60, 70 ]
  },
  {
    _id: 5,
    name: 'Acer Precator XXI',
    price: Long("25000000"),
    category: 'laptop',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 60, 70 ]
  },
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [ 'logitech', 'mouse', 'accessories' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 60, 70 ]
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [ 'cooler', 'laptop', 'accessories', 'fan' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 60, 70 ]
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'monitor', 'computer' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 60, 70 ]
  },
  {
    _id: 9,
    name: 'Adidas Pulseboost HD Running Shoes Sepatu lari Pria',
    price: Long("1100000"),
    category: 'shoes',
    tags: [ 'adidas', 'shoes', 'running' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 60, 70 ]
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
    tags: [ 'food', 'popular' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 60, 70 ]
  },
  {
    _id: 2,
    name: 'Mie sedap',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 60, 70 ]
  },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 60, 70 ]
  },
  {
    _id: 4,
    name: 'Samsung Galaxy 59+',
    price: Long("10000000"),
    category: 'handphone',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 60, 70 ]
  },
  {
    _id: 5,
    name: 'Acer Precator XXI',
    price: Long("25000000"),
    category: 'laptop',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 60, 70 ]
  },
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [ 'logitech', 'mouse', 'accessories' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 60, 70 ]
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [ 'cooler', 'laptop', 'accessories', 'fan' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 60, 70 ]
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'monitor', 'computer' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 60, 70 ]
  },
  {
    _id: 9,
    name: 'Adidas Pulseboost HD Running Shoes Sepatu lari Pria',
    price: Long("1100000"),
    category: 'shoes',
    tags: [ 'adidas', 'shoes', 'running' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 60, 70 ]
  }
]
 */
// update products set rating = [90, 80, 70]
db.products.updateMany(
  {},
  {
    $set: {
      ratings: [90, 80, 70],
    },
  }
);
/**
 * TODO Output setelah di update
 [
  {
    _id: 1,
    name: 'Indomie ayam bawang',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food', 'popular' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 2,
    name: 'Mie sedap',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 4,
    name: 'Samsung Galaxy 59+',
    price: Long("10000000"),
    category: 'handphone',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 5,
    name: 'Acer Precator XXI',
    price: Long("25000000"),
    category: 'laptop',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [ 'logitech', 'mouse', 'accessories' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [ 'cooler', 'laptop', 'accessories', 'fan' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'monitor', 'computer' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 9,
    name: 'Adidas Pulseboost HD Running Shoes Sepatu lari Pria',
    price: Long("1100000"),
    category: 'shoes',
    tags: [ 'adidas', 'shoes', 'running' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 90, 80, 70 ]
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
    tags: [ 'food', 'popular' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 2,
    name: 'Mie sedap',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 4,
    name: 'Samsung Galaxy 59+',
    price: Long("10000000"),
    category: 'handphone',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 5,
    name: 'Acer Precator XXI',
    price: Long("25000000"),
    category: 'laptop',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [ 'logitech', 'mouse', 'accessories' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [ 'cooler', 'laptop', 'accessories', 'fan' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'monitor', 'computer' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 90, 80, 70 ]
  },
  {
    _id: 9,
    name: 'Adidas Pulseboost HD Running Shoes Sepatu lari Pria',
    price: Long("1100000"),
    category: 'shoes',
    tags: [ 'adidas', 'shoes', 'running' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 90, 80, 70 ]
  }
]
 */
// remove all element where ratings >= 80
// menghapus element pada field ratings yang elementnya lebih dari sama dengan 80
db.products.updateMany(
  {},
  {
    $pull: {
      ratings: {
        $gte: 80,
      },
    },
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
    tags: [ 'food', 'popular' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 70 ]
  },
  {
    _id: 2,
    name: 'Mie sedap',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 70 ]
  },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 70 ]
  },
  {
    _id: 4,
    name: 'Samsung Galaxy 59+',
    price: Long("10000000"),
    category: 'handphone',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70 ]
  },
  {
    _id: 5,
    name: 'Acer Precator XXI',
    price: Long("25000000"),
    category: 'laptop',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70 ]
  },
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [ 'logitech', 'mouse', 'accessories' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70 ]
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [ 'cooler', 'laptop', 'accessories', 'fan' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70 ]
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'monitor', 'computer' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70 ]
  },
  {
    _id: 9,
    name: 'Adidas Pulseboost HD Running Shoes Sepatu lari Pria',
    price: Long("1100000"),
    category: 'shoes',
    tags: [ 'adidas', 'shoes', 'running' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70 ]
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
    tags: [ 'food', 'popular' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 70 ]
  },
  {
    _id: 2,
    name: 'Mie sedap',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 70 ]
  },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 70 ]
  },
  {
    _id: 4,
    name: 'Samsung Galaxy 59+',
    price: Long("10000000"),
    category: 'handphone',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70 ]
  },
  {
    _id: 5,
    name: 'Acer Precator XXI',
    price: Long("25000000"),
    category: 'laptop',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70 ]
  },
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [ 'logitech', 'mouse', 'accessories' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70 ]
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [ 'cooler', 'laptop', 'accessories', 'fan' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70 ]
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'monitor', 'computer' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70 ]
  },
  {
    _id: 9,
    name: 'Adidas Pulseboost HD Running Shoes Sepatu lari Pria',
    price: Long("1100000"),
    category: 'shoes',
    tags: [ 'adidas', 'shoes', 'running' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70 ]
  }
]
 */
// add 100 to ratings
// menambah element ke filed ratings dengan nilai 100
db.products.updateMany(
  {},
  {
    $push: {
      ratings: 100,
    },
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
    tags: [ 'food', 'popular' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 70, 100 ]
  },
  {
    _id: 2,
    name: 'Mie sedap',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 70, 100 ]
  },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 70, 100 ]
  },
  {
    _id: 4,
    name: 'Samsung Galaxy 59+',
    price: Long("10000000"),
    category: 'handphone',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100 ]
  },
  {
    _id: 5,
    name: 'Acer Precator XXI',
    price: Long("25000000"),
    category: 'laptop',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100 ]
  },
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [ 'logitech', 'mouse', 'accessories' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100 ]
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [ 'cooler', 'laptop', 'accessories', 'fan' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100 ]
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'monitor', 'computer' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100 ]
  },
  {
    _id: 9,
    name: 'Adidas Pulseboost HD Running Shoes Sepatu lari Pria',
    price: Long("1100000"),
    category: 'shoes',
    tags: [ 'adidas', 'shoes', 'running' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100 ]
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
    tags: [ 'food', 'popular' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 70, 100 ]
  },
  {
    _id: 2,
    name: 'Mie sedap',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 70, 100 ]
  },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 70, 100 ]
  },
  {
    _id: 4,
    name: 'Samsung Galaxy 59+',
    price: Long("10000000"),
    category: 'handphone',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100 ]
  },
  {
    _id: 5,
    name: 'Acer Precator XXI',
    price: Long("25000000"),
    category: 'laptop',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100 ]
  },
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [ 'logitech', 'mouse', 'accessories' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100 ]
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [ 'cooler', 'laptop', 'accessories', 'fan' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100 ]
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'monitor', 'computer' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100 ]
  },
  {
    _id: 9,
    name: 'Adidas Pulseboost HD Running Shoes Sepatu lari Pria',
    price: Long("1100000"),
    category: 'shoes',
    tags: [ 'adidas', 'shoes', 'running' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100 ]
  }
]
 */
// remove element 100
// hapus element pada field ratings yang nilainya 100
db.products.updateMany(
  {},
  {
    $pullAll: {
      ratings: [100],
    },
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
    tags: [ 'food', 'popular' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 70 ]
  },
  {
    _id: 2,
    name: 'Mie sedap',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 70 ]
  },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 70 ]
  },
  {
    _id: 4,
    name: 'Samsung Galaxy 59+',
    price: Long("10000000"),
    category: 'handphone',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70 ]
  },
  {
    _id: 5,
    name: 'Acer Precator XXI',
    price: Long("25000000"),
    category: 'laptop',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70 ]
  },
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [ 'logitech', 'mouse', 'accessories' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70 ]
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [ 'cooler', 'laptop', 'accessories', 'fan' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70 ]
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'monitor', 'computer' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70 ]
  },
  {
    _id: 9,
    name: 'Adidas Pulseboost HD Running Shoes Sepatu lari Pria',
    price: Long("1100000"),
    category: 'shoes',
    tags: [ 'adidas', 'shoes', 'running' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70 ]
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
    tags: [ 'food', 'popular' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 70 ]
  },
  {
    _id: 2,
    name: 'Mie sedap',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 70 ]
  },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 70 ]
  },
  {
    _id: 4,
    name: 'Samsung Galaxy 59+',
    price: Long("10000000"),
    category: 'handphone',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70 ]
  },
  {
    _id: 5,
    name: 'Acer Precator XXI',
    price: Long("25000000"),
    category: 'laptop',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70 ]
  },
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [ 'logitech', 'mouse', 'accessories' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70 ]
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [ 'cooler', 'laptop', 'accessories', 'fan' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70 ]
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'monitor', 'computer' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70 ]
  },
  {
    _id: 9,
    name: 'Adidas Pulseboost HD Running Shoes Sepatu lari Pria',
    price: Long("1100000"),
    category: 'shoes',
    tags: [ 'adidas', 'shoes', 'running' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70 ]
  }
]
 */
// add 100, 200, 300 to ratings
db.products.updateMany(
  {},
  {
    $push: {
      ratings: {
        $each: [100, 200, 300],
      },
    },
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
    tags: [ 'food', 'popular' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 70, 100, 200, 300 ]
  },
  {
    _id: 2,
    name: 'Mie sedap',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 70, 100, 200, 300 ]
  },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 70, 100, 200, 300 ]
  },
  {
    _id: 4,
    name: 'Samsung Galaxy 59+',
    price: Long("10000000"),
    category: 'handphone',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100, 200, 300 ]
  },
  {
    _id: 5,
    name: 'Acer Precator XXI',
    price: Long("25000000"),
    category: 'laptop',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100, 200, 300 ]
  },
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [ 'logitech', 'mouse', 'accessories' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100, 200, 300 ]
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [ 'cooler', 'laptop', 'accessories', 'fan' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100, 200, 300 ]
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'monitor', 'computer' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100, 200, 300 ]
  },
  {
    _id: 9,
    name: 'Adidas Pulseboost HD Running Shoes Sepatu lari Pria',
    price: Long("1100000"),
    category: 'shoes',
    tags: [ 'adidas', 'shoes', 'running' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100, 200, 300 ]
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
    tags: [ 'food', 'popular' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 70, 100, 200, 300 ]
  },
  {
    _id: 2,
    name: 'Mie sedap',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 70, 100, 200, 300 ]
  },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 70, 100, 200, 300 ]
  },
  {
    _id: 4,
    name: 'Samsung Galaxy 59+',
    price: Long("10000000"),
    category: 'handphone',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100, 200, 300 ]
  },
  {
    _id: 5,
    name: 'Acer Precator XXI',
    price: Long("25000000"),
    category: 'laptop',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100, 200, 300 ]
  },
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [ 'logitech', 'mouse', 'accessories' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100, 200, 300 ]
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [ 'cooler', 'laptop', 'accessories', 'fan' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100, 200, 300 ]
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'monitor', 'computer' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100, 200, 300 ]
  },
  {
    _id: 9,
    name: 'Adidas Pulseboost HD Running Shoes Sepatu lari Pria',
    price: Long("1100000"),
    category: 'shoes',
    tags: [ 'adidas', 'shoes', 'running' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100, 200, 300 ]
  }
]
 */
// add trending, popular to tags
// menambahkan value pada field tags
db.products.updateMany(
  {},
  {
    $addToSet: {
      tags: {
        $each: ["trending", "popular"],
      },
    },
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
    tags: [ 'food', 'popular', 'trending' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 70, 100, 200, 300 ]
  },
  {
    _id: 2,
    name: 'Mie sedap',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food', 'trending', 'popular' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 70, 100, 200, 300 ]
  },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food',
    tags: [ 'food', 'trending', 'popular' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 70, 100, 200, 300 ]
  },
  {
    _id: 4,
    name: 'Samsung Galaxy 59+',
    price: Long("10000000"),
    category: 'handphone',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100, 200, 300 ],
    tags: [ 'trending', 'popular' ]
  },
  {
    _id: 5,
    name: 'Acer Precator XXI',
    price: Long("25000000"),
    category: 'laptop',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100, 200, 300 ],
    tags: [ 'trending', 'popular' ]
  },
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [ 'logitech', 'mouse', 'accessories', 'trending', 'popular' ],        
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100, 200, 300 ]
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [ 'cooler', 'laptop', 'accessories', 'fan', 'trending', 'popular' ],  
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100, 200, 300 ]
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'monitor', 'computer', 'trending', 'popular' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100, 200, 300 ]
  },
  {
    _id: 9,
    name: 'Adidas Pulseboost HD Running Shoes Sepatu lari Pria',
    price: Long("1100000"),
    category: 'shoes',
    tags: [ 'adidas', 'shoes', 'running', 'trending', 'popular' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100, 200, 300 ]
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
    tags: [ 'food', 'popular', 'trending' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 70, 100, 200, 300 ]
  },
  {
    _id: 2,
    name: 'Mie sedap',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food', 'trending', 'popular' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 70, 100, 200, 300 ]
  },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food',
    tags: [ 'food', 'trending', 'popular' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 70, 100, 200, 300 ]
  },
  {
    _id: 4,
    name: 'Samsung Galaxy 59+',
    price: Long("10000000"),
    category: 'handphone',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100, 200, 300 ],
    tags: [ 'trending', 'popular' ]
  },
  {
    _id: 5,
    name: 'Acer Precator XXI',
    price: Long("25000000"),
    category: 'laptop',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100, 200, 300 ],
    tags: [ 'trending', 'popular' ]
  },
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [ 'logitech', 'mouse', 'accessories', 'trending', 'popular' ],        
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100, 200, 300 ]
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [ 'cooler', 'laptop', 'accessories', 'fan', 'trending', 'popular' ],  
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100, 200, 300 ]
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'monitor', 'computer', 'trending', 'popular' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100, 200, 300 ]
  },
  {
    _id: 9,
    name: 'Adidas Pulseboost HD Running Shoes Sepatu lari Pria',
    price: Long("1100000"),
    category: 'shoes',
    tags: [ 'adidas', 'shoes', 'running', 'trending', 'popular' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100, 200, 300 ]
  }
]
 */
// add hot in posititon 1
db.products.updateMany(
  {},
  {
    $push: {
      tags: {
        $each: ["hot"],
        $position: 1,
      },
    },
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
    tags: [ 'food', 'hot', 'popular', 'trending' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 70, 100, 200, 300 ]
  },
  {
    _id: 2,
    name: 'Mie sedap',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food', 'hot', 'trending', 'popular' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 70, 100, 200, 300 ]
  },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food',
    tags: [ 'food', 'hot', 'trending', 'popular' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 70, 100, 200, 300 ]
  },
  {
    _id: 4,
    name: 'Samsung Galaxy 59+',
    price: Long("10000000"),
    category: 'handphone',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100, 200, 300 ],
    tags: [ 'trending', 'hot', 'popular' ]
  },
  {
    _id: 5,
    name: 'Acer Precator XXI',
    price: Long("25000000"),
    category: 'laptop',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100, 200, 300 ],
    tags: [ 'trending', 'hot', 'popular' ]
  },
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [
      'logitech',
      'hot',
      'mouse',
      'accessories',
      'trending',
      'popular'
    ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100, 200, 300 ]
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [
      'cooler',
      'hot',
      'laptop',
      'accessories',
      'fan',
      'trending',
      'popular'
    ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100, 200, 300 ]
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'hot', 'monitor', 'computer', 'trending', 'popular' ],   
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100, 200, 300 ]
  },
  {
    _id: 9,
    name: 'Adidas Pulseboost HD Running Shoes Sepatu lari Pria',
    price: Long("1100000"),
    category: 'shoes',
    tags: [ 'adidas', 'hot', 'shoes', 'running', 'trending', 'popular' ],       
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100, 200, 300 ]
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
    tags: [ 'food', 'hot', 'popular', 'trending' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 70, 100, 200, 300 ]
  },
  {
    _id: 2,
    name: 'Mie sedap',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food', 'hot', 'trending', 'popular' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 70, 100, 200, 300 ]
  },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food',
    tags: [ 'food', 'hot', 'trending', 'popular' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 70, 100, 200, 300 ]
  },
  {
    _id: 4,
    name: 'Samsung Galaxy 59+',
    price: Long("10000000"),
    category: 'handphone',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100, 200, 300 ],
    tags: [ 'trending', 'hot', 'popular' ]
  },
  {
    _id: 5,
    name: 'Acer Precator XXI',
    price: Long("25000000"),
    category: 'laptop',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100, 200, 300 ],
    tags: [ 'trending', 'hot', 'popular' ]
  },
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [
      'logitech',
      'hot',
      'mouse',
      'accessories',
      'trending',
      'popular'
    ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100, 200, 300 ]
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [
      'cooler',
      'hot',
      'laptop',
      'accessories',
      'fan',
      'trending',
      'popular'
    ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100, 200, 300 ]
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'hot', 'monitor', 'computer', 'trending', 'popular' ],   
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100, 200, 300 ]
  },
  {
    _id: 9,
    name: 'Adidas Pulseboost HD Running Shoes Sepatu lari Pria',
    price: Long("1100000"),
    category: 'shoes',
    tags: [ 'adidas', 'hot', 'shoes', 'running', 'trending', 'popular' ],       
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 70, 100, 200, 300 ]
  }
]
 */
// add all element, but limit with slice
// menambah data dimana data yang tersimpan hanya 5 data pertama
db.products.updateMany(
  {},
  {
    $push: {
      ratings: {
        $each: [100, 200, 300, 400, 500],
        $slice: -5,
      },
    },
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
    tags: [ 'food', 'hot', 'popular', 'trending' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 100, 200, 300, 400, 500 ]
  },
  {
    _id: 2,
    name: 'Mie sedap',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food', 'hot', 'trending', 'popular' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 100, 200, 300, 400, 500 ]
  },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food',
    tags: [ 'food', 'hot', 'trending', 'popular' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 100, 200, 300, 400, 500 ]
  },
  {
    _id: 4,
    name: 'Samsung Galaxy 59+',
    price: Long("10000000"),
    category: 'handphone',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 200, 300, 400, 500 ],
    tags: [ 'trending', 'hot', 'popular' ]
  },
  {
    _id: 5,
    name: 'Acer Precator XXI',
    price: Long("25000000"),
    category: 'laptop',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 200, 300, 400, 500 ],
    tags: [ 'trending', 'hot', 'popular' ]
  },
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [
      'logitech',
      'hot',
      'mouse',
      'accessories',
      'trending',
      'popular'
    ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 200, 300, 400, 500 ]
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [
      'cooler',
      'hot',
      'laptop',
      'accessories',
      'fan',
      'trending',
      'popular'
    ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 200, 300, 400, 500 ]
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'hot', 'monitor', 'computer', 'trending', 'popular' ],   
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 200, 300, 400, 500 ]
  },
  {
    _id: 9,
    name: 'Adidas Pulseboost HD Running Shoes Sepatu lari Pria',
    price: Long("1100000"),
    category: 'shoes',
    tags: [ 'adidas', 'hot', 'shoes', 'running', 'trending', 'popular' ],       
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 200, 300, 400, 500 ]
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
    tags: [ 'food', 'hot', 'popular', 'trending' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 100, 200, 300, 400, 500 ]
  },
  {
    _id: 2,
    name: 'Mie sedap',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food', 'hot', 'trending', 'popular' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 100, 200, 300, 400, 500 ]
  },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food',
    tags: [ 'food', 'hot', 'trending', 'popular' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [ 100, 200, 300, 400, 500 ]
  },
  {
    _id: 4,
    name: 'Samsung Galaxy 59+',
    price: Long("10000000"),
    category: 'handphone',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 200, 300, 400, 500 ],
    tags: [ 'trending', 'hot', 'popular' ]
  },
  {
    _id: 5,
    name: 'Acer Precator XXI',
    price: Long("25000000"),
    category: 'laptop',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 200, 300, 400, 500 ],
    tags: [ 'trending', 'hot', 'popular' ]
  },
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [
      'logitech',
      'hot',
      'mouse',
      'accessories',
      'trending',
      'popular'
    ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 200, 300, 400, 500 ]
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [
      'cooler',
      'hot',
      'laptop',
      'accessories',
      'fan',
      'trending',
      'popular'
    ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 200, 300, 400, 500 ]
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'hot', 'monitor', 'computer', 'trending', 'popular' ],   
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 200, 300, 400, 500 ]
  },
  {
    _id: 9,
    name: 'Adidas Pulseboost HD Running Shoes Sepatu lari Pria',
    price: Long("1100000"),
    category: 'shoes',
    tags: [ 'adidas', 'hot', 'shoes', 'running', 'trending', 'popular' ],       
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [ 100, 200, 300, 400, 500 ]
  }
]
 */
// add all element, and sort desc
db.products.updateMany(
  {},
  {
    $push: {
      ratings: {
        $each: [100, 200, 300, 400, 500],
        $sort: -1,
      },
    },
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
    tags: [ 'food', 'hot', 'popular', 'trending' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [
      500, 500, 400, 400,
      300, 300, 200, 200,
      100, 100
    ]
  },
  {
    _id: 2,
    name: 'Mie sedap',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food', 'hot', 'trending', 'popular' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [
      500, 500, 400, 400,
      300, 300, 200, 200,
      100, 100
    ]
  },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food',
    tags: [ 'food', 'hot', 'trending', 'popular' ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.778Z"),
    ratings: [
      500, 500, 400, 400,
      300, 300, 200, 200,
      100, 100
    ]
  },
  {
    _id: 4,
    name: 'Samsung Galaxy 59+',
    price: Long("10000000"),
    category: 'handphone',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [
      500, 500, 400, 400,
      300, 300, 200, 200,
      100, 100
    ],
    tags: [ 'trending', 'hot', 'popular' ]
  },
  {
    _id: 5,
    name: 'Acer Precator XXI',
    price: Long("25000000"),
    category: 'laptop',
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [
      500, 500, 400, 400,
      300, 300, 200, 200,
      100, 100
    ],
    tags: [ 'trending', 'hot', 'popular' ]
  },
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [
      'logitech',
      'hot',
      'mouse',
      'accessories',
      'trending',
      'popular'
    ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [
      500, 500, 400, 400,
      300, 300, 200, 200,
      100, 100
    ]
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [
      'cooler',
      'hot',
      'laptop',
      'accessories',
      'fan',
      'trending',
      'popular'
    ],
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [
      500, 500, 400, 400,
      300, 300, 200, 200,
      100, 100
    ]
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'hot', 'monitor', 'computer', 'trending', 'popular' ],   
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [
      500, 500, 400, 400,
      300, 300, 200, 200,
      100, 100
    ]
  },
  {
    _id: 9,
    name: 'Adidas Pulseboost HD Running Shoes Sepatu lari Pria',
    price: Long("1100000"),
    category: 'shoes',
    tags: [ 'adidas', 'hot', 'shoes', 'running', 'trending', 'popular' ],       
    stock: 10,
    lastModifiedDate: ISODate("2023-03-28T07:57:35.779Z"),
    ratings: [
      500, 500, 400, 400,
      300, 300, 200, 200,
      100, 100
    ]
  }
]
 */
