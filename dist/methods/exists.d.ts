/**
 * Check if a subreddit exists
 * @param subreddit The subreddit to check
 */
declare function exists(subreddit: string): Promise<boolean>;
export default exists;
