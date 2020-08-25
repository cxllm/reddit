import { RedditPost } from "../lib/Post";
/**
 * Fetch a random new post from a subreddit
 * @param subreddit The subreddit to fetch a post from
 */
declare function _new(subreddit: string): Promise<RedditPost>;
export default _new;
