import { RedditPost } from "../lib/Post";
/**
 * Fetch a random top from from a subreddit
 * @param subreddit The subreddit to fetch a post from
 */
declare function top(subreddit: string): Promise<RedditPost>;
export default top;
