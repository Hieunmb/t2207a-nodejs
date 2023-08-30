const mongoose = require("mongoose");
const product_schema = new mongoose.Schema({
    ProductCode:{
        type: String,
        required:true
    },
    ProductName:{
        type:String,
        required:true,
        minLength:5,
        maxLength:255
    },
    ProductData:{
        type:Date,
        required:true
    },
    ProductOriginPrice:{
        type:Number,
        min:0,
        required:true
    },
    Quantity:{
        type:Number,
        required:true
    },
    ProductStoreCode:{
        type:String,
        required:true
    },
});
module.exports = mongoose.model("ProductCollection",product_schema);