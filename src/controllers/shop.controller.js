const Shop = require("./../models/shop.model");
exports.shop = (req,res)=>{
    res.render("shop");
}
exports.postShop = (req,res)=>{
    const data = req.body;
    const u = new Shop(data);
    u.save().then(()=>{
        res.send("DONE");
    }).catch(err=>{
        res.send(err);
    })
    
}