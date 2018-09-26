const Discord = require('discord.js');

const exampleEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle('Forbidden Love staff')
    .setAuthor('FL Bot', 'https://cdn.discordapp.com/attachments/460993484162203649/493931942132187156/icon.png', 'https://www.youtube.com/watch?v=wJnBTPUQS5A')
    .setDescription('Here is all of our staff.')
    .setThumbnail('https://cdn.discordapp.com/attachments/460993484162203649/493931942132187156/icon.png')
    .addField('Owner', '@Em 🥀#0323')
    .addField('Co-Owner', '@Sleepie ♥#3301')
    .addField('Head-Madmin', '@Lily#1606')
    .addField('Madmin', '@Brandon#4581 & @ChocoPudding#9452')
    .addField('Smol-Madmin', '@NEP#3199')
    .addField('ModSquad', '@Raishin#2140 & @Shadow.#4781 & @ＤＯＧＥ　ーし鬱#4278 & @ayetofu#1422')
    .addField('Smol-Mod', '@echooftheforest#7687 & @🌷Luna#5936')
    .setTimestamp()
    .setFooter('© 2018 NEP & Cupids arrow.', 'https://cdn.discordapp.com/attachments/460993484162203649/493931942132187156/icon.png');

    module.exports = {
    	name: 'staff',
      aliases: ['team', 'sl'],
    	description: 'Displays the Staff team.',
    	execute(message) {
    		message.channel.send(exampleEmbed);
        message.delete(10000)
  .then(msg => console.log(`Deleted message from ${msg.author.username}`))
  .catch(console.error);
    	},
    };
