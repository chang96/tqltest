"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", function (req, res) {
    res.send("This app helps you calculate your date of birth");
});
router.get("/howold", controllers_1.calculateAgeController);
