
module.exports = {
	name: 'server-info',
  aliases: ['sinfo', 'server'],
	description: 'Display info about this server.',
  guildOnly: true,
	execute(message) {
    //message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    const Discord = require('discord.js');
    const sinfo = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setThumbnail(message.guild.iconURL)
    .setTitle('Server Info')
    .setAuthor('NEP Bot', 'https://cdn.discordapp.com/attachments/460993484162203649/493931942132187156/icon.png', 'https://www.discord.com')
    .setDescription('Here is the all the information I could get on the server.')
    .addField('Server name:',  `${message.guild.name}`)
    .addField('Total members:', `${message.guild.memberCount}`)
    .addField('Server created on:', `${message.guild.createdAt}`)
    .addField('Server owner:', `${message.guild.owner}`)
    .addField('Server region:', `${message.guild.region}`)
    .setTimestamp()
  .setFooter('© 2018 NEP', 'https://cdn.discordapp.com/attachments/460993484162203649/493947059276349450/image.jpg');
     message.channel.send(sinfo);
	},
};

