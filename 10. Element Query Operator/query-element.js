/**
 * * DATA PRODUCT
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
// ? select * from products where category is null
db.products.find({
  category: {
    $exists: false
  }
})
/** ?
 * TODO Output: 
 [
  { _id: 1, name: 'Indomie ayam bawang', price: Long("2000") },
  { _id: 2, name: 'Mie sedap', price: Long("2000") }
]

 */

/**
 * * DATA PRODUCT
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
// ? select * from products where type(category) = "string"
db.products.find({
  category: {
    $type: "string",
  },
});
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
  }
]

 */

// ? select * from products where type(category) = "int"
db.products.find({
  category: {
    $type: "int",
  },
});
/**
 * TODO tidak ada output yang dikekuarkan karena tidak ada data products yang categorynya bertype 'integer'
 */

/**
 * * DATA PRODUCT
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
// ? select * from products where type(category) in ("long","string")
db.products.find({
  category: {
    $type:['long', 'string']
  }
})
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
  }
]
 */

/**
 * * DATA PRODUCT
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
// ? select * form products where type(price) in ('int', 'long')
db.products.find({
  price: {
    $type:  ['int', 'long']
  }
})
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
  }
]
 */