exports.home=(req,res)=>{
    // res.send('Hello world');
    var abc="T2207A";
    var student= [
        'Phung Van Vu',
        'Trinh Van Trung',
        'Nguyen Van A'
    ]
    res.render("home",{
        clasName: abc,
        students: student
    });
}
exports.about = (req,res)=>{
    res.render('about');
}