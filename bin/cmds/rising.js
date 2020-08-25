
module.exports = {
    name: "rising",
    aliases: ["risingpost"],
    description: "Get a rising post and its info from a subreddit",
    usage: "<subreddit>",
    subreddit: true,
    async run(cmd) {
        console.log(`Rising post from ${cmd.args[0]}\n\n${cmd.RedditData(await cmd.reddit.top(cmd.args[0]))}`)
    }
}