 const Discord = require("discord.js")


module.exports.run = (client, message, args) => {

    if (message.author.id !== "502437783651090432") return message.channel.send("⛔ **ACCESS DENIED**");

    try {
        delete require.cache[require.resolve(`./${args[0]}.js`)];
    } catch (e) {

        return message.channel.send(`Unable to reload: ${args[0]}.js`);
    }

    message.channel.send(`**Successfully reloaded:** ${args[0]}.js`);


};

module.exports.help = {
    name: "reload",
    alias: "Reload"
};