const { Client, Permissions, Discord } = require('discord.js');
const { client } = require('../index.js');module.exports = {
	name: 'deny',
    aliases: ['d', 'den'],
	description: 'Tag a member and send them a message they have been denied.',
  args: true,
  guildOnly: true,
	execute(message, args,) {
    const staff = message.author
    let perms = message.member.permissions;

// Check if a member has a specific permission on the guild!
    let has_kick = message.member.hasPermission("KICK_MEMBERS");
    
		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to deny them!');
		}else if (!has_kick){
    	return message.reply('You do not have permission to deny users');
    
    }else if (perms = has_kick) {
    let reason = args.slice(1).join(' ');
    const member = message.mentions.members.first();
      member.send('Dear Applicant,\nWe would like to thank you for applying for the selected department at JV Role-Play. Unfortunately, we are not moving forward with your application at this time. You may reapply in one week from date applied. If you get denied twice on your application you will be blacklisted from applying for one month. If you have any question in regards to your application. Please do not hesitate to contact a member of Staff.')
      member.send(`Reason(s) for Denial: \n**${reason}**`)
      member.send(`We *appreciate* the time and effort you have put into your application.\nThank you,\n${message.author.username} - JVRP Recruitment Division`);
    }
	},
};


  