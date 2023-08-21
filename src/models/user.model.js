const mongoose = require("mongoose");
const user_schema = new mongoose.Schema({
    // _id
    fullname:{ 
        type: String,
        required:[true,'Truong nay bat buoc phai nhap'],
        minLength:[10,'Do dai toi thieu 10'],
    },
    email:{
        type:String,
        required:true,
        minLength:10,
        unique:true,
        validate:{
            validator:(v)=>{
                const re=
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                return v.match(re);
            },
            message: (t)=>`${t.value} Khong phai dinh dang email`
        }
    },
    password:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model("User",user_schema);