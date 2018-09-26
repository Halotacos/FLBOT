module.exports = {
	name: 'warn',
	description: 'Tag a member and warn them.',
  args: true,
	execute(message, args,) {
		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to warn them!');
		}

		const member = message.mentions.members.first();
    let reason = args.slice(1).join(' ');
member.send(`You were warned for: ${reason}`);
    //member.kick();
	},
};
