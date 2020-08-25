export declare function getData(data: any): RedditPost;
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
