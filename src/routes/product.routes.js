const express = require("express");
const router = express.Router();
const controller = require("./../controllers/product.controller");

// upload file
const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req,file,callback)=>{
        callback(null,"public/uploads");
    },
    filename: (req,file,callback)=>{
        callback(null,Date.now()+"-"+file.originalname);
    }
});
const upload = multer({storage:storage});

router.get("/",controller.list);
router.get("/create",controller.formCreate);
router.post("/create",upload.single("thumbnail"),controller.store);
// router.get("/edit/:id",controller.formCreate);
// router.post("/create",controller.store);

module.exports = router;