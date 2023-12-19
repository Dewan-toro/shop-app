const mongoose = require("mongoose");

const garmentSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Nama harus diisi"],
  },
  location: {
    type: String,
  },
  contact: {
    type: String,
    require: [true, "Kontak harus diisi"],
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const Garment = mongoose.model("Garment", garmentSchema);

module.exports = Garment;
