const express = require("express");
const router = express.Router();
const controller = require("./../controllers/shop.controller");
router.get("/shop",controller.shop);
router.post('/shop',controller.postShop);

module.exports = router;