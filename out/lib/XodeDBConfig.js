"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
const path = require("path");
class Config {
    constructor(filename, saveOnPush = true, humanReadable = false, separator = "/") {
        this.filename = filename;
        // Force json if no extension
        if (path.extname(filename) === "") {
            this.filename += ".json";
        }
        this.humanReadable = humanReadable;
        this.saveOnPush = saveOnPush;
        this.separator = separator;
    }
}
exports.Config = Config;
//# sourceMappingURL=XodeDBConfig.js.map