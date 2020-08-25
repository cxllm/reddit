
module.exports = {
    name: "random",
    aliases: ["randompost"],
    description: "Get a random post and its info from a subreddit",
    usage: "<subreddit>",
    subreddit: true,
    async run(cmd) {
        console.log(cmd.RedditData(await cmd.reddit.random(cmd.args[0])))
    }
}