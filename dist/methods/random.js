"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const Post_1 = require("../lib/Post");
/**
 * Fetch a random post from a subreddit
 * @param subreddit The subreddit to fetch a post from
 */
async function random(subreddit) {
    if (subreddit.includes("r/"))
        subreddit = subreddit.split("r/")[1];
    try {
        var { data } = await axios_1.default.get(`https://reddit.com/r/${subreddit}/random.json`);
    }
    catch {
        throw new Error(`404 - The subreddit ${subreddit} was not found`);
    }
    if (!Array.isArray(data) && data.data.dist === 0)
        throw new Error(`404 - The subreddit ${subreddit} was not found`);
    return Post_1.getData(data[0].data.children[0].data);
}
exports.default = random;
