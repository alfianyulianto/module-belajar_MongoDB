// Create category collection
db.createCollection("merchants", {
  // validatioAction ada warning dan error
  // warning datanya masih diterima tapi akan muncul pesan waring meskipun data tidak valid
  // error berarti data akan ditolak jika tidak valid
  validationAction: "error",
  validator: {
    $jsonSchema: {
      // karena jsonSchme kita berbentuk object maka bsonType object
      bsonType: "object",
      // required : artinya data harus diisi tidak boleh kosong
      required: ["name", "balance", "type", "address"],
      // properties : digunakan untuk mengisi detail dari tiap-tiap filed
      properties: {
        name: {
          bsonType: "string",
          description: "Must be a string",
        },
        balance: {
          bsonType: "long",
          description: "Must be a long",
        },
        type: {
          // enum : digunakan untuk set value dari field
          // jika value tidak sesuai yang di set maka akan error
          enum: ["PREMIUM", "REGULAR"],
          description: "Can only be one of enum values",
        },
        // properties bisa diisi dengan object lagi
        address: {
          bsonType: "object",
          required: ["street", "city"],
          properties: {
            street: {
              bsonType: "string",
              description: "Must be a string",
            },
            city: {
              bsonType: "string",
              description: "Must be a string",
            },
            country: {
              bsonType: "string",
              description: "Must be a string",
            },
          },
        },
      },
    },
  },
});

// Insert valid document
db.merchants.insertOne({
  _id: "toko1",
  name: "Toko Satu",
  balance: new NumberLong("1000000"),
  type: "PREMIUM",
  address: {
    street: "Jalan Raya Belum Jadi",
    city: "Jakarta",
    country: "Indonesia",
  },
});
/**
 * TODO Output:
 [  
  {
    _id: 'toko1',
    name: 'Toko Satu',
    balance: Long("1000000"),
    type: 'PREMIUM',
    address: {
      street: 'Jalan Raya Belum Jadi',
      city: 'Jakarta',
      country: 'Indonesia'
    }
  }
]
 */

// Inser Invalid document: Name is blank
db.merchants.insertOne({
  _id: "toko2",
  balance: new NumberLong("1000000"),
  type: "PREMIUM",
  address: {
    street: "Jalan Raya Belum Jadi",
    city: "Jakarta",
    country: "Indonesia",
  },
});
/**
 * TODO Output: Error karena 'field nama' tidak di isikan padahal 'nama' validationnya 'required'
 */

// Inser Invalid document: Address City is blank
db.merchants.insertOne({
  _id: "toko2",
  name: "Toko Dua",
  balance: new NumberLong("1000000"),
  type: "PREMIUM",
  address: {
    street: "Jalan Raya Belum Jadi",
    country: "Indonesia",
  },
});
/**
 * TODO Output: Error karena 'field nama' tidak di isikan padahal 'nama' validationnya 'required'
 */

// Add validator to customers collection
db.runCommand({
  collMod: "customers",
  validationAction: "error",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["full_name"],
      properties: {
        full_name: {
          bsonType: "string",
          description: "Must be a string",
        },
      },
    },
  },
});
