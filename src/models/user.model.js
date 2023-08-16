const mongoose = require("mongoose");
const user_schema = new mongoose.Schema({
    // _id
    fullname: String,
    email:String,
    password:String
});
module.exports = mongoose.model("User",user_schema);