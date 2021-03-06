"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeTrailingChar = exports.merge = void 0;
const merge = (...arrays) => {
    const destination = {};
    arrays.forEach(function (source) {
        var prop;
        for (prop in source) {
            if (prop in destination && destination[prop] === null) {
                destination[prop] = source[prop];
            }
            else if (prop in destination && Array.isArray(destination[prop])) {
                // Concat Arrays
                destination[prop] = destination[prop].concat(source[prop]);
            }
            else if (prop in destination && typeof destination[prop] === "object") {
                // Merge Objects
                destination[prop] = exports.merge(destination[prop], source[prop]);
            }
            else {
                // Set new values
                destination[prop] = source[prop];
            }
        }
    });
    return destination;
};
exports.merge = merge;
const removeTrailingChar = (dataPath, trailing) => {
    if (dataPath.length > 1 && dataPath.endsWith(trailing)) {
        return dataPath.substring(0, dataPath.length - 1);
    }
    return dataPath;
};
exports.removeTrailingChar = removeTrailingChar;
//# sourceMappingURL=Utils.js.map