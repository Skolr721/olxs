const Discord = require("discord.js");
const hastebin = require("hastebin-gen");

module.exports.run = async (bot, message, args) => {
    let input = args.join(" ");
    if (!input) return;

    message.delete();
    hastebin(input, "js").then(l => {
        message.channel.send(l);
    }).catch(console.error);
}

module.exports.help = {
    name: "hastebin",
    aliases: ["haste", "bin"]
}