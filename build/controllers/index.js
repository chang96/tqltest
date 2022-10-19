"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateAgeController = void 0;
const utils_1 = require("../utils");
const calculateAgeController = function (req, res) {
    let dob = String(req.query.dob);
    let age = (0, utils_1.calculateAge)(dob);
    let rgx = /years$|year$/;
    if (age)
        res.status(200).json({ "statusCode": 200, "age": age });
    else
        res.status(400).json({ "statusCode": 400, "age": `${age}`, "error": "invalid age parameter" });
};
exports.calculateAgeController = calculateAgeController;
