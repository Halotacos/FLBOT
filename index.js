const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const fs = require('fs');
const Discord = require('discord.js');
const { token } = require('./config.json');
const { prefix } = require('./botconfig.json');
const { playing } = require('./playing.json');
const snekfetch = require('snekfetch');
const botconfig = require('./botconfig.json');
const AcceptMessage = require('acceptmessage')
const Music = require('discord.js-musicbot-addon');
const Sequelize = require('sequelize');
const mysql = require('mysql');
const client = new Discord.Client();
client.commands = new Discord.Collection();

//var con = mysql.createConnection({
 // host: "76.205.161.214",
  //user: "test",
  //password: "admin",
  //database: "discord"
//});

//con.connect(err => {
  //if(err) throw err;
  //console.log("Connected To DB");
//});

//const sequelize = new Sequelize('discord', 'test', 'admin', {host:'76.205.161.214', port:'3306', dialect:'mysql'});
//const sequelize = new Sequelize('mysql://76.205.161.214:3306/discord',{ username:'test', password:'admin' });
//const sequelize = new Sequelize('fivem', 'admin', 'admin', {
  //host: '76.205.161.214:3360',
  //dialect: 'mysql',
  //operatorsAliases: false,
//});

//sequelize
  //.authenticate()
  //.then(() => {
   // console.log('Connection has been established successfully.');
 // })
  //.catch(err => {
   // console.error('Unable to connect to the database:', err);
  //});


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();
const dream = '493073032957394946';
const trim = (str, max) => (str.length > max) ? `${str.slice(0, max - 3)}...` : str;
          const randomColour = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
Music.start(client, {
  prefix: "~",
  maxQueueSize: "100",
  disableLoop: false,
  leaveHelp: "Bad help text.",
  playCmd: "play",
  playAlt: ["p"],
  searchCmd: "search",
  searchAlt: ["song-search"],
  pauseCmd: "pause",
  pauseAlt: ["stop"],
  resumeCmd: "resume",
  resumeAlt: ["play","restart"],
  queueCmd: "queue",
  queueAlt: ["q"],
  skipCmd: "skip",
  skipAlt: ["s"],
  enableQueueStat: true,
  requesterName: true,
  disableVolume: true,
  maxWait: 15000,
  clearCmd: "queue-clear",
  clearAlt: ["q-clear", "qc"],
  loopCmd: "repeat",
  loopAlt: ["loop"],
  leaveAlt: ["dis","d"],
  helpCmd: 'mhelp',
  leaveCmd: 'disconnect',
  ownerOverMember: true,
  botOwner: '275441172972044290',
  youtubeKey: (process.env.KEY),
  djRole: "DJ",
  thumbnailType: "high",
  global: false,
  embedColor: (randomColour),
  dateLocal: 'US',
  clearOnLeave: true
});
//console.log(Music.bot.commands);



client.on('ready', () => {
	console.log('Ready!');
  client.user.setUsername('NEP Bot');
	client.user.setActivity(`~help | Serving ${client.guilds.size} servers`, { type: 'WATCHING' });
	 console.log(`Ready to serve in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
});

client.on("guildCreate", async guild => {
  const ownerIDs = '275441172972044290'; 
  const invite = await guild.channels.first().createInvite({
    maxAge: 0
    
  })
  console.log(`Joined a new guild named: ${guild.name} with invite: https://discord.gg/${invite.code}`)
  ownerIDs.message.send(`Joined a new guild named: ${guild.name} with invite: https://discord.gg/${invite.code}`)
});

client.on('guildCreate', guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    client.user.setActivity(`~help | Serving ${client.guilds.size} servers`, { type: 'WATCHING' });
  const join = guild.channels.find(ch => ch.name === 'general');
  const retry = guild.channels.find(ch => ch.name === 'logs');
  const retry2 = guild.channels.find(ch => ch.name === 'botlogs');
  const gowner = guild.owner
  const botowner = client.id('275441172972044290');
      const botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setTitle('Thanks for Adding me!')
        .addField('Prefix','My prefix is the ~')
        .addField('Tools','help, ban, unban, kick, warn, prune, server,')
        .addField('Fun','support-nep, ping, play, search, repeat, disconnect, avatar, args-info, urban')
        .setTimestamp()
        .setFooter(`NEP bot: created by @NEP#3199`);
  if (!join && retry) {
  
    console.log(`Could not find general chat in server: ${guild.name}`);
    
    retry.send(botembed);
    
  } else if(!retry && join) {
  
    console.log(`Could not find logs chat in server: ${guild.name}`); 
    
    join.send(botembed);
    
  } else if (!retry && !join && retry2) {  
     console.log(`Could not find botlogs chat in server: ${guild.name}`); 
    
    retry2.send(botembed);
  
  } else if (!retry && !join && !retry2) {      
    
    gowner.send(botembed);
  } 

});
          
client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`~help | Serving ${client.guilds.size} servers`, { type: 'WATCHING' });
  
});
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'welcome');
   if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});

client.on('message', message => {
   
  
  if (!message.content.startsWith(prefix) || message.author.bot) return;  
  const ownerID = '275441172972044290'; 
  let has_kick = message.member.hasPermission("KICK_MEMBERS");
  let perms = message.member.permissions;
  

  
if (message.content.startsWith(prefix + "servers") || message.content.startsWith(prefix + "as")) {
    if (message.author.id !== ownerID) return message.channel.send("You are not authorized to use this command.");
    let string = '';

    client.guilds.forEach(guild => {
        string += '***Server Name:*** ' + guild.name + '\n' + '***Server ID:***` ' + guild.id + ' ` ' + '\n\n';

    })

    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .addField("Bot is On ", string)
        .setTimestamp()
        .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL);
    message.author.send(botembed);
}

	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type !== 'text') {
		return message.reply('I can\'t execute that command inside DMs!');
	}

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (!timestamps.has(message.author.id)) {
		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
	}
	else {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}

		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
	}
  
	try {
		command.execute(message, args);
	}
	catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
if (command === 'urban' || command === 'ud' || command === 'ubd') {
  if (!args.length) {
			return message.channel.send('You need to supply a search term!');
		}

		const { body } = await snekfetch.get('https://api.urbandictionary.com/v0/define').query({ term: args.join(' ') });

		if (!body.list.length) {
			return message.channel.send(`No results found for **${args.join(' ')}**.`);
		}

		const [answer] = body.list;

		const embed = new Discord.RichEmbed()
			.setColor('#EFFF00')
			.setTitle(answer.word)
			.setURL(answer.permalink)
			.addField('Definition', trim(answer.definition, 1024))
			.addField('Example', trim(answer.example, 1024))
			.addField('Rating', `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.`);

		message.channel.send(embed);
	}
});

client.login(process.env.TOKEN);
