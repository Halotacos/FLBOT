module.exports = {
	name: 'support-nep',
  aliases: ['sn', 'fund', 'paypal'],
	description: 'Link for supporting NEP',
	execute(message) {
		message.channel.send(NEP);
  },
};

const Discord = require('discord.js');
// inside a command, event listener, etc.
const NEP = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle('Support NEP')
    .setURL('https://www.paypal.me/NEPOfficial')
    .setAuthor('Fl Bot', 'https://cdn.discordapp.com/attachments/460993484162203649/493931942132187156/icon.png', 'https://www.paypal.me/NEPOfficial')
    .setDescription('Love NEP? Want to support his love of coding, and help him go to college? Well click the link to donate on PayPal! Patreon coming soon!')
    .setThumbnail('https://162787-524467-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/paypal-logo.jpg')
    .addField('Click here for the link', 'https://www.paypal.me/NEPOfficial')
    .setTimestamp()
  .setFooter('© 2018 NEP', 'https://cdn.discordapp.com/attachments/460993484162203649/493947059276349450/image.jpg');
