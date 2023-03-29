/**
 * * DATA CUSTOMERS
 [ { _id: 'alfian', full_name: 'Alfian Yulianto' } ]
 */
// Insert spammer document
db.customers.insertOne({
  _id: "spammer",
  full_name: "Spammer",
});
/**
 * TODO Output:
 [
  { _id: 'alfian', full_name: 'Alfian Yulianto' },
  { _id: 'spammer', full_name: 'Spammer' }        
]
 */

/**
 * * DATA CUSTOMERS
[
  { _id: 'alfian', full_name: 'Alfian Yulianto' },
  { _id: 'spammer', full_name: 'Spammer' }        
]
 */
// Delete document by _id
db.customers.deleteOne({
  _id: "spammer",
});
/**
 * TODO Output:
 [ { _id: 'alfian', full_name: 'Alfian Yulianto' } ]
 */

/**
 * * DATA CUSTOMERS
 [ { _id: 'alfian', full_name: 'Alfian Yulianto' } ]
 */
// Insert many spammer documents
db.customers.insertMany([
  {
    _id: "spammer1",
    full_name: "Spammer1",
  },
  {
    _id: "spammer2",
    full_name: "Spammer2",
  },
  {
    _id: "spammer3",
    full_name: "Spammer3",
  },
]);
/**
 * TODO Output:
 [
  { _id: 'alfian', full_name: 'Alfian Yulianto' },
  { _id: 'spammer1', full_name: 'Spammer1' },
  { _id: 'spammer2', full_name: 'Spammer2' },
  { _id: 'spammer3', full_name: 'Spammer3' }
]
 */

/**
 * * DATA CUSTOMER
 [
  { _id: 'alfian', full_name: 'Alfian Yulianto' },
  { _id: 'spammer1', full_name: 'Spammer1' },
  { _id: 'spammer2', full_name: 'Spammer2' },
  { _id: 'spammer3', full_name: 'Spammer3' }
]
 */
// Delete many documents
// menghapus berdasarakan id yang ada kata 'spammer'
db.customers.deleteMany({
  _id: {
    $regex: "spammer",
  },
});
/**
 * TODO Output:
 [ { _id: 'alfian', full_name: 'Alfian Yulianto' } ]
 */
