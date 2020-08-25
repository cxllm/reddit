"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = void 0;
function getData(data) {
    return {
        upvotes: data.ups,
        downvotes: data.downs,
        author: data.author,
        title: data.title,
        url: `https://reddit.com${data.permalink}`,
        subreddit: data.subreddit,
        image: data.url,
        score: data.score,
        edited: data.edited,
        nsfw: data.over_18,
        video: data.is_video,
        created: new Date(data.created * 1000)
    };
}
exports.getData = getData;
