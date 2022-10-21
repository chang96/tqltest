"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateAgeController = void 0;
const utils_1 = require("../utils");
const calculateAgeController = function (req, res) {
    let dob = String(req.query.dob);
    let age = (0, utils_1.calculateAge)(dob);
    if (age)
        res.status(200).json({ "statusCode": 200, "age": age });
    else
        res
            .status(200)
            .send({
            age: null, response: { data: { error: "invalid age parameter" } }
        });
};
exports.calculateAgeController = calculateAgeController;
