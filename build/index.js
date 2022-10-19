"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const index_1 = require("./routes/index");
const middlewares_1 = require("./middlewares");
const PORT = process.env.PORT || "3005";
const app = (0, express_1.default)();
app.use(middlewares_1.rateLimiter);
app.use("/", index_1.router);
app.use("*", function (req, res) {
    res.status(404).json({ "message": "route not found" });
});
app.listen(PORT, () => {
    console.log(`running on http://localhost:${PORT}`);
});
