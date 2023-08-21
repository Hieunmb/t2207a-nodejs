const Product = require("./../models/product.model");
const fs = require("fs");
exports.list = async (req,res)=>{
    try {
        const rs = await Product.find();
        res.render("product/list",{products:rs});
    } catch (error) {
        
    }
}
exports.formCreate = (req,res)=>{
    const data = req.body;
    res.render("product/form",{product:data});
}
exports.store = async (req,res)=>{
    const data = req.body;
    const file = req.file;
    // console.log(file);
    if(file){
        const img = fs.readFileSync(file.path);
        data.thumbnail = {
            contentType: file.mimetype,
            data:img.toString("base64")
        }
    }
    try {
        // data.thumbnail = `/uploads/${file.filename}`;
        const p = new Product(data);
        await p.save();
        res.redirect("/product");
    } catch (error) {
        res.render("product/form",{product:data,error:error});
    }
}