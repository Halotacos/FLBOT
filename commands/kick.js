const { Client, Permissions } = require('discord.js');
const { client } = require('../index.js');


module.exports = {
	name: 'kick',
  aliases: ['k', 'boot'],
	description: 'Tag a member and kick them.',
  args: true,
  guildOnly: true,
	execute(message, args,) {
    let perms = message.member.permissions;

// Check if a member has a specific permission on the guild!
let has_kick = message.member.hasPermission("KICK_MEMBERS");
		const staff = message.author 
    if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to kick them!');
    }else if(!has_kick) {
      return message.reply('you do not have permission to kick users!');
    }else if(perms = has_kick){
		const member = message.mentions.members.first();
    let reason = args.slice(1).join(' ');
    member.send(`You were kicked by ${staff} for: ${reason}`);
    member.kick();
    }
	},
};
