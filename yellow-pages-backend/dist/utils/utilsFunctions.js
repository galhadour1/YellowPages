"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ageToDate = void 0;
function ageToDate(age) {
    const today = new Date();
    const year = today.getFullYear() - age;
    const birthDate = new Date(year, today.getMonth(), today.getDate());
    const isoString = birthDate.toISOString();
    return isoString + ` ${today.toTimeString().split(' ')[0]} ${today.toTimeString().split(' ')[1]}`;
}
exports.ageToDate = ageToDate;
//# sourceMappingURL=utilsFunctions.js.map