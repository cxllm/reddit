
export function getData(data): RedditPost {
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
    }

}
export interface RedditPost {
    upvotes: number;
    downvotes: number;
    author: string;
    title: string;
    url: string;
    subreddit: string;
    image: string;
    score: number;
    edited: boolean;
    nsfw: boolean;
    video: boolean;
    created: Date;
}