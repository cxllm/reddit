"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const Post_1 = require("../lib/Post");
/**
 * Fetch a random rising from from a subreddit
 * @param subreddit The subreddit to fetch a post from
 */
async function rising(subreddit) {
    if (subreddit.includes("r/"))
        subreddit = subreddit.split("r/")[1];
    let data;
    try {
        data = (await axios_1.default.get(`https://reddit.com/r/${subreddit}/rising.json`)).data;
    }
    catch {
        throw new Error(`404 - The subreddit ${subreddit} was not found`);
    }
    if (!Array.isArray(data) && data.data.dist === 0)
        throw new Error(`404 - The subreddit ${subreddit} was not found`);
    return Post_1.getData(data.data.children[Math.floor(Math.random() * data.data.dist)].data);
}
exports.default = rising;
