import { RedditPost } from "../lib/Post";
/**
 * Fetch a random rising from from a subreddit
 * @param subreddit The subreddit to fetch a post from
 */
declare function rising(subreddit: string): Promise<RedditPost>;
export default rising;
