/**
 * * DATA CUSTOMERS
 [ { _id: 'alfian', name: 'Alfian Yulianto' } ]
k
 */
// alter table customers change name full_name
// ubah "field nama" pada table customers menjadi "full_name"
db.customers.updateMany(
  {},
  {
    $rename: {
      name: "full_name",
    },
  }
);
/**
 * TODO Output setelah di update:
 [ { _id: 'alfian', full_name: 'Alfian Yulianto' } ]
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
  {
    _id: 9,
    name: 'Adidas Pulseboost HD Running Shoes Sepatu lari Pria',
    price: Long("1100000"),
    category: 'shoes',
    tags: [ 'adidas', 'shoes', 'running' ]
  }
]
  */
// update products set stock = stock + 10
// pada data product tidak ada 'field stock', jika "field stock" tidak ada maka MongoDB akan menganggap bahwa "field stock bernilai 0"
db.products.updateMany(
  {},
  {
    $inc: {
      stock: 10,
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
    stock: 10
  },
  {
    _id: 2,
    name: 'Mie sedap',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10
  },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10
  },
  {
    _id: 4,
    name: 'Samsung Galaxy 59+',
    price: Long("10000000"),
    category: 'handphone',
    stock: 10
  },
  {
    _id: 5,
    name: 'Acer Precator XXI',
    price: Long("25000000"),
    category: 'laptop',
    stock: 10
  },
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [ 'logitech', 'mouse', 'accessories' ],
    stock: 10
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [ 'cooler', 'laptop', 'accessories', 'fan' ],
    stock: 10
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'monitor', 'computer' ],
    stock: 10
  },
  {
    _id: 9,
    name: 'Adidas Pulseboost HD Running Shoes Sepatu lari Pria',
    price: Long("1100000"),
    category: 'shoes',
    tags: [ 'adidas', 'shoes', 'running' ],
    stock: 10
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
    stock: 10
  },
  {
    _id: 2,
    name: 'Mie sedap',
    price: Long("2000"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10
  },
  {
    _id: 3,
    name: 'Pop Mie Rasa Bakso',
    price: Long("2500"),
    category: 'food',
    tags: [ 'food' ],
    stock: 10
  },
  {
    _id: 4,
    name: 'Samsung Galaxy 59+',
    price: Long("10000000"),
    category: 'handphone',
    stock: 10
  },
  {
    _id: 5,
    name: 'Acer Precator XXI',
    price: Long("25000000"),
    category: 'laptop',
    stock: 10
  },
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [ 'logitech', 'mouse', 'accessories' ],
    stock: 10
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [ 'cooler', 'laptop', 'accessories', 'fan' ],
    stock: 10
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'monitor', 'computer' ],
    stock: 10
  },
  {
    _id: 9,
    name: 'Adidas Pulseboost HD Running Shoes Sepatu lari Pria',
    price: Long("1100000"),
    category: 'shoes',
    tags: [ 'adidas', 'shoes', 'running' ],
    stock: 10
  }
]
 */
// update products set lastModifiedDate = current_date()
// pada data product tidak ada 'field lastModifiedDate', jika "field lastModifiedDate" tidak ada maka MongoDB akan membuatnya
db.products.updateMany(
  {},
  {
    $currentDate: {
      lastModifiedDate: {
        $type: "date",
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
