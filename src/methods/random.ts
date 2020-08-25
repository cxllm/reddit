import axios from "axios"
import { getData, RedditPost } from "../lib/Post"

/**
 * Fetch a random post from a subreddit
 * @param subreddit The subreddit to fetch a post from
 */
async function random(subreddit: string): Promise<RedditPost> {
    if (subreddit.includes("r/")) subreddit = subreddit.split("r/")[1]
    try {
        var { data } = await axios.get(`https://reddit.com/r/${subreddit}/random.json`)
    } catch {
        throw new Error(`404 - The subreddit ${subreddit} was not found`)
    }
    if (!Array.isArray(data) && data.data.dist === 0) throw new Error(`404 - The subreddit ${subreddit} was not found`)
    return getData(data[0].data.children[0].data)
}
export default random;