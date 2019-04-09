const Discord = require("discord.js")



module.exports.run = async (client, message, args) => {
    
    let prefix = "-"
  
  if(message.author.bot) return;
		if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('\`\`MANAGE_MESSAGES\`\` **Must Have __Manage Messages__ Perm**').then(msg => msg.delete(5000));
		if(args > 100) return message.reply('**Choose From 2 To 100**').then(msg => msg.delete(3000));
		if(args < 2) return message.reply('**Choose From 2 To 100**').then(msg => msg.delete(3000));
		if(isNaN(args)) return message.reply('**Choose From 2 To 100**').then(msg => msg.delete(3000));

		message.channel.bulkDelete(args);
        message.channel.send(`Messages That Have Been Cleared **( ${args} )**`).then(m => m.delete(3000));
  
  
  
  
   
};

module.exports.help = {
    name: "purge",
    aliases: ["prune", "clear"]
};