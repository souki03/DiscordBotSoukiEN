const Discord = require('discord.js');
const config = require('./config.json');

module.exports.run = async(client, message, args) => {
const modoEmbed = new Discord.MessageEmbed()
	.setColor('#00BDFF')
	.setTitle('â ã»List of moderation commands.')
	.setURL('https://www.youtube.com/c/SOUKii')
	.setAuthor(config.Speudo, config.Image, 'https://www.youtube.com/c/SOUKii')
	.setThumbnail(config.Image)
	.addFields(
    { name: 'ð-clear', value: '(To delete messages.)' },
	{ name: 'ð¬-msg', value: '(To send a message with the bot.)' },
    { name: 'â ï¸-kick', value: '(For kick.)' },
    { name: 'â-ban', value: '(For ban.)' },

    )
	.setTimestamp()
    .setFooter(config.Speudo, config.Image);
    message.channel.send(modoEmbed)
}

module.exports.help = {
    name:"modo"
}