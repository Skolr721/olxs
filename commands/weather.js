const Discord = require('discord.js');
const fs = require("fs"); 
var prefix  = "-"

module.exports.run = async (bot, message) => {
  const weather = require('weather-js'); 
    let msg = message.content.toUpperCase(); 
    let sender = message.author; 
    let cont = message.content.slice(prefix.length).split(" "); 
    let args = cont.slice(1); 
  
 
     if (!message.content.startsWith(prefix) || message.author.bot) return;// This checks to see if the beginning of the message is calling the weather command.
        // You can find some of the code used here on the weather-js npm page in the description.

        weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) { // Make sure you get that args.join part, since it adds everything after weather.
            if (err)message.channel.send(err);

            // We also want them to know if a place they enter is invalid.
            if (result === undefined || result.length === 0) {
                message.channel.send('**Please enter a valid location.**') // This tells them in chat that the place they entered is invalid.
                return; // This exits the code so the rest doesn't run.
            }

            // Variables
            var current = result[0].current; 
            var location = result[0].location; 

      
            const embed = new Discord.RichEmbed()
                .setDescription(`**${current.skytext}**`) 
                .setAuthor(`Weather for ${current.observationpoint}`) 
                .setThumbnail(current.imageUrl) 
                .setColor('#36393e') 
                .addField('Timezone',`UTC${location.timezone}`, true) 
                .addField('Degree Type',location.degreetype, true)
                .addField('Temperature',`${current.temperature} Degrees`, true)
                .addField('Feels Like', `${current.feelslike} Degrees`, true)
                .addField('Winds',current.winddisplay, true)
                .addField('Humidity', `${current.humidity}%`, true);

                
                message.channel.send(embed);
        });
   
};

module.exports.help = {
  name: "weather",
  alias: "Weather"
};