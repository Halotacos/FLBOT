const Discord = require('discord.js');
// inside a command, event listener, etc.



module.exports = {
	name: 'restart',
  aliases: ['reload'],
	description: 'Restarts the Bot.',
	args: false,
	execute(message) {
    if (message.author.id === '275441172972044290' || message.author.id === '269786554422132746') {
    const user = message.author
      const restart = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle('Bot Restarting')
    .setAuthor('NEP Bot', 'https://cdn.discordapp.com/attachments/460993484162203649/493947059276349450/image.jpg')
    .setDescription('Restart command ran!')
    .addField('Restart command activated by:', `${user}`)
    .addField('Please wait 10 seconds before calling on me', `${user}`)
    .setTimestamp()
  .setFooter('© 2018 NEP', 'https://cdn.discordapp.com/attachments/460993484162203649/493947059276349450/image.jpg');

      return message.author.send(restart)  
      	.then(() => {
      process.exit();
      })
    } else { 
      const nope = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle(`I don't think so.`)
    .setAuthor('NEP Bot', 'https://cdn.discordapp.com/attachments/460993484162203649/493947059276349450/image.jpg')
    .setDescription('Restart command ran!')
    .addField('You tried to run my restart command. But you are not NEP.', 'SCREEEEEE')
    .setTimestamp()
  .setFooter('© 2018 NEP', 'https://cdn.discordapp.com/attachments/460993484162203649/493947059276349450/image.jpg');
    message.channel.send(nope)    
    }
    },
};

