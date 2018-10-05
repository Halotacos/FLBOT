
module.exports = {
	name: 'avatar',
	description: 'Get the avatar URL of the tagged user, or your own.',
	execute(message) {
		let user;
	// If the user mentions someone, display their stats. If they just run userinfo without mentions, it will show their own stats.
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
	// Define the member of a guild.
    const member = message.guild.member(user);
const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
const Discord = require('discord.js');
const Sembed = new Discord.RichEmbed()
		.setColor(randomColor)
		.setThumbnail(user.avatarURL)
		.setTitle(`${user.username}'s avatar`)
		.setTimestamp()
  .setFooter('© 2018 NEP', user.avatarURL);
  message.channel.send({Sembed});
	},
};
