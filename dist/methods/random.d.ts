import { RedditPost } from "../lib/Post";
/**
 * Fetch a random post from a subreddit
 * @param subreddit The subreddit to fetch a post from
 */
declare function random(subreddit: string): Promise<RedditPost>;
export default random;
