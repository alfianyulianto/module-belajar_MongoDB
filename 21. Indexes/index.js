// Create index at category in products collection
db.products.createIndex({
  category: 1,
});

// Get all indexes in products collection
// getIndexes() : digunakan untuk melihat field apa saja yang menggunakan indexes
db.products.getIndexes();
/**
 * TODO Output:
 [
  { v: 2, key: { _id: 1 }, name: '_id_' },
  {
    v: 2,
    key: { _fts: 'text', _ftsx: 1 },
    name: 'name_text',
    weights: { name: 1 },
    default_language: 'english',
    language_override: 'language',
    textIndexVersion: 3
  },
  { v: 2, key: { category: 1 }, name: 'category_1' }
  // ! Artinya category menggunakan indexes
]
 */

// Find products by category (will use index)
db.products.find({
  category: "food",
});

// Debugging query optimization
// explain() : digunakan untuk mencari tahu / debuging apakah sebuah field menggunakan indexes scan atau tidak
// untuk mengetahuinya lihat di `winningPlane>inputStage>stage:"IXSCAN"` -> artinya field category menerpakan index scan. Ini jauh lebih baik dari pada collection scan (COLLSCAN) yang akan mebuat query pencaria kita akan lebih lama jika datanya banyak
db.products.find({ category: "food" }).explain();
db.products.find({}).sort({ category: 1 }).explain();

// Create index at price and tags in products collection
db.products.createIndex({
  stock: 1,
  tags: 1,
});
/**
 * TODO Output:
 [
  { v: 2, key: { _id: 1 }, name: '_id_' },
  {
    v: 2,
    key: { _fts: 'text', _ftsx: 1 },
    name: 'name_text',
    weights: { name: 1 },
    default_language: 'english',
    language_override: 'language',
    textIndexVersion: 3
  },
  { v: 2, key: { category: 1 }, name: 'category_1' },
  { v: 2, key: { stock: 1, tags: 1 }, name: 'stock_1_tags_1' }
  // ! Artinya field stock dan tags menggunakan idexes
]
 */

// Find products by stock and tags (will use index)
db.products.find({
  stock: 10,
  tags: "popular",
});

// Debugging query optimization
// explain() : digunakan untuk mencari tahu / debuging apakah sebuah field menggunakan indexes scan atau tidak
// untuk mengetahuinya lihat di `winningPlane>inputStage>stage:"IXSCAN"` -> artinya field category menerpakan index scan. Ini jauh lebih baik dari pada collection scan (COLLSCAN) yang akan mebuat query pencaria kita akan lebih lama jika datanya banyak
// Jika kita menambahkan index untuk beberapa field maka indexes akan berjalan untuk field yang berurutan. Misal kita punya field1, field2, filed3 kita tambahkan indexes maka kita query kombinasinya "field1", "field1, field2" dan "field1, field2, field2". JIka kita mencoba query untuk "field2" atau "filed3" saja maka kita akan menghasilkan "COLLSCAN"
db.products
  .find({
    stock: 10,
  })
  .explain(); // "INXSCAN"
db.products
  .find({
    stock: 10,
    tags: "popular",
  })
  .explain(); // "INXSCAN"

// tidak menghasilkan "INXSCAN" tapi menghasilkan "COLLSCAN"
db.products
  .find({
    tags: "popular",
  })
  .explain();
