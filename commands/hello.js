const Discord = require('discord.js');
module.exports = {
	name: 'hello',
  aliases: ['hola', 'hoi'],
	description: 'HI!',
	description: 'lonely',
	execute(message) {
		let user = message.author
    const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
    const embed = new Discord.RichEmbed()
		.setColor(randomColor)
		.setThumbnail()
		.setTitle(`${user.username}`)
		.addField(`Hi, I'm NEP Bot`, ':smile:')
    .addField('I was made by @NEP#3199', 'Be sure to add him on Discord!')
    .addField('My Prefix is', '~')
	  .setTimestamp()
    .setFooter('© 2018 NEP', 'https://cdn.discordapp.com/attachments/460993484162203649/493947059276349450/image.jpg');
	  message.channel.send(embed);
  },
};


   