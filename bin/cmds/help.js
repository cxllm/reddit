
module.exports = {
    name: "help",
    aliases: ["commands"],
    description: "Find out info about commands",
    usage: "[command]",
    async run(cmd) {
        if (cmd.args[0]) {
            const command = cmd.commands.get(cmd.args[0]) || cmd.aliases.get(cmd.args[0]);
            if (!command) return console.log(`I couldn't find the command ${cmd.args[0]}. Run reddit help for the commands`)
            console.log(`Command Info\nName: ${command.name}\nDescription: ${command.description}\nUsage: reddit ${command.name} ${command.usage}\nAliases: ${command.aliases.map(alias => alias).join(", ")}`)
        } else {
            console.log("Welcome to the (unofficial) reddit cli! Here are the commands you can use:\n")
            console.log([...cmd.commands].map(cmd => {
                return `${cmd[1].name} - ${cmd[1].description}.\nUsage: reddit ${cmd[1].name} ${cmd[1].usage}. Aliases: ${cmd[1].aliases.map(alias => alias).join(", ")}`
            }).join("\n\n"))
        }
    }
}