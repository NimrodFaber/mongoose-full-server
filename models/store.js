const mongoose = require("mongoose");
const newstore = new mongoose.Schema({
  name: {
    type: String,
    required: "name must be field",
  },
  adress: {
    type: "string",
    required: true,
  },
  phone: {
    type: String,
    required: "phone must be field",
  },
});
module.exports = mongoose.model("Store", newstore);
