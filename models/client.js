const mongoose = require("mongoose");
const clientschema = new mongoose.Schema({
  name: {
    type: String,
    required: "name must be feiled",
  },

  adress: {
    type: String,
    required: true,
  },
  isVip: {
    type: Boolean,
  },
  phone: {
    type: String,
  },
});
module.exports = mongoose.model("Client", clientschema);
