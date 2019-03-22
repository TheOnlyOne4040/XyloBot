const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const snekfetch = require('snekfetch');

class MemesRssCommand extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'meme',
            group: 'simple',
            memberName: 'meme',
            description: 'Takes a random meme from r/dankmemes'
        });
    }

    async run(message, args) {
        try {
            const { body } = await snekfetch
                .get('https://www.reddit.com/r/dankmemes.json?sort=top&t=week')
                .query({ limit: 800 });
            const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
            if (!allowed.length) return message.channel.send('Our farmers were unable to locate any ripe memes! Try again later (You shouldnt see this message. If you are reading this, then reddit is probably offline. If reddit is online and you still get this message, contact @𝕏𝕪𝕝𝕠𝕟𝕠𝕝𝕪#1612');
            const randomnumber = Math.floor(Math.random() * allowed.length)
            const embed = new Discord.RichEmbed()
            .setColor(0x00FF00)
            .setTitle(allowed[randomnumber].data.title)
            .setImage(allowed[randomnumber].data.url)
            .addField("Other info:", "Upvotes: " + allowed[randomnumber].data.ups + "\nDownvotes: " + allowed[randomnumber].data.downs)
            .setFooter("Posted by: " + allowed[randomnumber].data.author + " | Memes provided by https://www.reddit.com/r/dankmemes")
            message.channel.send(embed)
        } catch (err) {
            return console.log(err);
        }
    }
    
}

module.exports = MemesRssCommand