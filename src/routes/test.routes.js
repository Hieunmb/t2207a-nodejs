const express = require("express");
const router = express.Router();
const controller = require("./../controllers/test.controller");

router.get("/",controller.list);
router.get("/create",controller.formCreate);
router.post("/create",controller.store);
router.get("/edit/:id",controller.formEdit);
router.post("/edit/:id",controller.update);
router.get("/delete/:id",controller.delete);

module.exports = router;