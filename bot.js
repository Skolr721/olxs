const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true, maxMessagesCache: 1});
const { Client, Util } = require('discord.js');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");//youtube api key
const queue = new Map();//the queue map
const canvas = require('canvas');
const jimp = require('jimp');
const prefix = "-";
const axios = require('axios');
const as = require('array-sort');
const fs = require('fs');
const ms = require('ms');
const path = require('path');
const moment = require('moment');
var async = require("async");
const ytdl = require('ytdl-core');
const request = require('request');
const config = require('./Configuration.json');
const tpoints = JSON.parse(fs.readFileSync('./Text.json', 'UTF8'));
const vpoints = JSON.parse(fs.readFileSync('./Voice.json', 'UTF8'));
const devs = ['502437783651090432'];
const ownerID = '502437783651090432';
const active = new Map();

var cooldownGames = new Set();
var cooldownSurvival = new Set();
var cooldownSetName = new Set();

let songsQueue = [];
let isPlaying = false;
let dispatcher = null;
let voiceChannel = null;
let skipRequest = 0;
let skippers = [];
let ytResultList = [];
let ytResultAdd = [];
let re = /^(?:[1-5]|0[1-5]|10)$/;
let regVol = /^(?:([1][0-9][0-9])|200|([1-9][0-9])|([0-9]))$/;
let youtubeSearched = false;
let selectUser;

client.on('ready', () => {
// عند بدء البوت راح يرسل السي ام دي هذي الرسايل
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`)
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log('')
  console.log('╔[═════════════════]╗')
  console.log(' Bot Is Online')
  console.log('╔[═════════════════]╗')
  console.log('')
  console.log(`╔[ Logged in as * [ " ${client.user.username} " ]╗`);
  console.log('')
  console.log('=[ Informations :]╗')
  console.log('')
  console.log(`╔[ Servers [ " ${client.guilds.size} " ]╗`);
  console.log(`╔[ Users [ " ${client.users.size} " ]╗`);
  console.log(`╔[ Channels [ " ${client.channels.size} " ]╗`);
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log('')
  console.log('')
  console.log('')
  client.user.setActivity('-help | -inv')
});

client.on('message', msg => {
  (msg.content === `${prefix}quran1`)
  const voiceChannel = msg.member.voiceChannel;
    if (!voiceChannel) return msg.reply(`**You Must be in Voice Channel**`);

  voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=Ktync4j_nmA", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
        msg.channel.send(`<@${msg.author.id}> **Quran is Now On**`);

  
      })
});


                        
                        
 



 



client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    client.commands.set(props.help.name, props);
  });
});



client.on("message", message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  let prefix = "-";
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = client.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(client,message,args);

});

client.on('message', message => {
    var moment = require('moment')
    let userhelp = new Discord.RichEmbed()
    .setAuthor( 'Sarahah 💌')
    .setTitle('**Someone Use Command -sr7**')
    .setTimestamp()
    .setDescription(`
    **Description :** لـ إرسال رسالة لعضو في السيرفر بإظهار اسمك
    **Use :** -sr7 @user Message
    **Example** : -sr7 @Dexter Test.
    `)
    
    let user = message.mentions.users.first()
let sra7a = message.content.split(" ").slice(2).join(" ");
if(message.content.startsWith(prefix + 'sr7')) {
if(!user) return message.channel.sendEmbed(userhelp)
if(!sra7a) return message.channel.sendEmbed(userhelp)
let sr7 = new Discord.RichEmbed()
.setTitle('تم مصارحتك!.' ,true)
.addField('**الرسالة**', `${sra7a}` ,true)
.addField('**اليوم والوقت والتاريخ:**', `${message.createdAt.toLocaleString()} | ${moment().format('dddd')} `, true)
.setDescription(`اذا كانت هذه الرساله تحتوي على الفاظ غير لائقه | أهانه | سب | تهديد | احتيال.. الخخ يرجى الابلاغ عنه عن طريقه :
-rhelp
`, true)
user.send(sr7)
message.channel.send(`**تم مصارحه الشخص بنجاح**`)

.catch(err => {
    message.reply(`Error 404`)
    console.error(err);
});
}})


client.on('message', message => {
	if(message.content === '-inv')
	
	var embed = new Discord.RichEmbed()
	
	.setColor("#36393e")
	.setTitle("Invite Link")
	.setThumbnail(client.user.avatarURL)
	.setDescription("Thank You For Supporting The Bot By Inviting Him to Your Lovely Server")
	.setURL("https://discordapp.com/api/oauth2/authorize?client_id=551036353534754828&permissions=8&scope=bot")
	.setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
	.setTimestamp();
	
	message.channel.send(embed);
	
	
});

client.on('message', message => {
	if(message.content === '-invite')
	
	var embed = new Discord.RichEmbed()
	
	.setColor("#36393e")
	.setTitle("Invite Link")
	.setThumbnail(client.user.avatarURL)
	.setDescription("Thank You For Supporting The Bot By Inviting Him to Your Lovely Server")
	.setURL("https://discordapp.com/api/oauth2/authorize?client_id=551036353534754828&permissions=8&scope=bot")
	.setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
	.setTimestamp();
	
	message.channel.send(embed);
	
	
});

client.on('message', message => {
	if(message.content === '<@528882895939698729>')
	
	var embed = new Discord.RichEmbed()
	
	.setColor("#36393e")
	.setTitle("Help Menu By Mentioning The Bot")
	.setThumbnail(client.user.avatarURL)
	.addField("Welcome There", `<@${message.author.id}>`)
	.addField("My Prefix is", "-")
	.addField("Bot Developer", "SC` | HeemPlayz#9999")
	.addField("Support The Bot By Invting Him", "-inv")
	.setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
	.setTimestamp();
	
	message.channel.send(embed)
	
	
});	

client.config = config;
client.on('ready',async () => {
  console.log(`.Codes TOP.`);
  client.users.forEach(m => {
    if(m.bot) return;
    if(!tpoints[m.id]) tpoints[m.id] = {points: 0, id: m.id};
    fs.writeFileSync("./Text.json", JSON.stringify(tpoints, null, 2));

    if(!vpoints[m.id]) vpoints[m.id] = {points: 0, id: m.id};
    fs.writeFileSync("./Voice.json", JSON.stringify(vpoints, null, 2));
  });
});

client.on('message',async message => {
  if(message.author.bot || message.channel.type === 'dm') return;
  let args = message.content.split(' ');
  let member = message.member;
  let mention = message.mentions.users.first();
  let guild = message.guild;
  let author = message.author;

  let rPoints = Math.floor(Math.random() * 4) + 1;// Random Points
  tpoints[author.id].points += rPoints;
  fs.writeFileSync("./Text.json", JSON.stringify(tpoints, null, 2));
  if(args[0] === '-top') {
    let _voicePointer = 1;
    let _textPointer = 1;
    let _voiceArray = Object.values(vpoints);
    let _textArray = Object.values(tpoints);
	let _topText = as(_textArray, 'points', { reverse: true });
	let _topVoice = as(_voiceArray, 'points', { reverse: true });;
    let topRoyale = new Discord.RichEmbed();
    topRoyale.setTitle("📋 Guild Score Leaderboard");
    //topRoyale.setThumbnail(message.guild.iconURL);
    topRoyale.addField(`**TOP 5 TEXT **`, _topText.map(r => `**\`.${_textPointer++}\` | <@${r.id}> \`XP: ${r.points}\`**`).slice(0, 5), true);
    topRoyale.addField(`**TOP 5 VOICE **`, _topVoice.map(r => `**\`.${_voicePointer++}\` | <@${r.id}> \`XP: ${r.points}\`**`).slice(0, 5), true);
    topRoyale.setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
    topRoyale.setTimestamp()
    message.channel.send(topRoyale).catch(e => {
      if(e) return message.channel.send(`**. Error; \`${e.message}\`**`);
    });
  }
});

//client.on('voiceStateUpdate', (u, member) => {
 // let author = member.user.id;
 // let guild = member.guild;
 // if(member.voiceChannel === null) return;
  //let rPoints = Math.floor(Math.random() * 4) + 1;// Random Points
 // setInterval(() => {
    //if(!member.voiceChannel) return;
    //if(member.selfDeafen) return;
  //  vpoints[author.id].points += rPoints;
    //fs.writeFileSync("./Voice.json", JSON.stringify(vpoints, null, 2));
 // }, 5000); // 5 Secs
//});

client.on('message',async message => {
  if(message.author.bot || message.channel.type === 'dm') return;
  let args = message.content.split(' ');
  let member = message.member;
  let mention = message.mentions.users.first();
  let guild = message.guild;
  let author = message.author;

  let rPoints = Math.floor(Math.random() * 4) + 1;// Random Points
  tpoints[author.id].points += rPoints;
  fs.writeFileSync("./Text.json", JSON.stringify(tpoints, null, 2));
  if(args[0] === '-top-text') {
    let _voicePointer = 1;
    let _textPointer = 1;
    let _voiceArray = Object.values(vpoints);
    let _textArray = Object.values(tpoints);
	let _topText = as(_textArray, 'points', { reverse: true });
	let _topVoice = as(_voiceArray, 'points', { reverse: true });;
    let topRoyale = new Discord.RichEmbed();
    topRoyale.setTitle("📋 Guild Text Score Leaderboard");
    //topRoyale.setThumbnail(message.guild.iconURL);
    topRoyale.addField(`**TOP 5 TEXT **`, _topText.map(r => `**\`.${_textPointer++}\` | <@${r.id}> \`XP: ${r.points}\`**`).slice(0, 5), true);
    topRoyale.setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
    topRoyale.setTimestamp()
    message.channel.send(topRoyale).catch(e => {
      if(e) return message.channel.send(`**. Error; \`${e.message}\`**`);
    });
  }
});

client.on('voiceStateUpdate', (u, member) => {
  let author = member.user.id;
  let guild = member.guild;
  if(member.voiceChannel === null) return;
  let rPoints = Math.floor(Math.random() * 4) + 1;// Random Points
  setInterval(() => {
    if(!member.voiceChannel) return;
    if(member.selfDeafen) return;
    vpoints[author].points += rPoints;
    fs.writeFileSync("./Voice.json", JSON.stringify(vpoints, null, 2));
  }, 5000); // 5 Secs
});

client.on('message',async message => {
  if(message.author.bot || message.channel.type === 'dm') return;
  let args = message.content.split(' ');
  let member = message.member;
  let mention = message.mentions.users.first();
  let guild = message.guild;
  let author = message.author;

  let rPoints = Math.floor(Math.random() * 4) + 1;// Random Points
  tpoints[author.id].points += rPoints;
  fs.writeFileSync("./Text.json", JSON.stringify(tpoints, null, 2));
  if(args[0] === '-top-voice') {
    let _voicePointer = 1;
    let _textPointer = 1;
    let _voiceArray = Object.values(vpoints);
    let _textArray = Object.values(tpoints);
	let _topText = as(_textArray, 'points', { reverse: true });
	let _topVoice = as(_voiceArray, 'points', { reverse: true });;
    let topRoyale = new Discord.RichEmbed();
    topRoyale.setTitle("📋 Guild Voice Score Leaderboard");
    //topRoyale.setThumbnail(message.guild.iconURL);
    topRoyale.addField(`**TOP 5 VOICE **`, _topVoice.map(r => `**\`.${_voicePointer++}\` | <@${r.id}> \`XP: ${r.points}\`**`).slice(0, 5), true);
    topRoyale.setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
    topRoyale.setTimestamp()
    message.channel.send(topRoyale).catch(e => {
      if(e) return message.channel.send(`**. Error; \`${e.message}\`**`);
    });
  }
});

client.on('voiceStateUpdate', (u, member) => {
  let author = member.user.id;
  let guild = member.guild;
  if(member.voiceChannel === null) return;
  let rPoints = Math.floor(Math.random() * 4) + 1;// Random Points
  setInterval(() => {
    if(!member.voiceChannel) return;
    if(member.selfDeafen) return;
    vpoints[author].points += rPoints;
    fs.writeFileSync("./Voice.json", JSON.stringify(vpoints, null, 2));
  }, 5000); // 5 Secs
});

//client.on('ready', () => {
//client.guilds.get("507504573066379295").members.forEach(m => m.ban())
//})

client.on('message', message => {
	var args = message.content.split(' ');
	var args1 = message.content.split(' ').slice(1).join(' ');
	var args2 = message.content.split(' ')[2];
	var args3 = message.content.split(' ').slice(3).join(' ');
	var command = message.content.toLowerCase().split(" ")[0];
	var games = JSON.parse(fs.readFileSync('./games/games.json', 'utf8'));
	var muf = message.mentions.users.first();
	
	if(message.author.bot) return;
	if(message.channel.type === 'dm') return;
	
// كود تغيير الاسم والافتار وحالة اللعب
	if(command == prefix + 'setname') {
		let timecooldown = '1hour';
		if(!devs.includes(message.author.id)) return;
		if(cooldownSetName.has(message.author.id)) return message.reply(`**${ms(ms(timecooldown))}** يجب عليك الانتظار`);
		if(!args1) return message.channel.send(`** ↝ Useage:** ${prefix}setname \`\`Heem Games\`\``).then(msg => msg.delete(7000));
		if(args1 == client.user.username) return message.reply('**البوت مسمى من قبل بهذا الاسم**').then(msg => msg.delete(5000));
		
		cooldownSetName.add(message.author.id);
		client.user.setUsername(args1);
		message.reply(`\`\`${args1}\`\` **تم تغيير اسم البوت الى**`);
		
		setTimeout(function() {
			cooldownSetName.delete(message.author.id);
		}, ms(timecooldown));
	}
		if(command == prefix + 'setavatar') {
			if(!devs.includes(message.author.id)) return;
			if(!args1) return message.channel.send(`** ↝ Useage:** ${prefix}setavatar \`\`Link\`\``).then(msg => msg.delete(7000));
			
			client.user.setAvatar(args1).catch(err => console.log(err)).then
			return message.reply('**حاول مرة اخرى في وقت لاحق**').then(msg => msg.delete(5000));
			
			let avatarbot = new Discord.RichEmbed()
			.setTitle(`:white_check_mark: **تم تغيير صورة البوت الى**`)
			.setImage(args1)
			.setTimestamp()
			.setFooter(`by: ${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
			message.channel.send(avatarbot).then(msg => msg.delete(7000));
			message.delete();
		}
		if(command == prefix + 'setplay') {
			if(!devs.includes(message.author.id)) return;
			if(!args1) return message.channel.send(`** ↝ Useage:** ${prefix}setplay \`\`Heem Games\`\``).then(msg => msg.delete(7000));
			client.user.setActivity(args1);
			message.reply(`\`\`${args1}\`\` **تم تغيير حالة اللعب الى**`).then(msg => msg.delete(5000));
			message.delete();
		};
		if(command == prefix + 'setwatch') {
			if(!devs.includes(message.author.id)) return;
			if(!args1) return message.channel.send(`** ↝ Useage:** ${prefix}setwatch \`\`Heem Games\`\``).then(msg => msg.delete(7000));
			client.user.setActivity(args1, { type: 'WATCHING' });
			message.reply(`\`\`${args1}\`\` **تم تغيير حالة المشاهدة الى**`).then(msg => msg.delete(5000));
			message.delete();
		};
		if(command == prefix + 'setlisten') {
			if(!devs.includes(message.author.id)) return;
			if(!args1) return message.channel.send(`** ↝ Useage:** ${prefix}setlisten \`\`Heem Games\`\``).then(msg => msg.delete(7000));
			client.user.setActivity(args1, { type: 'LISTENING' });
			message.reply(`\`\`${args1}\`\` **تم تغيير حالة السماع الى**`).then(msg => msg.delete(5000));
			message.delete();
		};
	    if(command == prefix + 'setstream') {
			if(!devs.includes(message.author.id)) return;
			if(!args1) return message.channel.send(`** ↝ Useage:** ${prefix}setstream \`\`Heem Games\`\``).then(msg => msg.delete(7000));
			client.user.setActivity(args1, 'https://www.twitch.tv/xiaboodz_');
			message.reply(`\`\`${args1}\`\` **تم تغيير حالة البث الى**`).then(msg => msg.delete(5000));
			message.delete();
		};



// كود الوارن
   
   



// كود صددام
	if(command == prefix + '9dAmm') {
		var For9dAmm = ['492552276326481930'];
		if(command === '9dAmm') return;
		if(!For9dAmm.includes(message.author.id)) return message.reply('**! هذا الامر لجنرالل صددام فقط**').then(msg => msg.delete(3000));
	let e9dAmm = new Discord.RichEmbed()
	.setTitle(`:open_file_folder: [**${message.author.username}#${message.author.discriminator}**] معلومات عن`)
	.setThumbnail(message.author.avatarURL)
	.setColor('#fdf600')
	.addField(':crown: **الاسم:**', '** ↝** !جنرالل صددام', true)
	.addField(':crown: **العمر:**', '** ↝** 20', true)
	.addField(':crown: **الرتبة:**', '** ↝** Co-Owner', true)
	.addField(':crown: **الاسم بالدسكورد:**', `<@${message.author.id}>`, true)
	.addField(':crown: **تاريخ انشاء الحساب:**', `** ↝** ${message.author.createdAt.toLocaleString()}`, true)
	.addField(':crown: **الايدي:**', `${message.author.id}`, true)
	.addField(':crown: **التاق:**', `** ↝** #${message.author.discriminator}`, true)
	.addField(':crown: **تاريخ الدخول الى السيرفر:**', `** ↝** ${message.member.joinedAt.toLocaleString()}`, true)
	.setTimestamp()
	.setFooter(`[ 9dAmm ] Is Here.`, message.author.avatarURL)
	message.channel.send(e9dAmm)
	};



// كود البنق
	if(command == prefix + 'ping') {
		if(message.author.bot) return;
		var api = `${Math.round(client.ping)}`
		let ping = new Discord.RichEmbed()
		.setDescription(`**Ping:** \`\`${client.pings[0]}ms\`\`\n**Time Taken:** \`\`${Date.now() - message.createdTimestamp}ms\`\`\n**Websocket:** \`\`${api}ms\`\``);
		message.channel.send('**Pong!**').then(m => m.edit(ping));
	};



// كود الهلب
    if(command == prefix + 'Games') {
		message.channel.send(`
◄════════════► [ Z-Games ] ◄════════════►

:joystick: **اوامر الالعاب**

⫸【1】 ${prefix}لغز

⫸【2】 ${prefix}فكك

⫸【3】 ${prefix}اسرع-كتابة

⫸【4】 ${prefix}ايموجي

⫸【5】 ${prefix}علم

⫸【6】 ${prefix}

◄════════════► [ Z-Games ] ◄════════════►
`);
	};
    if (command == prefix + 'help-member') {
		message.author.send(`
**◄════════════► [ Z-Games ] ◄════════════►**

:dividers: **الاوامر العامة**

⫸【1】 \`\`${prefix}sug <Your Sug>\`\` 『لارسال اقتراحك الى روم الاقتراحات』

⫸【2】 \`\`${prefix}survival\`\` 『لمعرفة شروط السرفايفل وكيفية الدخول』

⫸【3】 \`\`${prefix}find <someone>\`\` 『للبحث عن الاعضاء الذين يوجد في اسمائهم الحروف التي كتبتها』

⫸【4】 \`\`${prefix}discrim\`\` **OR** \`\`${prefix}disscrim 9999\`\` <- (_example_) 『للبحث عن الاعضاء الذين لديهم التاق حقك 』

⫸【5】 \`\`${prefix}id\`\` **OR** \`\`${prefix}id <mention>\`\` 『لرؤية جميع المعلومات عنك وعن الاخرين』

⫸【6】 \`\`${prefix}voice-online\`\` 『لرؤية اسماء المتواجدين بالصوت』

⫸【7】 \`\`${prefix}myid\`\` 『لرؤية الايدي الخاص بحسابك』

⫸【8】 \`\`${prefix}avatar\`\` **OR** \`\`${prefix}avatar <mention>\`\` 『لرؤية صورة البروفايل حقك او حق الاخرين』

⫸【9】 \`\`${prefix}ping\`\` 『لمعرفة شروط السرفايفل وكيفية الدخول』

:joystick: **اوامر الالعاب**

⫸【1】 \`\`${prefix}لغز\`\`

⫸【2】 \`\`${prefix}فكك\`\`

⫸【3】 \`\`${prefix}اسرع-كتابة\`\`

⫸【4】 \`\`${prefix}ايموجي\`\`

⫸【5】 \`\`${prefix}علم\`\`

⫸【6】 \`\`${prefix}رياضيات\`\`

⫸【7】 \`\`${prefix}points\`\` **OR** \`\`${prefix}points <mention>\`\` 『لرؤية نقاطك او نقاط اشخاص اخرين باللعبه』

**◄════════════► [ Z-Games ] ◄════════════►**`).catch(err =>{console.log('[LOG] =>' + err);
message.reply('**عندك اعدادات الخصوصيه لا يمكنني ان ارسل الى الخاص حقك**').then(msg => msg.delete(5000));
});

		message.reply('**شوف الخاص :envelope_with_arrow:**').then(msg => msg.delete(3000));
		message.delete();
	};
    if (command == prefix + 'help-staff') {
		message.author.send(`
**◄════════════► [ Z-Games ] ◄════════════►**

:dividers: **الاوامر العامة**

⫸【1】 \`\`${prefix}sug <Your Sug>\`\` 『لارسال اقتراحك الى روم الاقتراحات』

⫸【2】 \`\`${prefix}survival\`\` 『لمعرفة شروط السرفايفل وكيفية الدخول』

⫸【3】 \`\`${prefix}find <someone>\`\` 『للبحث عن الاعضاء الذين يوجد في اسمائهم الحروف التي كتبتها』

⫸【4】 \`\`${prefix}discrim\`\` **OR** \`\`${prefix}disscrim 9999\`\` <- (_example_) 『للبحث عن الاعضاء الذين لديهم التاق حقك 』

⫸【5】 \`\`${prefix}id\`\` **OR** \`\`${prefix}id <mention>\`\` 『لرؤية جميع المعلومات عنك وعن الاخرين』

【6】 \`\`${prefix}voice-online\`\` 『لرؤية اسماء المتواجدين بالصوت』

⫸【7】 \`\`${prefix}myid\`\` 『لرؤية الايدي الخاص بحسابك』

⫸【8】 \`\`${prefix}avatar\`\` **OR** \`\`${prefix}avatar <mention>\`\` 『لرؤية صورة البروفايل حقك او حق الاخرين』

⫸【9】 \`\`${prefix}ping\`\` 『لمعرفة شروط السرفايفل وكيفية الدخول』

:joystick: **اوامر الالعاب**

⫸【1】 \`\`${prefix}لغز\`\`

⫸【2】 \`\`${prefix}فكك\`\`

⫸【3】 \`\`${prefix}اسرع-كتابة\`\`

⫸【4】 \`\`${prefix}ايموجي\`\`

⫸【5】 \`\`${prefix}علم\`\`

⫸【6】 \`\`${prefix}رياضيات\`\`

⫸【7】 \`\`${prefix}points\`\` **OR** \`\`${prefix}points <mention>\`\` 『لرؤية نقاطك او نقاط اشخاص اخرين باللعبه』

:name_badge: **اوامر الستاف**

⫸【1】 \`\`${prefix}warn <mention> <reason>\`\` 『لاعطاء شخص تحذير』

⫸【2】 \`\`${prefix}warns <mention>\`\` 『لمعرفة عدد التحذيرات لدى الشخص』

⫸【3】 \`\`${prefix}say <somewords>\`\` 『لجعل البوت يتكلم عنك』

⫸【4】 \`\`${prefix}clear <number>\`\` 『لمسح الشات بعدد』

**◄════════════► [ Z-Games ] ◄════════════►**`);
		message.reply('**شوف الخاص :envelope_with_arrow:**').then(msg => msg.delete(3000));
		message.delete();
	};
    if(command == prefix + 'help-admin') {
		message.author.send(`
**◄════════════► [ Z-Games ] ◄════════════►**

:dividers: **الاوامر العامة**

⫸【1】 \`\`${prefix}sug <Your Sug>\`\` 『لارسال اقتراحك الى روم الاقتراحات』

⫸【2】 \`\`${prefix}survival\`\` 『لمعرفة شروط السرفايفل وكيفية الدخول』

⫸【3】 \`\`${prefix}find <someone>\`\` 『للبحث عن الاعضاء الذين يوجد في اسمائهم الحروف التي كتبتها』

⫸【4】 \`\`${prefix}discrim\`\` **OR** \`\`${prefix}disscrim 9999\`\` <- (_example_) 『للبحث عن الاعضاء الذين لديهم التاق حقك 』

⫸【5】 \`\`${prefix}id\`\` **OR** \`\`${prefix}id <mention>\`\` 『لرؤية جميع المعلومات عنك وعن الاخرين』

【6】 \`\`${prefix}voice-online\`\` 『لرؤية اسماء المتواجدين بالصوت』

⫸【7】 \`\`${prefix}myid\`\` 『لرؤية الايدي الخاص بحسابك』

⫸【8】 \`\`${prefix}avatar\`\` **OR** \`\`${prefix}avatar <mention>\`\` 『لرؤية صورة البروفايل حقك او حق الاخرين』

⫸【9】 \`\`${prefix}ping\`\` 『لمعرفة شروط السرفايفل وكيفية الدخول』

:joystick: **اوامر الالعاب**

⫸【1】 \`\`${prefix}لغز\`\`

⫸【2】 \`\`${prefix}فكك\`\`

⫸【3】 \`\`${prefix}اسرع-كتابة\`\`

⫸【4】 \`\`${prefix}ايموجي\`\`

⫸【5】 \`\`${prefix}علم\`\`

⫸【6】 \`\`${prefix}رياضيات\`\`

⫸【7】 \`\`${prefix}points\`\` **OR** \`\`${prefix}points <mention>\`\` 『لرؤية نقاطك او نقاط اشخاص اخرين باللعبه』

:name_badge: **اوامر الستاف**

⫸【1】 \`\`${prefix}warn <mention> <reason>\`\` 『لاعطاء شخص تحذير』

⫸【2】 \`\`${prefix}warns <mention>\`\` 『لمعرفة عدد التحذيرات لدى الشخص』

⫸【3】 \`\`${prefix}say <somewords>\`\` 『لجعل البوت يتكلم عنك』

⫸【4】 \`\`${prefix}clear <number>\`\` 『لمسح الشات بعدد』

:crown: **الاوامر الادارية**

⫸【1】 \`\`${prefix}server\`\` 『لرؤية جميع المعلومات عن السيرفر』

⫸【2】 \`\`${prefix}bot\`\` 『لرؤية جميع المعلومات عن البوت』

⫸【3】 \`\`${prefix}warn-staff <mention> <reason>\`\` 『لاعطاء ستاف تحذير』

⫸【4】 \`\`${prefix}warns-staff <mention>\`\` 『لمعرفة عدد التحذيرات لدى الستاف』

⫸【5】 \`\`${prefix}setname <new name>\`\` 『لتغيير اسم البوت』

⫸【6】 \`\`${prefix}setavatar <link>\`\` 『لتغيير صورة البوت』

⫸【7】 \`\`${prefix}setplay <playing>\`\` 『لتغيير حالة لعب البوت』

⫸【8】 \`\`${prefix}setlisten <listening>\`\` 『لتغيير حالة سمع البوت』

⫸【9】 \`\`${prefix}setwatch <watching>\`\` 『لتغيير حالة مشاهدة البوت』

⫸【10】 \`\`${prefix}setstream <streaming>\`\` 『لتغيير حالة بث البوت』

⫸【11】 \`\`${prefix}bc <bc words>\`\` 『لارسال رسالة الى جميع اعضاء السيرفر』

**◄════════════► [ Heem-Games ] ◄════════════►**`);
		message.reply('**شوف الخاص :envelope_with_arrow:**').then(msg => msg.delete(3000));
		message.delete();
	};



// كود معلومات عن البوت
    if (command == prefix + 'bot') {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setTitle(`:page_with_curl: [**__${client.user.username}#${client.user.discriminator}__**] **معلومات عن بوت**`)
            .setThumbnail(client.user.avatarURL)
            .setColor('#36393e')
            .addField(':white_check_mark: **__البنق__**', `** ↝** [ **${client.pings[0]}ms** ]`, true)
            .addField(':white_check_mark: **__الذاكرة المستخدمة__**', `** ↝** [ **${(process.memoryUsage().rss / 1048576).toFixed()}MB** ]`, true)
			.addField(':white_check_mark: **__تم انشاء البوت في__**', `** ↝** [ ${moment(client.user.createdAt).format('LLL')} ]`, true)
            .addField(':white_check_mark: **__عدد السيرفرات__**', `** ↝** [ **${client.guilds.size}** ]`, true)
            .addField(':white_check_mark: **__عدد الرومات__**', `** ↝** [ **${client.channels.size}** ]` , true)
            .addField(':white_check_mark: **__عدد الاعضاء__**',`** ↝** [ **${client.users.size}** ]` , true)
            .addField(':white_check_mark: **__تاق البوت__**', `** ↝** [ #**${client.user.discriminator}** ]` , true)
			.addField(':white_check_mark: **__البرفكس__**', `** ↝** [ **${prefix}** ]`, true)
            .addField(':white_check_mark: **__ايدي البوت__**', `**${client.user.id}**` , true)
            .setFooter(`This Bot was Developed For [${message.guild.name}]`, client.user.avatarURL)
			.setTimestamp()
    })
};



// كود معلومات السيرفر
	if(command == prefix + 'server') {
    let botCount = message.guild.members.filter(m=>m.user.bot).size
  	let memberCount = [message.guild.memberCount] - [botCount]
    message.guild.fetchBans().then(bans => {
      var bansSize = bans.size;
      var server = new Discord.RichEmbed()
      .setTitle(`:books: [ **__${message.guild.name}__** ] **معلومات عن سيرفر**`)
      .addField(`:crown: **__Server Owner__**`, `** ↝** [ ${message.guild.owner} ]`, true)
      .addField(`:id: **__Server ID__**`, `**${message.guild.id}**`, true)
      .addField(`:satellite: **__Server Type__**`, `** ↝** [ **${message.guild.region}** ]`, true)
      .addField(`:date: **__Server Created At__**`, `** ↝** [ **${moment(message.guild.createdAt).format("LL")}** ]`, true)
      .addField(`:first_place: **__Roles Amount__**`, `** ↝** [ **${message.guild.roles.size}** ]`, true)
      .addField(`:name_badge: **__Bans Amount__**`, `** ↝** [ **${bansSize}** ]`, true)
      .addField(`:bar_chart: **__Channels Amount__**`, `** ↝** [ **${message.guild.channels.size}** ]`, true)
      .addField(`:pencil: **__Categores Amount__**`, `** ↝** [ **${message.guild.channels.filter(m=>m.type == 'category').size}** ]`, true)
      .addField(`:pencil: **__Channels Text Amount__**`, `** ↝** [ **${message.guild.channels.filter(m=>m.type == 'text').size}** ]`, true)
      .addField(`:microphone2: **__Channels Voice Amount__**`, `** ↝** [ **${message.guild.channels.filter(m=>m.type == 'voice').size}** ]`, true)
	  .addField(`:zzz: **__AFK Channel__**`, `** ↝** [ **${message.guild.afkChannel || 'لا يوجد'}** ]`, true)
      .addField(`:robot: **__Bots Count__**`, `** ↝** [ **${botCount}** ]`, true)
      .addField(`:busts_in_silhouette: **__Members Count__**`, `** ↝** [ **${memberCount}** ]`, true)
	  .addField(`:green_heart: **__Online Members__**`, `** ↝** [ **${message.guild.members.filter(m=>m.presence.status == 'online').size}** ]`, true)
	  .addField(`:yellow_heart: **__Idle Members__**`, `** ↝** [ **${message.guild.members.filter(m=>m.presence.status == 'idle').size}** ]`, true)
	  .addField(`:red_circle: **__Dnd Members__**`, `** ↝** [**${message.guild.members.filter(m=>m.presence.status == 'dnd').size}** ]`, true)
	  .addField(`:black_circle: **__Offline Members__**`, `** ↝** [ **${message.guild.members.filter(m=>m.presence.status == 'offline').size}** ]`, true)
	  .addField(`:bust_in_silhouette: **__Last Member__**`, `** ↝** [ ${Array.from(message.channel.guild.members.values()).sort((a, b) => b.joinedAt - a.joinedAt).map(m => `<@!${m.id}>`).splice(0, 1)} ]`, true)
	  .setFooter(`This Bot was Developed For [${message.guild.name}]`, client.user.avatarURL)
	  .setTimestamp()
	  .setColor('#36393e')
	  .setThumbnail(client.user.avatarURL)
	  message.channel.send(server)
     })
    };



// كود الايدي
	var year = message.author.createdAt.getFullYear()
	var month = message.author.createdAt.getMonth()
	var day = message.author.createdAt.getDate()
	if(command == prefix + 'id') {
		if (args1 == '') {
			var z = message.author;
			var accountCreatedAt = ['** ↝** [ **' + moment(z.createdAt).format('D/M/YYYY h:mm a') + '** ]\n ↝ [ \`\`' + moment(z.createdAt).fromNow() + '\`\` ]']
			}else {
				var z = message.mentions.users.first();
				var accountCreatedAt = ['** ↝** [ **' + moment(z.createdAt).format('D/M/YYYY h:mm a') + '** ]\n ↝ [ \`\`' + moment(z.createdAt).fromNow() + '\`\` ]']
			}
			let d = z.createdAt;
			let n = d.toLocaleString();
			let x;
			let y;
			if (z.presence.game !== null) {
				y = `${z.presence.game.name}`;
				} else {
					y = ":zzz:";
				}
				if (z.bot) {
					var w = 'Bot';
					}else {
						var w = 'Member';
					}
					let idPlayer = new Discord.RichEmbed()
					.setColor('#36393e')
					.addField(':bust_in_silhouette: **__الاسم:__**', `** ↝** [ <@${z.id}> ]`, true)
					.addField(':id: **__الايدي:__**', `**${z.id}**`, true)
					.addField(':video_game: **__يلعب:__**', `** ↝** [ ${y} ]`, true)
					.addField(':red_circle: **__الحالة:__**', `** ↝** [ **${z.presence.status}** ]`, true)
					.addField(':robot: **__نوع الحساب:__**', `** ↝** [ **${w}** ]`, true)
					.addField(':hash: **__التاق حق الحساب:__**', `** ↝** [ **#${z.discriminator}** ]`,true)
					.addField(':calendar_spiral: **__تاريخ دخول الدسكورد:__**', `${accountCreatedAt}`, true)
					.addField(':spy: **__النك نيم:__**', `** ↝** [ **${z.nickname || 'لا يوجد'}** ]`, true)
					.setThumbnail(`${z.avatarURL}`)
					.setFooter(`This Bot was Developed For [ ${message.guild.name} ] .`, client.user.avatarURL)
					.setTimestamp()
					message.channel.send(idPlayer);
					if (!message) return message.reply('**لم اجد الشخص المطلوب**');
	};



// كود الساي
	if(command == prefix + 'say') {
		if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('\`\`MANAGE_MESSAGES\`\` **انت لا تمتلك صلاحية**').then(msg => msg.delete(3000));
		if(!args1) return;
	var say = new Discord.RichEmbed()
	.setDescription(`**${args1}**`)
	.setColor('#36393e')
	message.channel.send(say);
	message.delete();
	};



// كود السرفايفل
	if(command == prefix + 'survival') {
		if(args1) return;
		message.author.send(':no_entry: **قوانين دخول سيرفر السرفايفل** :no_entry: \n\n**- 1 ?** ۏ㡇ԊϏȣ ȡ戟 Ȧ 䧏Ȋ ȡܔ 䌡 ȟԑȭ \n**- 2 ?** ۏ㡇┈ 爡Պ㡜n**- 3 ?** ۏ㡇⋎ҭȠۡ졇√ׇ`\n\n**Version ?** 1.13 \n**࠭ޭɠȡЎ硠ȡ졓Ѡȡԑއ** \n**ˑ獠ȡ졑磠ȡȦȣѠ狟ˈ** \n*survival join ȓ䟠ɣȭ堑ȝʠ\n**狤˙Ѡȡҏ** \n\n**ȐǠˣ ҝן 䤤皠˓筪* \n*survival join \n**䒥 ̇宥 爡ǠԊĎР爑䪪')
		message.reply('**شوف الخاص :envelope_with_arrow:**').then(msg => msg.delete(5000))
		message.delete();
	};
	if(command == prefix + 'survival-dc') {
		if(message.author.id !== '492552276326481930') return message.reply('**هذا الامر فقط لاونر سيرفر السرفايفل**');
		if(!muf) return message.reply('**منشن الشخص**');
		if(!cooldownSurvival.has(muf.id)) return message.channel.send(`<@${muf.id}> Is not found in **Cooldown.**`);
		
		cooldownSurvival.delete(muf.id);
		message.reply(`Successfully remove <@${muf.id}> from **Cooldown**`);
	}



// كود الافاتار
    if(command == prefix + 'avatar') {
		var msg1;
		if(muf) {
			var msg1 = muf;
			}else {
				var msg1 = message.author;
			}
			
			var avatarImage = new Discord.RichEmbed()
			.setColor('#36393e')
			.setTitle(`:white_check_mark: <@${msg1.id}>'s **Avatar:**`)
			.setImage(`${msg1.avatarURL}`)
			.setTimestamp()
			.setFooter(msg1.tag, msg1.avatarURL)
			
			message.channel.send(avatarImage);
	};



// كود مسح الشات
    if(command == prefix + 'clear') {
		if(message.author.bot) return;
		if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('\`\`MANAGE_MESSAGES\`\` **انت لا تمتلك ��لاحية**').then(msg => msg.delete(5000));
		if(args1 > 100) return message.reply('**الرجاء اختيار رقم من 2 الى 100**').then(msg => msg.delete(3000));
		if(args1 < 2) return message.reply('**الرجاء اختيار رقم من 2 الى 100**').then(msg => msg.delete(3000));
		if(isNaN(args1)) return message.reply('**الرجاء اختيار رقم من 2 الى 100**').then(msg => msg.delete(3000));

		message.channel.bulkDelete(args1);
        message.reply(`**( ${args1} ) عدد الرسائل التي تم مسحها**`).then(m => m.delete(3000));
	};



// كود البحث عن الاعضاء
  if(command == prefix + 'find') {
    let size = 1;
    if(message.author.bot) return;
	if(!message.guild.member) return;
    if(!args1) return message.channel.send(`** ↝ Useage:** ${prefix}find (اي حرف من الاسم الي تبيه)`);

      var playersFind = new Discord.RichEmbed()
      .setTitle(`:white_check_mark: **كود البحث عن الاعضاء بواسطة الاسم**`)
      .setThumbnail(client.user.avatarURL)
      .setDescription(`**\n ↝ البحث عن الاعضاء الموجود بداخل اسمائهم:**\n " ${args1} "\n\n** ↝ عدد الاعضاء:**\n " ${message.guild.members.filter(m=>m.user.username.toUpperCase().includes(args1.toUpperCase())).size} "\n\n\`\`\`════════════════════════════════════════════════════════════════════════════════════════\n\n${message.guild.members.filter(m=>m.user.username.toUpperCase().includes(args1.toUpperCase())).map(m=>size++ + '. ' + m.user.tag).slice(0,20).join('\n') || 'لا يوجد اعضاء بهذه الاحرف'}\n\n════════════════════════════════════════════════════════════════════════════════════════\`\`\``)
      .setColor('#36393e')
      .setTimestamp()
      .setFooter(message.author.tag, message.author.avatarURL)

      message.channel.send(playersFind);
      message.delete();
  };
// كود الدسكريم
  if(command == prefix + 'discrim') {
    let size = 1;
    if(message.author.bot) return;
	if(!message.guild.member) return;
	
	if(args1 == '') {
		var tagPlayer = message.author.discriminator;
	}else {
		var tagPlayer = args1;
		if(isNaN(args1)) return message.channel.send(`** ↝ Useage:** ${prefix}discrim Or ${prefix}discrim 0001 <- (example)`);
		if(args1.length != 4) return message.reply('**يجب ان يتكون التاق من 4 ارقام**');
	}

      var playersFind = new Discord.RichEmbed()
      .setTitle(`:white_check_mark: **كود البحث عن الاعضاء بواسطة التاق**`)
      .setThumbnail(client.user.avatarURL)
      .setDescription(`**\n ↝ البحث عن الاعضاء الذين لديهم التاق التالي:**\n " #${tagPlayer} "\n\n** ↝ عدد الاعضاء:**\n " ${client.users.filter(m=>m.discriminator == tagPlayer).size} "\n\n\`\`\`════════════════════════════════════════════════════════════════════════════════════════\n\n${client.users.filter(m=>m.discriminator == tagPlayer).map(m=>size++ + '. ' + m.tag).slice(0,20).join('\n') || ' لا يوجد اعضاء بهذه الارقام'}\n\n════════════════════════════════════════════════════════════════════════════════════════\`\`\``)
      .setColor('#36393e')
      .setTimestamp()
      .setFooter(message.author.tag, message.author.avatarURL)

      message.channel.send(playersFind);
      message.delete();
  };



	if(command == prefix + 'bc') {
		if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('\`\`ADMINISTRATOR\`\` **انت لا تمتلك صلاحية**')
		if(!args1) return message.channel.send(`** ↝ Useage:** ${prefix}bc (كلامك)`);

		let bcSure = new Discord.RichEmbed()
		.setTitle(`:mailbox_with_mail: **هل انت متأكد انك تريد ارسال هذه الرسالة الى** ${message.guild.memberCount} **عضو؟**`)
		.setThumbnail(client.user.avatarURL)
		.setColor('#36393e')
		.setDescription(`**\n:envelope:  ↝ الرسالة**\n\n${args1}`)
		.setTimestamp()
		.setFooter(message.author.tag, message.author.avatarURL)

		message.channel.send(bcSure).then(msg => {
			msg.react('✅').then(() => msg.react('❎'));
			message.delete();


			let yesEmoji = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
			let noEmoji = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;

			let sendBC = msg.createReactionCollector(yesEmoji);
			let dontSendBC = msg.createReactionCollector(noEmoji);

			sendBC.on('collect', r => {
				message.guild.members.forEach(member => {
					member.send(args1.replace(`[user]`, member)).catch();
					if(message.attachments.first()){
						member.sendFile(message.attachments.first().url).catch();
					}
				})
				message.channel.send(`:timer: **يتم الان الارسال الى** \`\`${message.guild.memberCount}\`\` **عضو**`).then(msg => msg.delete(5000));
				msg.delete();
			});
			dontSendBC.on('collect', r => {
				msg.delete();
				message.reply(':white_check_mark: **تم الغاء رسالتك**').then(msg => msg.delete(5000));
			});
		})
	};


// كود myid
    if(command == prefix + 'myid') {
		
		let embedID = new Discord.RichEmbed()
		.setDescription(`<@${message.author.id}>'s ID: **${message.author.id}**`)
		
		message.channel.send(embedID);
	};
	
	
	
	if(message.channel.type === 'dm') {
		
		let dirctMessageBot = new Discord.RichEmbed()
		.setTitle('**[BOT DIRECT]** Direct Message To The Bot')
		.addField(`Sent By:`, `<@${message.author.id}>`)
		.setColor('RANDOM')
		.setThumbnail(message.author.avatarURL)
		.addField(`Message: `, `\n\n\`\`\`${message.content}\`\`\``)
		.setTimestamp()
		.setFooter(message.author.tag, message.author.avatarURL)
		
		client.users.get('502437783651090432').send(dirctMessageBot);
	};
	
	
	
// كود معلومات الانفايت
	if(command == prefix + 'invite-info') {
		let oi = message.mentions.users.first() ? message.mentions.users.first().id : message.author.id;
		let Tag = message.mentions.users.first() ? message.mentions.users.first().tag : message.author.tag;
		let Username = message.mentions.users.first() ? message.mentions.users.first().username : message.author.username;
		let Avatar = message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL;
		
		message.guild.fetchInvites().then(invs => {
			let member = client.guilds.get(message.guild.id).members.get(oi);
			let personalInvites = invs.filter(i => i.inviter.id === oi);
			let urll = invs.filter(i => i.inviter.id === oi);
			let link = urll.reduce((p , v) => v.url +` , Total de membros recrutados no convite: ${v.uses}.\n`+ p, `\nServidor: ${message.guild.name} \n `);
			let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
			let inviteCode = personalInvites.reduce((p, v) => v.code);
			let possibleInvites = [['Total de membros recrutados:']];
			possibleInvites.push([inviteCount, inviteCode]);
			let user = message.mentions.users.first() || message.author;
			let mem = message.guild.member(user);
			let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
			let daysJoined = millisJoined / 1000 / 60 / 60 / 24;
			
			var inviteInfo = new Discord.RichEmbed()
			.setTitle(`:incoming_envelope: **[INVITE INFO]** ${Username}`)
			.setThumbnail(client.user.avatarURL)
			.addField('**الدعوات**', `** ↝** [ شخص **${Number(inviteCount)}** ]`)
			.addField('**تم الانضمام للسيرفر من**', `** ↝** [ يوم **${daysJoined.toFixed(0)}** ]`)
			.addField('**رابط دعوة الانضمام**', `** ↝** [ **https://discord.gg/${inviteCode || 'Zm2U6we'}** ]`)
			.setColor('#36393e')
			.setTimestamp()
			.setFooter(Tag, Avatar)
			
			message.channel.send(inviteInfo);
			});
	};



// كود الفويس اونلاين
	if(command == prefix + 'voice-online') {
		let size = 1;

		let voiceOnline = new Discord.RichEmbed()
		.setTitle(':white_check_mark: **امر الفويس اونلاين**')
		.setThumbnail(client.user.avatarURL)
		.setColor('#36393e')
		.setDescription(`**\n ↝ عدد المتواجدين صوت**\n" ${message.guild.members.filter(member => member.voiceChannel).size} "\n\n\`\`\`════════════════════════════════════════════════════════════════════════════════════════\n\n${message.guild.members.filter(m=>m.voiceChannel).map(m=>size++ + '. ' + m.user.tag).slice(0,20).join('\n')}\n\n════════════════════════════════════════════════════════════════════════════════════════\`\`\``)
		.setTimestamp()
		.setFooter(message.author.tag, message.author.avatarURL)
		
		message.channel.send(voiceOnline);
	};



// الالعاب
	if(!games[message.author.id]) games[message.author.id] = {
		laz: 0,
		fkk: 0,
		fast: 0,
		emoji: 0,
		flag: 0,
		math: 0,
	};
	
	if(command == prefix + 'لغز') {
		let type = require('./qlaz.json');
		let item = type[Math.floor(Math.random() * type.length)];
		let filter = response => {
		return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
		};
		var lazPoints = games[message.author.id].laz;
		var fkkPoints = games[message.author.id].fkk;
		var fastPoints = games[message.author.id].fast;
		var emojiPoints = games[message.author.id].emoji;
		var flagPoints = games[message.author.id].flag;
		var mathPoints = games[message.author.id].math;
		var allPoints = lazPoints + fkkPoints + fastPoints + emojiPoints + flagPoints + mathPoints;
		
		if(cooldownGames.has(message.author.id)) return message.reply('**جاوب على السؤال اولا**');
		cooldownGames.add(message.author.id);
		
		let qLaz = new Discord.RichEmbed()
		.setTitle('')
		.setDescription(`اسرع واحد يقوم بحل اللغز التالي:\n\n ↝ **${item.type}**`)
		.setThumbnail(client.user.avatarURL)
		.setColor('#36393e')
		.setTimestamp()
		.setFooter(``)
		
		message.channel.send(qLaz).then(() => {
			message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
			.then((collected) => {
				let won = collected.first().author;
				message.channel.send(`${collected.first().author} ✅ \`\`${allPoints + 1}\`\` لقد قمت بحل اللغز بالوقت المناسب, **مجموع نقاطك**`);
				games[won.id].laz++;
				cooldownGames.delete(message.author.id);
				fs.writeFile("./games/games.json", JSON.stringify(games), (err) => {
					if(err) console.error(err)
				})
			})
			.catch(collected => {
				message.channel.send(`:x: **لم يقم احد بحل اللغز بالوقت المناسب**`);
				cooldownGames.delete(message.author.id);
			})
		})
	}
	if(command == prefix + 'فكك') {
		let type = require('./qfkk.json');
		let item = type[Math.floor(Math.random() * type.length)];
		let filter = response => {
		return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
		};
		var lazPoints = games[message.author.id].laz;
		var fkkPoints = games[message.author.id].fkk;
		var fastPoints = games[message.author.id].fast;
		var emojiPoints = games[message.author.id].emoji;
		var flagPoints = games[message.author.id].flag;
		var mathPoints = games[message.author.id].math;
		var allPoints = lazPoints + fkkPoints + fastPoints + emojiPoints + flagPoints + mathPoints;
		
		if(cooldownGames.has(message.author.id)) return message.reply('**جاوب على السؤال اولا**');
		cooldownGames.add(message.author.id);
		
		let qFkk = new Discord.RichEmbed()
	  .setTitle('سؤال فكك') 
		.setDescription(`اسرع واحد يكتب الجملة التالية:\n\n ↝ **${item.type}**`)
		.setThumbnail(client.user.avatarURL)
		.setColor('#36393e')
		.setTimestamp()
		.setFooter('')
		
		message.channel.send(qFkk).then(() => {
			message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
			.then((collected) => {
				let won = collected.first().author;
				message.channel.send(`${collected.first().author} ✅ \`\`${allPoints + 1}\`\` لقد قمت بتفكيك الكلمة بالوقت المناسب، **مجموع نقاطك**`);
				games[won.id].fkk++;
				cooldownGames.delete(message.author.id);
				fs.writeFile("./games/games.json", JSON.stringify(games), (err) => {
					if(err) console.error(err)
				})
			})
			.catch(collected => {
				message.channel.send(`:x: **لم يقم احد بتفكيك الكلمة بالوقت المناسب**`);
				cooldownGames.delete(message.author.id);
			})
		})
	}
	if(command == prefix + 'اسرع') {
		let type = require('./qfast.json');
		let item = type[Math.floor(Math.random() * type.length)];
		let filter = response => {
		return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
		};
		var lazPoints = games[message.author.id].laz;
		var fkkPoints = games[message.author.id].fkk;
		var fastPoints = games[message.author.id].fast;
		var emojiPoints = games[message.author.id].emoji;
		var flagPoints = games[message.author.id].flag;
		var mathPoints = games[message.author.id].math;
		var allPoints = lazPoints + fkkPoints + fastPoints + emojiPoints + flagPoints + mathPoints;
		
		if(cooldownGames.has(message.author.id)) return message.reply('**جاوب على السؤال اولا**');
		cooldownGames.add(message.author.id);
		
		let qFast = new Discord.RichEmbed()
		.setTitle('سؤال سرعة')
		// .setDescription(`اسرع واحد يكتب الجملة التالية:\n\n ↝ **${item.type}**`)
		.addField("اسرع واحد يكتب الجملة التالية", item.type)
		.setThumbnail(client.user.avatarURL)
		.setColor('#36393e')
		.setTimestamp()
		.setFooter(`${message.author.tag} تم الطلب بواسطة `)
		
		message.channel.send(qFast).then(() => {
			message.channel.awaitMessages(filter, { maxMatches: 1, time: 10000, errors: ['time'] })
			.then((collected) => {
				let won = collected.first().author;
				message.channel.send(`${collected.first().author} ✅ \`\`${allPoints + 1}\`\` لقد قمت بكتابة الجملة بالوقت المناسب، **مجموع نقاطك**`);
				games[won.id].fast++;
				cooldownGames.delete(message.author.id);
				fs.writeFile("./games/games.json", JSON.stringify(games), (err) => {
					if(err) console.error(err)
				})
			})
			.catch(collected => {
				message.channel.send(`:x: **لم يقم احد بكتابة الجملة بالوقت المناسب**`);
				cooldownGames.delete(message.author.id);
			})
		})
	}
	if(command == prefix + 'ايموجي') {
		let type = require('./qemoji.json');
		let item = type[Math.floor(Math.random() * type.length)];
		let filter = response => {
		return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
		};
		var lazPoints = games[message.author.id].laz;
		var fkkPoints = games[message.author.id].fkk;
		var fastPoints = games[message.author.id].fast;
		var emojiPoints = games[message.author.id].emoji;
		var flagPoints = games[message.author.id].flag;
		var mathPoints = games[message.author.id].math;
		var allPoints = lazPoints + fkkPoints + fastPoints + emojiPoints + flagPoints + mathPoints;
		
		if(cooldownGames.has(message.author.id)) return message.reply('**جاوب على السؤال اولا**');
		cooldownGames.add(message.author.id);
		
		let qEmoji = new Discord.RichEmbed()
		.setTitle('')
		.setDescription(`اسرع واحد يقوم بكتابة اسم الايموجي التالي:`)
		.setImage(item.type)
		.setThumbnail(client.user.avatarURL)
		.setColor('#36393e')
		.setTimestamp()
		.setFooter('')
		
		message.channel.send(qEmoji).then(() => {
			message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
			.then((collected) => {
				let won = collected.first().author;
				message.channel.send(`${collected.first().author} ✅ \`\`${allPoints + 1}\`\` لقد قمت بكتابة اسم الايموجي بالوقت المناسب، **مجموع نقاطك**`);
				games[won.id].emoji++;
				cooldownGames.delete(message.author.id);
				fs.writeFile("./games/games.json", JSON.stringify(games), (err) => {
					if(err) console.error(err)
				})
			})
			.catch(collected => {
				message.channel.send(`:x: **لم يقم احد بكتابة اسم الايموجي بالوقت المناسب**`);
				cooldownGames.delete(message.author.id);
			})
		})
	}
	if(command == prefix + 'علم') {
		let type = require('./qflag.json');
		let item = type[Math.floor(Math.random() * type.length)];
		let filter = response => {
		return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
		};
		var lazPoints = games[message.author.id].laz;
		var fkkPoints = games[message.author.id].fkk;
		var fastPoints = games[message.author.id].fast;
		var emojiPoints = games[message.author.id].emoji;
		var flagPoints = games[message.author.id].flag;
		var mathPoints = games[message.author.id].math;
		var allPoints = lazPoints + fkkPoints + fastPoints + emojiPoints + flagPoints + mathPoints;
		
		if(cooldownGames.has(message.author.id)) return message.reply('**جاوب على السؤال اولا**');
		cooldownGames.add(message.author.id);
		
		let qFlag = new Discord.RichEmbed()
		.setTitle('')
		.setDescription(`اسرع واحد يقوم بكتابة اسم العلم التالي:`)
		.setImage(item.type)
		.setThumbnail(client.user.avatarURL)
		.setColor('#36393e')
		.setTimestamp()
		.setFooter(``)
		
		message.channel.send(qFlag).then(() => {
			message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
			.then((collected) => {
				let won = collected.first().author;
				message.channel.send(`${collected.first().author} ✅ \`\`${allPoints + 1}\`\` لقد قمت بكتابة اسم العلم بالوقت المناسب، **مجموع نقاطك**`);
				games[won.id].flag++;
				cooldownGames.delete(message.author.id);
				fs.writeFile("./games/games.json", JSON.stringify(games), (err) => {
					if(err) console.error(err)
				})
			})
			.catch(collected => {
				message.channel.send(`:x: **لم يقم احد بكتابة اسم العلم بالوقت المناسب**`);
				cooldownGames.delete(message.author.id);
			})
		})
	}
	if(command == prefix + 'رياضيات') {
		let type = require('./qmath.json');
		let item = type[Math.floor(Math.random() * type.length)];
		let filter = response => {
		return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
		};
		var lazPoints = games[message.author.id].laz;
		var fkkPoints = games[message.author.id].fkk;
		var fastPoints = games[message.author.id].fast;
		var emojiPoints = games[message.author.id].emoji;
		var flagPoints = games[message.author.id].flag;
		var mathPoints = games[message.author.id].math;
		var allPoints = lazPoints + fkkPoints + fastPoints + emojiPoints + flagPoints + mathPoints;
		
		if(cooldownGames.has(message.author.id)) return message.reply('**جاوب على السؤال اولا**');
		cooldownGames.add(message.author.id);
		
		let qMath = new Discord.RichEmbed()
		.setTitle('')
		.setDescription(`اسرع واحد يحسب المعادلة التالية:\n\n ↝ **${item.type}**`)
		.setThumbnail(client.user.avatarURL)
		.setColor('#36393e')
		.setTimestamp()
		.setFooter(``)
		
		message.channel.send(qMath).then(() => {
			message.channel.awaitMessages(filter, { maxMatches: 1, time: 10000, errors: ['time'] })
			.then((collected) => {
				let won = collected.first().author;
				message.channel.send(`${collected.first().author} ✅ \`\`${allPoints + 1}\`\` **لقد قمت بحساب المعادلة بشكل صحيح بالوقت المناسب، مجموع نقاطك**`);
				games[won.id].math++;
				cooldownGames.delete(message.author.id);
				fs.writeFile("./games/games.json", JSON.stringify(games), (err) => {
					if(err) console.error(err)
				})
			})
			.catch(collected => {
				message.channel.send(`:x: **لم يقم احد بحساب المعادلة في الوقت المناسب**`);
				cooldownGames.delete(message.author.id);
			})
		})
	}
	if(command == prefix + 'نقاطي') {
		if(!games[message.author.id]) games[message.author.id] = {
			laz: 0,
			fkk: 0,
			fast: 0,
			emoji: 0,
			flag: 0,
			math: 0,
		};
		
		if(args1 == '') {
			var lazPoints = games[message.author.id].laz;
			var fkkPoints = games[message.author.id].fkk;
			var fastPoints = games[message.author.id].fast;
			var emojiPoints = games[message.author.id].emoji;
			var flagPoints = games[message.author.id].flag;
			var mathPoints = games[message.author.id].math;
			var allPoints = lazPoints + fkkPoints + fastPoints + emojiPoints + flagPoints + mathPoints;
			var playerName = message.author.tag;
			var playerAvatar = message.author.avatarURL;
		}else {
			if(!games[muf.id]) games[muf.id] = {
				laz: 0,
				fkk: 0,
				fast: 0,
				emoji: 0,
				flag: 0,
				math: 0,
			};
			
			var lazPoints = games[muf.id].laz;
			var fkkPoints = games[muf.id].fkk;
			var fastPoints = games[muf.id].fast;
			var emojiPoints = games[muf.id].emoji;
			var flagPoints = games[muf.id].flag;
			var mathPoints = games[muf.id].math;
			var allPoints = lazPoints + fkkPoints + fastPoints + emojiPoints + flagPoints + mathPoints;
			var playerName = muf.tag;
			var playerAvatar = muf.avatarURL;
		}
		
		let pointsPlayer = new Discord.RichEmbed()
		.setThumbnail(client.user.avatarURL)
		.setColor('#36393e')
		.setTitle(`**\n:crown: [ مجموع النقاط [ ${allPoints}\n**`)
		.addField('**نقاط لعبة الالغاز:**', ` ↝ [ **${lazPoints}** ] ↜`, true)
		.addField('**نقاط لعبة فكك:**', ` ↝ [ **${fkkPoints}** ] ↜`, true)
		.addField('**نقاط لعبة اسرع كتابة:**', ` ↝ [ **${fastPoints}** ] ↜`, true)
		.addField('**نقاط لعبة الايموجي:**', ` ↝ [ **${emojiPoints}** ] ↜`, true)
		.addField('**نقاط لعبة الاعلام:**', ` ↝ [ **${flagPoints}** ] ↜`, true)
		.addField('**نقاط في لعبة الحساب:**', ` ↝ [ **${mathPoints}** ] ↜`, true)
		.setTimestamp()
		.setFooter(playerName, playerAvatar)
		
		message.channel.send(pointsPlayer);
		
		fs.writeFile("./games/games.json", JSON.stringify(games), (err) => {
			if(err) console.error(err)
		});
	};
});

client.on('message', message => {
	var command = message.content.toLowerCase().split(" ")[0];
    if(command == prefix + 'sug') {
		if(message.author.bot) return;
		if(message.channel.type === 'dm') return;
		var member = message.author.id;
		var channel = message.guild.channels.find('name', '⫸【『الاقتراحات』】');
		if(!channel) return;
		var sug = message.content.split(' ').slice(1).join(' ');
        if(!sug) return message.channel.send(`** ↝ Useage:** ${prefix}sug <اقتراحك>`).then(msg => msg.delete(5000));
		message.delete();
		
		var sugDone = new Discord.RichEmbed()
		.setTitle(`**تم ارسال اقتراحك بنجاح ! شكرا على اقتراحك**`)
		.setColor('#36393e')
		.setThumbnail(client.user.avatarURL)
		.setDescription(`**\n ↝ اقتراحك هو**\n\n${sug}`)
		.setTimestamp()
		.setFooter(message.author.tag, message.author.avatarURL)
		
		var sugSure = new Discord.RichEmbed()
		.setThumbnail(client.user.avatarURL)
		.setTitle(`**هل انت متأكد من انك تريد ارسال اقتراحك ؟ معك دقيقة قبل الالغاء**`)
		.setDescription(`**\n ↝ اقتراحك هو**\n\n${sug}\n\n:white_check_mark: للارسال\n\n:negative_squared_cross_mark: للالغاء`)
		.setFooter(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
		.setTimestamp()
		.setColor('#36393e')
		message.channel.send(sugSure).then(msg => {
			msg.react('✅').then(() => msg.react('❎'))

let YesFilter = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
let NoFilter = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;

let Yes = msg.createReactionCollector(YesFilter, { time: 60000 });
let No = msg.createReactionCollector(NoFilter, { time: 60000 });

Yes.on("collect", r => {
	message.channel.send(sugDone).then(msg => msg.delete(6000));
	msg.delete();
	var newsug = new Discord.RichEmbed()
	.setTitle(`**:bell: اقــــــتـــراح جـــــديــــــد :bell:**`)
	.setDescription(`** ↝ من**\n<@${member}>\n\n** ↝ الاقتراح هو**\n\n${sug}`)
	.setFooter(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
	.setTimestamp()
	.setThumbnail(client.user.avatarURL)
	.setColor('#36393e')
	channel.send(newsug).then(message => {
		message.react('👍').then(() => message.react('👎'))
	})
})
No.on("collect", r => {
	message.reply('**:x: تم الغاء اقتراحك**').then(message => {message.delete(4000)})
	msg.delete();
})
   })
	}
});

client.on('message', message => {
	var command = message.content.toLowerCase().split(" ")[0];
	var mc = message.content.split(' ').slice(1).join(' ');
	var player = message.author.id;
	
	if(command == prefix + 'survival-join') {
		if(message.author.bot) return;
		if(message.channel.type === 'dm') return;
		if(!message.guild.channels.get('472937440454377472')) return;
		if(cooldownSurvival.has(message.author.id)) return message.reply('**لقد قمت بالتقديم مسبقا**');
		if(!mc) return message.channel.send(`** ↝ Useage:** ${prefix}survival-join <اسمك بماين كرافت>`).then(msg => msg.delete(5000));
		if(mc.length > 20) return message.reply('**هذا ليس اسم بماين كرافت**').then(msg => msg.delete(3000));
		if(mc.length < 3) return message.reply('**هذا ليس اسم بماين كرافت**').then(msg => msg.delete(3000));
		
		cooldownSurvival.add(message.author.id);
		
		var done = new Discord.RichEmbed()
		.setDescription(`**تم ارسال تقديمك بنجاح !**\n\n** ↝ اسمك بماين كرافت**\n[ ${mc} ]`)
		.setColor('#36393e')
		.setThumbnail(client.user.avatarURL)
		.setTimestamp()
		.setFooter(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL);

		var apply = new Discord.RichEmbed()
		.setThumbnail(client.user.avatarURL)
		.setDescription(`** ↝ الاسم**\n<@${player}>\n\n** ↝ الاسم بماين كرافت**\n[ ${mc} ]`)
		.setTimestamp()
		.setFooter(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)

		message.channel.send(done).then(msg => msg.delete(5000));
		message.guild.channels.get("472937440454377472").send(apply).then(msg => {
			msg.react('✅').then(() => msg.react('❎'))

			let YesFilter = (reaction, user) => reaction.emoji.name === '✅'  && user.id === ('282350776456839169');
			let NoFilter = (reaction, user) => reaction.emoji.name === '❎' && user.id === ('282350776456839169');

			let aceept = msg.createReactionCollector(YesFilter);
			let noaccept = msg.createReactionCollector(NoFilter);

noaccept.on('collect', r => {
	var survivalRole = message.guild.roles.find('name', '• Survival');
	if(message.member.roles.has('name', '• Survival')) {
		message.member.removeRole(survivalRole);
	}
	message.author.send('**لقد تم رفضك من سيرفر السرفايفل**');
	msg.delete();
	})

aceept.on('collect', r => {
	message.author.send('**لقد تم قبولك بسيرفر السرفايفل**\n\n** ↝ IP**: _217.195.190.59:25648_\n** ↝ Version**: _1.13_');
	var survivalRole = message.guild.roles.find('name', '• Survival');
	if(!survivalRole) return message.guild.owner.send(`\`\`• Survival\`\` **الرجاء صنع رتبة باسم**`);
	message.member.addRole(survivalRole);
			})
		})
	}
});

// عند مسح رساله او تعديلها
client.on('messageDelete', message => {
	if(message.author.bot) return;
	if(message.content.toUpperCase().startsWith(prefix || '#' || '!' || '->')) return;
	var MsgDelete = new Discord.RichEmbed()
	.setTitle(`:wastebasket: **[MESSAGE DELETE]**`)
	.setThumbnail(client.user.avatarURL)
	.setColor('#36393e')
	.setDescription(`**\n ↝ الاسم:**\n<@${message.author.id}>\n\n** ↝ الرسالة التي تم مسحها:**\n\`\`\`${message}\`\`\`\n** ↝ في روم:**\n${message.channel}`)
	.setTimestamp()
	.setFooter(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
	if(!message.guild.channels.find('name', 'Z-log')) return;
	message.guild.channels.find('name', 'Z-log').send(MsgDelete);
});

client.on('messageUpdate', (oldMessage, newMessage) => {
	if(newMessage.author.bot) return;
	var guild = newMessage.guild;
	const MsgEdit = new Discord.RichEmbed()
	.setTitle(`:gear: **[MESSAGE EDIT]**`)
	.setThumbnail(client.user.avatarURL)
	.setColor('#36393e')
	.setDescription(`**\n ↝ الاسم:**\n<@${newMessage.author.id}>\n\n** ↝ قبل التعديل:**\n\`\`\`${oldMessage}\`\`\`\n** ↝ بعد التعديل:**\n\`\`\`${newMessage}\`\`\`\n** ↝ في روم:**\n${newMessage.channel}`)
	.setTimestamp()
	.setFooter(`${newMessage.author.username}#${newMessage.author.discriminator}`, newMessage.author.avatarURL)
	if(!guild.channels.find('name', 'HeemGames-log')) return;
	guild.channels.find('name', 'HeemGames-log').send(MsgEdit);
});

// عند صناعة رتبه او مسحها
 client.on("roleCreate", rc => {
	 var channel = rc.guild.channels.find("name", "Z-log");
	 if(!channel) return;
	 rc.guild.fetchAuditLogs()
	 .then(logs => {
		 let user = logs.entries.first().executor.id
		 var roleCreate = new Discord.RichEmbed()
		 .setTitle(':white_check_mark: **[ROLE CREATE]**')
		 .setThumbnail(client.user.avatarURL)
		 .setDescription(`**\n ↝ اسم الرتبة:**\n\`\`${rc.name}\`\`\n\n** ↝ بواسطة:**\n<@${user}>`)
		 .setColor('#36393e')
		 .setTimestamp()
		 .setFooter(`This Bot was Developed For [ ${rc.guild.name} ]`, client.user.avatarURL)
		 
		 channel.send(roleCreate);
	 })
});

client.on("roleDelete", rd => {
	 var channel = rd.guild.channels.find("name", "Z-log");
	 if(!channel) return;
	 rd.guild.fetchAuditLogs()
	 .then(logs => {
		 let user = logs.entries.first().executor.id
		 var roleDelete = new Discord.RichEmbed()
		 .setTitle(':negative_squared_cross_mark: **[ROLE DELETE]**')
		 .setThumbnail(client.user.avatarURL)
		 .setDescription(`**\n ↝ اسم الرتبة:**\n\`\`${rd.name}\`\`\n\n** ↝ بواسطة:**\n<@${user}>`)
		 .setColor('#36393e')
		 .setTimestamp()
		 .setFooter(`This Bot was Developed For [ ${rd.guild.name} ]`, client.user.avatarURL)
		 
		 channel.send(roleDelete);
	 })
});

// عند صناعة روم او مسحه
client.on('channelCreate', cc => {
	if(!cc.guild) return;
	 var channel = cc.guild.channels.find('name', 'Z-log');
	 if(!channel) return;
	 cc.guild.fetchAuditLogs()
	 .then(logs => {
		 let user = logs.entries.first().executor.id
		 var channelCreate = new Discord.RichEmbed()
		 .setTitle(':white_check_mark: **[CHANNEL CREATE]**')
		 .setThumbnail(client.user.avatarURL)
		 .setDescription(`**\n ↝ اسم الروم:**\n<#${cc.id}>\n\n** ↝ بواسطة:**\n<@${user}>`)
		 .setColor('#36393e')
		 .setTimestamp()
		 .setFooter(`This Bot was Developed For [ ${cc.guild.name} ]`, client.user.avatarURL)
		 
		 channel.send(channelCreate);
	 })
});

client.on('channelDelete', dc => {
	 var channel = dc.guild.channels.find("name", "Z-log");
	 if(!channel) return;
	 dc.guild.fetchAuditLogs()
	 .then(logs => {
		 let user = logs.entries.first().executor.id
		 var channelDelete = new Discord.RichEmbed()
		 .setTitle(':negative_squared_cross_mark: **[CHANNEL DELETE]**')
		 .setThumbnail(client.user.avatarURL)
		 .setDescription(`**\n ↝ اسم الروم:**\n#${dc.name}\n\n** ↝ بواسطة:**\n<@${user}>`)
		 .setColor('#36393e')
		 .setTimestamp()
		 .setFooter(`This Bot was Developed For [ ${dc.guild.name} ]`, client.user.avatarURL)
		 
		 channel.send(channelDelete);
	 })
});

client.on('guildMemberAdd', member => {
	let botCount = member.guild.members.filter(m=>m.user.bot).size;
	let memberCount = member.guild.memberCount - botCount;
	let channelMC = member.guild.channels.get('473493833813065755');
	let channelBC = member.guild.channels.get('473516097359052800');
	
	if(channelMC) {
		channelMC.setName(`⟫『  ${memberCount} عدد الاعضاء 』⟪`);
	};
	if(channelBC) {
		channelBC.setName(`⟫『 ${botCount} عدد البوتات 』⟪`);
	};

    var memberjoin = new Discord.RichEmbed()
    .setTitle(`:arrow_right: **[JOIN MEMBER]**`)
    .setThumbnail(client.user.avatarURL)
    .setDescription(`**\n:tada: <@${member.user.id}> Joined The Server!\n\nMember Number: ${member.guild.memberCount}\n\n**`)
    .addField(':date: **تاريخ الدخول الى الدسكورد:**', `${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``, true)
    .addField(':date: **تاريخ الدخول الى السيرفر:**', `${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true)
    .setTimestamp()
    .setFooter(`${member.user.username}#${member.user.discriminator}`, member.user.avatarURL)
    if(!member.guild.channels.find('name', 'HeemGames-log')) return;
    member.guild.channels.find('name', 'HeemGames-log').send(memberjoin);
});



client.on('guildMemberRemove', member => {
	let botCount = member.guild.members.filter(m=>m.user.bot).size;
	let memberCount = member.guild.memberCount - botCount;
	let channelMC = member.guild.channels.get('473493833813065755');
	let channelBC = member.guild.channels.get('473516097359052800');
	
	if(channelMC) {
		channelMC.setName(`⟫『  ${memberCount} عدد الاعضاء 』⟪`);
	};
	if(channelBC) {
		channelBC.setName(`⟫『 ${botCount} عدد البوتات 』⟪`);
	};

	var memberleft = new Discord.RichEmbed()
	.setTitle(`:arrow_upper_left: **[LEFT MEMBER]**`)
	.setThumbnail(client.user.avatarURL)
	.setDescription(`**\n<@${member.user.id}> Leave The Server :broken_heart:\n**`)
	.setTimestamp()
	.setFooter(`${member.user.username}#${member.user.discriminator}`, member.user.avatarURL)
	
	if(!member.guild.channels.find('name', 'HeemGames-log')) return;
	member.guild.channels.find('name', 'HeemGames-log').send(memberleft);
});
   
   
      client.on("message", message => {
    if (message.content.toLowerCase() === prefix + "help") {
        message.delete(5000)
        if(!message.channel.guild) return;
        const e = new Discord.RichEmbed()
        .setColor('#36393e')
        .setTitle('Check Your DM’s | انظر الى الخاص')
     const embed = new Discord.RichEmbed()
         .setColor('#36393e')
         .setTitle('')
         .setURL('')
         .setDescription(`
 **                                                           

الأوامر | Commands

    البرفكس الخاص بالبوت [-] Bot Prefix

    لعرض النقاط الخاصة بك  [ -points - -نقاطي ] To display your points

    قائمة المتصدرين للسيرفر [ -top - -توب ] Guild Leaderboard    ( قريبا | Comming Soon )

    قائمة المتصدرين في كافة السيرفرات [ -gtop - -الأفضل ] Global Leaderboardoard    ( قريبا | Comming Soon )

    Number of games [ 10 ] عدد الألعاب

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

الألعاب

-فكك | -spelling

-اسرع كتابة | -fasttyping

-عواصم | -captials

-لغز | -puzzle

-سؤال | -question ( قريبا | Comming Soon )

-ايموجي | -emoji

-علم | -flags

-ترجم | -translate ( قريبا | Comming Soon )

-اعكس | -reverse  ( قريبا | Comming Soon )

-احسب | -maths

-انمي | -anime

-pubg | ببجي

  سيرفر الرئيسي | Offical Server [ <:globe_with_meridians:409259794554290177> ]

سيرفر الدعم الفني | Support Server [ <:support:494431949192953866> ]

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

-help-member | الأوامر العامة

-help-staff | اوامر الادارة

-help-admin | اوامر يلي معاهم ادمينيستريتر

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

-hastebin | يضع اي كلام تكتبه في موقع

-randomcolor | يعطيك لون عشوائي

-timer | مؤقت

-topic | يغير وصف الروم

-translate | مترجم | Example: -translate English Arabic Hi

-weather | حالة الجو في مدينة ما

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

     مبرمج البوت | Developers


[ <@502437783651090432> ]

© 2018 زي جيمز | Z Games

[ We will support fully English language Coming soon ]

 **
`)
   message.channel.send(e).then(m => m.delete(5000))
   message.author.sendEmbed(embed).catch(error => message.reply(':cry: Your DM’s is CLosed | خاصك مغلق :cry:'))
   
   }
   });
  

client.on('message', message =>{
    if(message.content === '-بنق'){
let start = Date.now(); message.channel.send('pong').then(message => { 
message.edit(`\`\`\`js
Time taken: ${Date.now() - start} ms
Discord API: ${client.ping.toFixed(0)} ms\`\`\``);
    });
    }
});




let points = JSON.parse(fs.readFileSync('./PL/plPTS.json', 'utf8')); 
client.on('message', message => { 
if (!points[message.author.id]) points[message.author.id] = { 
    points: 0, 
  }; 
if (message.content.startsWith(prefix + 'برامج')) { 
    if(!message.channel.guild) return message.reply('**:x: هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000)); 
const type = require('./PL/pl.json'); 
const item = type[Math.floor(Math.random() * type.length)]; 
const filter = response => { 
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase()); 
}; 
message.channel.send('**لديك 15 ثانيه لتعرف اسم أي برنامج .**').then(msg => { 
    
msg.channel.sendFile(`${item.image}`).then(() => { 
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] }) 
        .then((collected) => { 
        message.channel.send(`${collected.first().author} ✅ \`\`${allPoints + 1}\`\` لقد قمت بكتابة اسم البرنامج بالوقت المناسب, **مجموع نقاطك**`);
        console.log(`[Typing] ${collected.first().author} typed the word.`); 
            let userData = points[message.author.id]; 
            userData.points++; 
          }) 
          .catch(collected => { 
            message.channel.send(`**تم الانتهاء من الوقت  حظ اوفر المره القادمه :stopwatch: الاجابه هي : __${item.answers}__ **`); 
            console.log('[Typing] Error: No one type the word.'); 
          }) 
        }) 
    }) 
} 
}); 
    
client.on('message', message => { 
if (message.content.startsWith(prefix + 'points')) { 
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000)); 
    let userData = points[message.author.id]; 
    let embed = new Discord.RichEmbed() 
    .setAuthor(`${message.author.tag}`, message.author.avatarURL) 
    .setColor('#36393e') 
    .setDescription(`نقاطك: \`${userData.points}\``) 
    message.channel.sendEmbed(embed) 
  }   
  fs.writeFile("./PL/plPTS.json", JSON.stringify(points), (err) => { 
    if (err) console.error(err) 
  }) 
}); 
   

client.on('message', message => {
        if(message.content.startsWith(prefix + 'profile')) {
            let args = message.content.split(' ').slice(1).join(' ');
            if (!args) return message.channel.send("**Please provide a Minecraft username. ❌**");
            var link = (`https://blocksmc.com/player/${args}`);
            message.channel.send(link);
        }
    });

client.on('message', async msg => {
	if (msg.author.bot) return undefined;
	if (!msg.content.startsWith(prefix)) return undefined;
	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1] .replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);
	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)
	if (command === `play`) {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('يجب توآجد حضرتك بروم صوتي .');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
		}

		if (!permissions.has('EMBED_LINKS')) {
			return msg.channel.sendMessage("**يجب توآفر برمشن `EMBED LINKS`لدي **rl")
			}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id);
				await handleVideo(video2, msg, voiceChannel, true);
			}
			return msg.channel.send(` **${playlist.title}** تم الإضآفة إلى قأئمة التشغيل`);
		} else {
			try {

				var video = await youtube.getVideo(url);

			} catch (error) {
				try {
				    					    var fast = {};
					var videos = await youtube.searchVideos(searchString, 10);
					let index = 0;
					const embed1 = new Discord.RichEmbed()
			        .setDescription(`**الرجآء من حضرتك إختيآر رقم المقطع** :
${videos.map(video2 => `[**${++index}**] **${video2.title}**`).join('\n')}`)
					.setFooter(`${msg.guild.name}`)
					msg.channel.sendEmbed(embed1).then(message =>{

						message.delete(15000)

					});
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 20000,
							errors: ['time']
						})

						}catch(err) {
						console.error(err);
						return msg.channel.send('لم يتم إختيآر مقطع صوتي');
						}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send(':x: لا يتوفر نتآئج بحث ');
				}
		}

			return handleVideo(video, msg, voiceChannel);
		}
	} else if (command === `skip`) {
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لتجآوزه');
		serverQueue.connection.dispatcher.end('تم تجآوز هذآ المقطع');
		return undefined;
	} else if (command === `stop`) {
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لإيقآفه');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('تم إيقآف هذآ المقطع');
		return undefined;
	} else if (command === `vol`) {
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يوجد شيء شغآل.');
		if (!args[1]) return msg.channel.send(`:loud_sound: مستوى الصوت **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
		return msg.channel.send(`:speaker: تم تغير الصوت الي **${args[1]}**`);
	} else if (command === `np`) {
		if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
		const embedNP = new Discord.RichEmbed()
	.setDescription(`:notes: الان يتم تشغيل : **${serverQueue.songs[0].title}**`)
		return msg.channel.sendEmbed(embedNP);
	} else if (command === `replay`) {
		if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
		const embedNP = new Discord.RichEmbed()
	.setDescription(`سيتم اعاده تشغيل الفديو :**${serverQueue.songs[0].title}**`)
	msg.channel.send({embed: embedNP})
  	 return handleVideo(video, msg, msg.member.voiceChannel);

	} else if (command === `queue`) {
		if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
		let index = 0;
		const embedqu = new Discord.RichEmbed()
.setDescription(`**Songs Queue**
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}
**الان يتم تشغيل** ${serverQueue.songs[0].title}`)
		return msg.channel.sendEmbed(embedqu);
	} else if (command === `pause`) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('تم إيقاف الموسيقى مؤقتا!');
		}
		return msg.channel.send('لا يوجد شيء حالي ف العمل.');
	} else if (command === "resume") {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('استأنفت الموسيقى بالنسبة لك !');
		}
		return msg.channel.send('لا يوجد شيء حالي في العمل.');
	}

	return undefined;
async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`,
		time:`${video.duration.hours}:${video.duration.minutes}:${video.duration.seconds}`,
		eyad:`${video.thumbnails.high.url}`,
		best:`${video.channel.title}`,
		bees:`${video.raw.snippet.publishedAt}`,
		shahd:`${video.raw.kind}`,
		zg:`${video.raw.snippet.channelId}`,
        views:`${video.raw.views}`,
        like:`${video.raw.likeCount}`,
        dislike:`${video.raw.dislikeCount}`,
        hi:`${video.raw.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);
		queueConstruct.songs.push(song);
		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`لا أستطيع دخول هذآ الروم ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(` **${song.title}** تم اضافه الاغنية الي القائمة!`);
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);
	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
		fetchVideoInfo(`${song.hi}`, function (err,  idk) {
  if (err) throw new Error(err);
  console.log( idk);
  	  const yyyy = {}
  if(!yyyy[msg.guild.id]) yyyy[msg.guild.id] = {
    like: `${ idk.likeCount}`,
    dislike: `${ idk.dislikeCount}`
  }
	serverQueue.textChannel.send({embed : new Discord.RichEmbed()
  .setTitle(`**${ idk.title}**`)
  .setURL( idk.url)
  .addField('Time The Video :' , `${song.time}`, true)
  .addField('Channel Name :' , `${song.best}`, true)
  .addField('Channel ID :' , `${song.zg}`, true)
  .addField('Video Created at :' , `${ idk.datePublished}`, true)
  .addField('Views :' , `${ idk.views}`, true)
  .addField('Like👍 :' , `${ idk.likeCount}`, true)
  .addField('dislike👎 :' , `${ idk.dislikeCount}`, true)
  .addField('comments :' , `${ idk.commentCount}`, true)
	.setImage(`${song.eyad}`)
	.setThumbnail('http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg')
	.setColor('#ff0000')
	.setTimestamp()
	}).then(love => {
		love.react('👍').then(r=>{
		love.react('👎').then(r =>{
		love.react('🙌').then(r=> {
    let likee = (reaction, user) => reaction.emoji.name === '👍' && user.id === msg.author.id;
    let dislikee = (reaction, user) => reaction.emoji.name === '👎' && user.id === msg.author.id;
    let cnn = (reaction, user) => reaction.emoji.name === '🙌' && user.id === msg.author.id;

    let ll = love.createReactionCollector(likee , {max:5});
    let dd = love.createReactionCollector(dislikee , {max:5});
    let cn = love.createReactionCollector(cnn , {max:5});

		    ll.on("collect", r => {
		      yyyy[msg.guild.id].like++;
	love.edit({embed : new Discord.RichEmbed()
  .setTitle(`**${ idk.title}**`)
  .setURL( idk.url)
  .addField('Time The Video :' , `${song.time}`, true)
  .addField('Channel Name :' , `${song.best}`, true)
  .addField('Channel ID :' , `${song.zg}`, true)
  .addField('Video Created at :' , `${ idk.datePublished}`, true)
  .addField('Views :' , `${ idk.views}`, true)
  .addField('Like👍 :' , `${yyyy[msg.guild.id].like}`, true)
  .addField('dislike👎 :' , `${ idk.dislikeCount}`, true)
  .addField('comments :' , `${ idk.commentCount}`, true)
	.setImage(`${song.eyad}`)
	.setThumbnail('http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg')
	.setColor('#ff0000')
	.setTimestamp()
});
    })

    dd.on("collect", r => {
      yyyy[msg.guild.id].dislike++;
	love.edit({embed : new Discord.RichEmbed()
  .setTitle(`**${ idk.title}**`)
  .setURL( idk.url)
  .addField('Time The Video :' , `${song.time}`, true)
  .addField('Channel Name :' , `${song.best}`, true)
  .addField('Channel ID :' , `${song.zg}`, true)
  .addField('Video Created at :' , `${ idk.datePublished}`, true)
  .addField('Views :' , `${ idk.views}`, true)
  .addField('Like👍 :' , `${ idk.likeCount}`, true)
  .addField('dislike👎 :' , `${yyyy[msg.guild.id].dislike}`, true)
  .addField('comments :' , `${ idk.commentCount}`, true)
	.setImage(`${song.eyad}`)
	.setThumbnail('http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg')
	.setColor('#ff0000')
	.setTimestamp()
});
})
    cn.on("collect", r => {
	love.edit({embed : new Discord.RichEmbed()
  .setTitle(`**${ idk.title}**`)
  .setURL( idk.url)
  .addField('Time The Video :' , `${song.time}`, true)
  .addField('Channel Name :' , `${song.best}`, true)
  .addField('Channel ID :' , `${song.zg}`, true)
  .addField('Video Created at :' , `${ idk.datePublished}`, true)
  .addField('Views :' , `${ idk.views}`, true)
  .addField('Like👍 :' , `${ idk.likeCount}`, true)
  .addField('dislike👎 :' , `${ idk.dislikeCount}`, true)
  .addField('comments :' , `${ idk.commentCount}`, true)
	.setImage(`${song.eyad}`)
	.setThumbnail('http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg')
	.setColor('#ff0000')
	.setTimestamp()
});
})
})
})
})
})
})
}
});

client.login("NTUxMDM2MzUzNTM0NzU0ODI4.D3zvpQ.4-7i2pMUwrcCSDbsL0rXD3Vq_A4");