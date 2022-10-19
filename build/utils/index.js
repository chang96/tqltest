"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateAge = void 0;
function calculateAge(timestamp) {
    let toNumber = Number(timestamp);
    if (isNaN(toNumber)) {
        return "invalid date of birth value";
    }
    if (toNumber > Date.now()) {
        return "Burn in the future?";
    }
    if (toNumber < 0) {
        return "Sorry, valid date of birth starts from January 1, 1970";
    }
    let currentDate = Date.now();
    let currentAgeInMs = currentDate - toNumber;
    let year = 1000 * 60 * 60 * 24 * 365;
    let age = currentAgeInMs / year;
    let rounded = Math.round(age);
    return rounded === 1 ? `${rounded} year` : `${rounded} years`;
}
exports.calculateAge = calculateAge;
