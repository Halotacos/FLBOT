const { Client, Permissions, Discord } = require('discord.js');
const { client } = require('../index.js');module.exports = {
	name: 'interview-complete',
    aliases: ['ic', 'int-com'],
	description: 'Tag a member and send them a message that the interview process is complete.',
  args: true,
  guildOnly: true,
	execute(message, args,) {
    const staff = message.author
    let perms = message.member.permissions;

// Check if a member has a specific permission on the guild!
    let has_kick = message.member.hasPermission("KICK_MEMBERS");
    
		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to send them the message!');
		}else if (!has_kick){
    	return message.reply('You do not have permission to send the user the message');
    
    }else if (perms = has_kick) {
    let reason = args.slice(1).join(' ');
    const member = message.mentions.members.first();
      member.send('Interview Completed:')
      member.send('Dear Applicant,\nCongratulations! You have completed the Interview Process, and have been given the rank of Verified.')
      member.send(`Thank you,\n${message.author.username} - JVRP Recruitment Division`);
    }
	},
};


  