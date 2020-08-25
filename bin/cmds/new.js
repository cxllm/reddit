
module.exports = {
    name: "new",
    aliases: ["newpost"],
    description: "Get a new post and its info from a subreddit",
    usage: "<subreddit>",
    subreddit: true,

    async run(cmd) {
        console.log(cmd.RedditData(await cmd.reddit.new(cmd.args[0])))
    }
}