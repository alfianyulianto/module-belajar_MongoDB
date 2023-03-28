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
// select _id, name, category from products
// karena field "_id" selalu terinclude ketika mengquery data maka tidak perlu menambahkan fieldn "_id"
db.products.find(
  {},
  {
    name: 1,
    category: 1,
  }
);
/**
 * TODO Output: 
 [
  { _id: 1, name: 'Indomie ayam bawang' },
  { _id: 2, name: 'Mie sedap' },
  { _id: 3, name: 'Pop Mie Rasa Bakso', category: 'food' },
  { _id: 4, name: 'Samsung Galaxy 59+', category: 'handphone' },       
  { _id: 5, name: 'Acer Precator XXI', category: 'laptop' },
  { _id: 6, name: 'Logitech M235 Wireless Mouse', category: 'laptop' },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    category: 'laptop'
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    category: 'computer'
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
// select _id, name, category, price from products
// mirip dengan "select *" tapi field tags tidak di includekan di hasi query
db.products.find(
  {},
  {
    tags: 0,
  }
);
/**
 * TODO Output
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
    category: 'laptop'
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop'
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer'
  }
]
 */

// Ketika kita menggunakan "Query Projection" untul include dan hide secara bersama maka akan error
// Pastikan jangan menggunaakn keduanya secara bersamaan
db.products.find(
  {},
  {
    name: 1,
    tags: 0,
  }
);
/**
 * TODO Output:
 MongoServerError: Cannot do exclusion on field tags in inclusion projection
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
// select _id, name, category, price, tags[first] from products where tags in ("samsung", "logitech")
// menampilkan sebuah product yang ada field tags ada kata 'samsung atau logitech' dan tambahkan projection dimana kita cuma pengen display 'name, category,price, dan tags yang array index pertama'
db.products.find(
  {
    tags: {
      $elemMatch: {
        $in: ["samsung", "logitech"],
      },
    },
  },
  {
    name: 1,
    category: 1,
    price: 1,
    "tags.$": 1,
  }
);
/**
 * TODO Output:
 [
  {
    _id: 6,
    name: 'Logitech M235 Wireless Mouse',
    price: Long("175000"),
    category: 'laptop',
    tags: [ 'logitech' ]
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung' ]
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
// select _id, name, category, price, tags(in ("samsung", "logitech")) from products
// menampilkan data product dengan projection dimana kita ingin mendisplay 'name, category, price, dan tags yang arraynya samsung atau logitech'
db.products.find(
  {},
  {
    name: 1,
    category: 1,
    price: 1,
    tags: {
      $elemMatch: {
        $in: ["samsung", "logitech"],
      },
    },
  }
);
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
    tags: [ 'logitech' ]
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop'
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung' ]
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
// select *, score from products where $search like "monitor"
db.products.find(
  {
    $text: {
      $search: "monitor",
    },
  },
  {
    score: {
      $meta: "textScore",
    },
  }
);
/**
 * TODO Output:
 [
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'monitor', 'computer' ],    
    score: 0.625
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
// select _id, name, price, category, tags[0,2] from products
// menampilkan data products dengan projecttion yang mana kita ingin mendisplay 'tags dengan 2 index array pertama'
db.products.find(
  {},
  {
    tags: {
      $slice: 2,
    },
  }
);
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
    tags: [ 'logitech', 'mouse' ]
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [ 'cooler', 'laptop' ]
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'samsung', 'monitor' ]
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
// select _id, name, price, category, tags[last 2] from products
// menampilkan data products dengan projecttion yang mana kita ingin mendisplay 'tags dengan 2 index array diakhir
db.products.find(
  {},
  {
    tags: {
      $slice: -2,
    },
  }
);
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
    tags: [ 'mouse', 'accessories' ]
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [ 'accessories', 'fan' ]
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'monitor', 'computer' ]
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
// select _id, name, price, category, tags[from, limit] from products
// menampilkan data product dengan projection yang mana kita akan mendisplay field tags berdasarkan index
db.products.find(
  {},
  {
    tags: {
      $slice: [1, 1],
    },
  }
);
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
    tags: [ 'mouse' ]
  },
  {
    _id: 7,
    name: 'Havit Cooler Pad Gaming 5Fan Blue led F2082',
    price: Long("200000"),
    category: 'laptop',
    tags: [ 'laptop' ]
  },
  {
    _id: 8,
    name: 'Samsung LC24F390FHEXXD Curved Monitor ',
    price: Long("1750000"),
    category: 'computer',
    tags: [ 'monitor' ]
  }
]
 */
