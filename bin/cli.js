#!/usr/bin/env node
require("process");
const commands = new Map();
const aliases = new Map();
require("fs").readdirSync(`${__dirname}/cmds`).map(file => {
    const cmd = require(`./cmds/${file}`);
    commands.set(cmd.name, cmd)
    cmd.aliases.map(alias => aliases.set(alias, cmd))
})
const args = process.argv.slice(2).join(" ").toLowerCase().split(" ");
let command = args.shift()
const reddit = require("../dist/index");
if (!command) command = "help"
if (commands.has(command) || aliases.has(command)) {
    const cmd = commands.get(command) || aliases.get(command);
    if (cmd.subreddit) {
        reddit.exists(args[0]).then(exists => {
            exists ? cmd.run({
                commands,
                aliases,
                args,
                reddit,
                RedditData
            }) :
                console.log(`The subreddit ${args[0]} does not exist!`)
        })
    } else {
        cmd.run({
            commands,
            aliases,
            args,
            reddit,
            RedditData
        })
    }
} else {
    console.log(`The command/alias ${command} could not be found.\nFor the commands that can be used in this cli, please type "reddit help"`)
}
function RedditData(data) {
    return [
        `Subreddit: ${data.subreddit}`,
        `Author: u/${data.author}`,
        `Title: ${data.title}`,
        `NSFW: ${data.nsfw}`,
        `URL: ${data.url}`,
        `Image: ${data.image}`,
        `Upvotes: ${data.upvotes}`,
        `Downvotes: ${data.downvotes}`
    ].join("\n")

}