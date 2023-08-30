const Category=require("./../models/category.model");
const Product = require("./../models/product.model");
const fs = require("fs");
exports.list = async (req,res)=>{
    try {
        const rs = await Category.find();
        res.render("category/list",{category:rs});
    } catch (error) {
        res.send(error)
    }
}
exports.formCreate = (req,res)=>{
    const data = req.body;
    // console.log(req._parsedOriginalUrl.path)
    data.url = req._parsedOriginalUrl.path;
    res.render("category/form",{category:data});
}
exports.store = async (req,res)=>{
    const data = req.body;
    const file = req.file;
    // console.log(file);
    try {
        // data.thumbnail = `/uploads/${file.filename}`;
        const p = new Category(data);
        await p.save();
        res.redirect("/category");
    } catch (error) {
        res.render("category/form",{category:data,error:error});
    }
}
exports.formEdit= async(req,res)=>{
    const _id= req.body.id;
    try{
        const category = await Category.findById(_id);
        product.url = req._parsedOriginalUrl.path;
        res.render("category/form",{category:category});
    }catch (error){
        res.send(error);
        // res.redirect("/product");
    }
}
exports.update= async(req,res)=>{
    const _id= req.params.id;
    const data=req.body;
    const product = await Category.findById(_id);
    try{
        const file = req.file;
        await Category.findByIdAndUpdate(_id,data);
        res.redirect("/category");
    }catch(error){
        res.render("category/form",{category:category});
    }
}
exports.delete =async (req,res)=>{
    const _id = req.params.id;

    try {

        await Category.findByIdAndDelete(_id);

        res.redirect("/category");

    } catch (error) {

        res.redirect("/category");

    }

}