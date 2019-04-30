const Discord = require("discord.js");
const superagent = require("snekfetch");
module.exports =  {
	name: 'lewd',
	description: 'Lewd images',
	execute (message) {
    if (!message.channel.nsfw) return message.channel.send('You can use this commands on NSFW Channel!')
    superagent.get('https://nekos.life/api/v2/img/lewd')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setImage(response.body.url)
      .setColor(`RANDOM`)
      .setDescription(`How Lewd **${message.author.username}**!`)                 
      .setImage(response.body.url)
      .setFooter('OwO');
 
   message.channel.send(lewdembed);
 })
  },
};