const Discord = require('discord.js');

exports.run = async (bot, message, args, ops) => {

	if (!message.member.roles.find("name", "@everyone")) { //Whatever role you want, I pick @everyone because everyone can use this command
		message.channel.send('Invalid permissions.');
		return;
	}
    
    // Check for input
    if (!args[0]) return message.channel.send('Proper usage: -poll <question>');
    
    // Create Embed
    const embed = new Discord.RichEmbed()
    
        .setColor("#36393e")
        .setTitle('A New Poll')
        .setFooter('React to Vote.')
        .setDescription(args.join(' '))
        .setFooter(`By ${message.author.username} | React to Vote.`)
        .setTimestamp();
        
    let msg = await message.guild.channels.find("name", "vote").send(embed)
        .then(function (msg) {
            msg.react("❎");
            msg.react("✅"); // You can only add two reacts
            message.delete({timeout: 1000});
            }).catch(function(error) {
            console.log(error);
        });
};

module.exports.help = {
    name: "poll",
    alias: "Poll"
};