"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateAge = void 0;
function calculateAge(timestamp) {
    let toNumber = timestamp === '' ? NaN : Number(timestamp);
    let validDate = new Date(toNumber).getFullYear();
    if (toNumber > Date.now()) {
        return null;
    }
    if (isNaN(toNumber) || isNaN(validDate)) {
        return null;
    }
    return Math.abs(new Date().getFullYear() - new Date(toNumber).getUTCFullYear());
}
exports.calculateAge = calculateAge;
