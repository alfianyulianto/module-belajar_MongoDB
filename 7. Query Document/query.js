/**
 * * DATA CUSTOMERS
[ { _id: 'alfian', name: 'Alfian Yulianto' } ]
 */
// ? select * from customers where _id = "alfian"
db.customers.find({
  _id: "alfian"
})

/**
[ { _id: 'alfian', name: 'Alfian Yulianto' } ]
 */
// ? select * from customers where name = "Alfian Yulianto"
db.customers.find({
  name: "Alfian Yulianto"
})

/**
 * * DATA CUSTOMERS
[ { _id: 'alfian', name: 'Alfian Yulianto' } ]
 */
// ? select * from customers where _id = "alfian" and name = "Alfian Yulianto"
db.customers.find({
  _id: "alfian",
  name:"Alfian Yulianto"
})


/**
 * * DATA CUSTOMERS
 [
  { _id: 1, name: 'Indomie ayam bawang', price: Long("2000") },
  { _id: 2, name: 'Mie sedap', price: Long("2000") },
]
 */
// ? select * from products where price = 2000
db.products.find({
  price:2000
})

/**
 * * DATA ORDERS
 [
  {
    _id: ObjectId("64212008c318ade8d64c4bef"),
    total: Long("8000"),
    items: [
      { product_id: 1, price: Long("2000"), quantity: 2 },
      { product_id: 2, price: Long("2000"), quantity: 2 }
    ]
  }
]

 */
// ? select * from orders where items.product_id = 1
db.orders.find({
  "items.product_id": 1
})
/**
 * TODO Output: 
  {
    _id: ObjectId("64211420c318ade8d64c4bec"),
    total: Long("8000"),
    items: [
      { product_id: 1, price: Long("2000"), quantity: 2 },
      { product_id: 2, price: Long("2000"), quantity: 2 }
    ]
  }
 */