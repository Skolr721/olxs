const Discord = require("discord.js")




module.exports.run = async (bot, msg, args, lang) => {
	const input = args.slice();

	if (input.length === 0) return msg.reply("رجاءا اكتب العنوان الذي تريده");

	await msg.channel.setTopic(input.join(' '));

	const set = lang.setchanneltopic.replace('%channelname', msg.channel.name);
	msg.channel.send(`Check the **__New__** Topic`);
};

module.exports.help = {
	name: "topic",
	alias: "Topic",
	botpermissions: ['SEND_MESSAGES', 'MANAGE_CHANNELS']
};