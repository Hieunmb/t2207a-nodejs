const mongoose= require("mongoose");
const brand_schema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique: true,
    },
})
module.exports= mongoose.model("Brand",brand_schema)