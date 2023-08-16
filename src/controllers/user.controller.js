const User = require("./../models/user.model");
exports.register = (req,res)=>{
    res.render("register");
}
exports.postRegister = (req,res)=>{
    const data = req.body;
    const u = new User(data);
    u.save().then(()=>{
        res.send("DONE");
    }).catch(err=>{
        res.send(err);
    })
    
}