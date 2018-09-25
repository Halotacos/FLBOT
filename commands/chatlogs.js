module.exports = {
	name: 'chatlog',
	description: 'Link for the chatlog',
	execute(message) {
		message.channel.send(chatlog);
  },
};

const Discord = require('discord.js');
// inside a command, event listener, etc.
const chatlog = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle('Chat-Log')
    .setURL('https://halotacos.github.io/index.html')
    .setAuthor('CupidBot', 'https://cdn.discordapp.com/attachments/460993484162203649/493931942132187156/icon.png', 'https://halotacos.github.io/index.html')
    .setDescription('Here is the link to the Chat Log')
    .setThumbnail('https://cdn.discordapp.com/attachments/460993484162203649/493931942132187156/icon.png')
    .addField('Click here for the link', 'https://halotacos.github.io/index.html')
    .setTimestamp()
  .setFooter('© 2018 NEP & Cupids arrow.', 'https://cdn.discordapp.com/attachments/460993484162203649/493947059276349450/image.jpg');
