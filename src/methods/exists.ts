import axios from "axios"
import { getData, RedditPost } from "../lib/Post"

/**
 * Check if a subreddit exists
 * @param subreddit The subreddit to check
 */
async function exists(subreddit: string): Promise<boolean> {
    if (subreddit.includes("r/")) subreddit = subreddit.split("r/")[1]
    try {
        var { data } = await axios.get(`https://www.reddit.com/search.json?q=${subreddit}`)
    } catch {
        return false
    }
    if (data.data.dist === 0) return false;
    return true;
}
export default exists;