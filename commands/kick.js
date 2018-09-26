module.exports = {
	name: 'kick',
  aliases: ['k', 'boot'],
	description: 'Tag a member and kick them .',
  args: true,
	execute(message, args,) {
		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to kick them!');
		}

		const member = message.mentions.members.first();
    let reason = args.slice(1).join(' ');
member.send(`You were kicked for: ${reason}`);
    member.kick();
	},
};
