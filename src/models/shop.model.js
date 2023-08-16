const mongoose = require("mongoose");
const shop_schema = new mongoose.Schema({
    // _id
    name: String,
    price:String,
});
module.exports = mongoose.model("Shop",shop_schema);