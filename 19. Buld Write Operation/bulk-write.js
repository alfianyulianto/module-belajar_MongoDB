/**
 * * DATA CUSTOMERS
 [ { _id: 'alfian', full_name: 'Alfian Yulianto' } ]
 */
db.customers.bulkWrite([
  {
    insertOne: {
      document: {
        _id: "eko",
        full_name: "Eko",
      },
    },
  },
  {
    insertOne: {
      document: {
        _id: "kurniawan",
        full_name: "Kurniawan",
      },
    },
  },
  {
    updateMany: {
      filter: {
        _id: {
          $in: ["eko", "kurniawan", "khannedy"],
        },
      },
      update: {
        $set: {
          full_name: "Eko Kurniawan Khannedy",
        },
      },
    },
  },
]);
/**
 * TODO Output:
 [
  { _id: 'alfian', full_name: 'Alfian Yulianto' },    
  { _id: 'eko', full_name: 'Eko Kurniawan Khannedy' },
  { _id: 'kurniawan', full_name: 'Eko Kurniawan Khannedy' }
]
 */
