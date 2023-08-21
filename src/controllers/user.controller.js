const User = require("./../models/user.model");
const bcrypt= require('bcrypt')
exports.register = (req,res)=>{
    res.render("register");
}
exports.login = (req,res)=>{
    res.render("login");
}
exports.postRegister = async (req,res)=>{
    const data = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(data.password,salt);
    //
    //bcrypt.compare
    data.password=hashed;
    const u = new User(data);
    u.save().then(()=>{
        res.send("DONE");
    }).catch(err=>{
        res.send(err);
    })
}
    exports.postLogin = async (req,res)=>{
        try{
            const email = req.body.email;
            const u = await User.findOne({email:email});// User.find();
            if(u == null){
                res.send('Email or Password is not correct');
                return;
            }
            const verify= await bcrypt.compare(req.body.password,u.password);
            if(!verify){
                res.send('Email or Password is not correct');
                return;
            }
            res.send('Loggin done');
        }catch(err){
            res.send(err);
        }
    }