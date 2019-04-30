const Discord = require("discord.js");
const superagent = require("snekfetch");
module.exports =  {
	name: 'kiss',
	description: 'Kiss a tagged user',
	execute (message, args) {
    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!hugUser) return message.channel.send("Make sure you mention someone!");
 superagent.get('https://nekos.life/api/v2/img/kiss')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
       .setDescription(`**${message.author.username}** kissed **${message.mentions.users.first().username}**!`)
      .setImage(response.body.url)
      .setColor(`RANDOM`)  
      .setFooter('OwO');
 
   message.channel.send(lewdembed);
 })
  },
};