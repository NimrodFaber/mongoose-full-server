const mongoose = require("mongoose");
const orderschema = new mongoose.Schema(
  {
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
    },
    storeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Store",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderschema);
/*   user :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: "The user id is a required field!",
    } */
