// Insert document customers
db.customers.insertOne({
  _id: "alfian",
  name: "Alfian Yulianto"
})

// Insert document products
db.products.insertMany([
  {
    _id: 1,
    name: "Indomie ayam bawang",
    price: new NumberLong("2000")
  },
  {
    _id: 2,
    name: "Mie sedap",
    price: new NumberLong("2000")
  }
])

// Insert documents orders
db.orders.insertOne({
  _id: new ObjectId(),
  total: new NumberLong("8000"),
  items: [
    {
      product_id: 1,
      price: new NumberLong("2000"),
      quantity: new NumberInt("2")
    },
    {
      product_id: 2,
      price: new NumberLong("2000"),
      quantity: new NumberInt("2")
    }
  ]
})
