const { Client, Permissions, Discord } = require('discord.js');
const { client } = require('../index.js');module.exports = {
	name: 'accept',
    aliases: ['a', 'acc'],
	description: 'Tag a member and send them a message they have been accepted.',
  args: true,
  guildOnly: true,
	execute(message, args,) {
    const staff = message.author
    let perms = message.member.permissions;

// Check if a member has a specific permission on the guild!
    let has_kick = message.member.hasPermission("KICK_MEMBERS");
    
		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to accept them!');
		}else if (!has_kick){
    	return message.reply('You do not have permission to accept users');
    
    }else if (perms = has_kick) {
    
    const member = message.mentions.members.first();
      member.send('Dear Applicant,')
      member.send('Thank you for your interest, Your application has been approved and selected to move forward to our interview phase. This in no way guarantees you will be verified. Moving further we would like to speak with you. You have a period of 7 days to do so, If you cannot meet that deadline for any reason, please comment on your application requesting a time extension.')
      member.send('As you have been accepted we now ask you to copy the info from the summary below, change the * to your information. Choose three different days that work for you and a time on each day. Please send this to the staff that accepted you') 
      member.send('Interview request \n*Please use same timezone as your application.\n1st:\nDate: \nTime: \n2nd \nDate: \nTime: \n3rd: \nDate: \nTime: ')
      member.send(`Thank you,\n${message.author.username} - JVRP Recruitment Division`);
      member.send('Example Interview request:\n\nInterview request\n* Please use same timezone as your application\n1st:\nDate:11/01\nTime:5:00pm\n\n2nd:\nDate:11/05\nTime:4:45pm\n\n3rd:\nDate:11/11\nTime:9:30am')
    }
	},
};


  