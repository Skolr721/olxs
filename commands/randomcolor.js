const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let hex = Math.floor(Math.random() * 16777216).toString(16);

    let embed = new Discord.RichEmbed()
        .setColor(hex)
        .setThumbnail(`https://www.colorhexa.com/${hex}.png`)
        .addField("Color generated:", "#" + hex.toUpperCase());

    return message.channel.send(embed);
}

module.exports.help = {
    name: "randomcolor",
    aliases: ["randomcolour", "color", "colour"]
}