"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
/**
 * Check if a subreddit exists
 * @param subreddit The subreddit to check
 */
async function exists(subreddit) {
    if (subreddit.includes("r/"))
        subreddit = subreddit.split("r/")[1];
    try {
        var { data } = await axios_1.default.get(`https://www.reddit.com/search.json?q=${subreddit}`);
    }
    catch {
        return false;
    }
    if (data.data.dist === 0)
        return false;
    return true;
}
exports.default = exists;
