"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataError = exports.DatabaseError = exports.NestedError = void 0;
class NestedError extends Error {
    constructor(message, id, inner) {
        super(message);
        this.inner = inner;
        this.id = id;
        this.name = this.constructor.name;
    }
    toString() {
        const string = this.name + ": " + this.message;
        if (this.inner) {
            return string + ':\n' + this.inner;
        }
        return string;
    }
}
exports.NestedError = NestedError;
class DatabaseError extends NestedError {
}
exports.DatabaseError = DatabaseError;
class DataError extends NestedError {
}
exports.DataError = DataError;
//# sourceMappingURL=Errors.js.map