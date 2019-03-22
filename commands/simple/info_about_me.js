const Commando = require('discord.js-commando');
const discord = require('discord.js');

class InfoAboutMeCommand extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'info',
            group: 'simple',
            memberName: 'info',
            description: 'Learn a little more about me!'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
            .setTitle(message.guild.name)
            .setDescription("This card shows the information about this server")
            .addField("Guild Owner", message.guild.owner, true)
            .addField("Member Count",  message.guild.memberCount, true)
            .addField("Online Members", message.guild.members.filter(m => m.presence.status === 'online').size, true)
            .addField("Bot Users", message.guild.members.filter(member => member.user.bot).size, true)
            .setColor(0x00FF00)
            .setThumbnail(message.guild.iconURL)
            .setFooter("XyloBot - The all-purpose bot", "https://cdn.discordapp.com/app-icons/556512187875852288/856a6cd4640c255363ea86f7e255199f.png?size=256")
            .setTimestamp()

        message.channel.sendEmbed(myInfo);
    }
}

module.exports = InfoAboutMeCommand;