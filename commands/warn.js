module.exports = {
	name: 'warn',
	description: 'Tag a member and warn them.',
  args: true,
  guildOnly: true,
	execute(message, args,) {
    const staff = message.author
    let perms = message.member.permissions;

// Check if a member has a specific permission on the guild!
    let has_kick = message.member.hasPermission("KICK_MEMBERS");
    
		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to warn them!');
		}else if (!has_kick){
    	return message.reply('You do not have permission to warn users');
    
    }else if (perms = has_kick) {
    
    const member = message.mentions.members.first();
    let reason = args.slice(1).join(' ');
 member.send(`You were warned by: ${staff} for: ${reason}`);
    }
	},
};
