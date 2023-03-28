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
// ? select * from product where category in ('laptop', 'handphone') and price > 20000000
db.products.find({
  $and: [
    {
      category: {
        $in: ["laptop", "handphone"],
      },
    },
    {
      price: {
        $gt: 20000000,
      },
    },
  ],
});

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
// ? select * from product where category not in ('laptop', 'handphone')
// cari products yang categorynya bukkan di dalam laptop dan handphone
db.products.find({
  category: {
    $not: {
      $in: ["laptop", "handphone"],
    },
  },
});
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
// ? select * from products where price between 10000000 and 20000000 and category != 'food'
// cari products diaman harganya antarara 10000000 dan 20000000 dan categorynya bukan sama dengan food
db.products.find({
  $and: [
    {
      price: {
        $gte: 10000000,
        $lte: 20000000,
      },
    },
    {
      category: {
        $ne: "food",
      },
    },
  ],
});
/**
* TODO Output:
{
    _id: 4,
    name: 'Samsung Galaxy 59+',
    price: Long("10000000"),
    category: 'handphone'
  }

*/
