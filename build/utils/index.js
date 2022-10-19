"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateAge = void 0;
function calculateAge(timestamp) {
    let toNumber = Number(timestamp);
    if (isNaN(toNumber)) {
        return undefined; //"invalid date of birth value"
    }
    if (toNumber > Date.now()) {
        return undefined; //"Burn in the future?"
    }
    if (toNumber < 0) {
        return undefined; //"Sorry, valid date of birth starts from January 1, 1970"
    }
    let currentDate = Date.now();
    let currentAgeInMs = currentDate - toNumber;
    let year = 1000 * 60 * 60 * 24 * 365;
    let age = currentAgeInMs / year;
    let rounded = Math.round(age);
    return `${rounded}`;
}
exports.calculateAge = calculateAge;
