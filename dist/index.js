"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
// importing methods
const random_1 = __importDefault(require("./methods/random"));
const new_1 = __importDefault(require("./methods/new"));
const top_1 = __importDefault(require("./methods/top"));
const exists_1 = __importDefault(require("./methods/exists"));
const rising_1 = __importDefault(require("./methods/rising"));
class Reddit {
    constructor() {
        this.random = random_1.default;
        this.new = new_1.default;
        this.newPost = new_1.default; //Alias because the of the "new" keyword
        this.top = top_1.default;
        this.rising = rising_1.default;
        this.exists = exists_1.default;
    }
}
module.exports = new Reddit();
