const Product = require("./../models/test.model");
exports.list = async (req,res)=>{
    try {
        const rs = await Product.find().sort({ ProductStoreCode: -1 }); // Sort by ProductStoreCode in descending order;
        res.render("test/list",{products:rs});
    } catch (error) {
        res.send(error)
    }
}
exports.formCreate = async (req,res)=>{
    const data = req.body;
    // console.log(req._parsedOriginalUrl.path)
    data.url = req._parsedOriginalUrl.path;
    res.render("test/form",{product:data});
}
exports.store = async (req,res)=>{
    const data = req.body;
    const file = req.file;
    // console.log(file);
    try {
        // data.thumbnail = `/uploads/${file.filename}`;
        // data.category=c._id;
        const p = new Product(data);
        await p.save();
        res.redirect("/test");
    } catch (error) {
        res.render("test/form",{product:data,error:error});
    }
}
exports.formEdit= async(req,res)=>{
    const _id= req.body.id;
    try{
        const product = await Product.findById(_id);
        product.url = req._parsedOriginalUrl.path;
        res.render("test/form",{product:product});
    }catch (error){
        res.send(error);
        // res.redirect("/product");
    }
}
exports.update= async(req,res)=>{
    const _id= req.params.id;
    const data=req.body;
    const product = await Product.findById(_id);
    try{
        const file = req.file;
        await Product.findByIdAndUpdate(_id,data);
        res.redirect("/test");
    }catch(error){
        res.render("test/form",{product:product});
    }
}
exports.delete =async (req,res)=>{
    const _id = req.params.id;

    try {

        await Product.findByIdAndDelete(_id);

        res.redirect("/test");

    } catch (error) {

        res.redirect("/test");

    }

}