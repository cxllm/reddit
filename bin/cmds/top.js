
module.exports = {
    name: "top",
    aliases: ["toppost"],
    description: "Get a top post and its info from a subreddit",
    usage: "<subreddit>",
    subreddit: true,
    async run(cmd) {
        console.log(cmd.RedditData(await cmd.reddit.top(cmd.args[0])))
    }
}