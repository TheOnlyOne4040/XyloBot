const Commando = require('discord.js-commando');
const discord = require('discord.js');
const bot = new Commando.Client({commandPrefix: 'X'});
const token = 'NTU2NTEyMTg3ODc1ODUyMjg4.D262KA.QVtkWdYulRZrGhSLHz0nT--2_FI'

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('moderation', 'Moderation');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on('message', function(message){
    if(message.content == 'Jointest')
    {
        message.member.send("Welcome to ***" + message.guild + "***.\nFor a list of commands, type 'help' here or 'X help' in the server");
        message.member.send("Don't forget to check the server rules!");    
    }
});

bot.on("guildCreate", guild => {
    console.log('New guild joined: ' + guild.name + ' (id: ' + guild.id + '). This guild has ' + guild.memberCount + ' members!');
    bot.user.setActivity('Crusading ' + bot.guilds.size + ' servers')
  });

bot.on("guildMemberAdd", function(member)
{
    member.send("Welcome to ***" + message.guild + "***.\nFor a list of commands, type 'help' here or 'X help' in the server");
    member.send("Don't forget to check the server rules!");
});

bot.on('ready',function(){
    console.log("XyloBot is all lubed up and ready to go. Currently obtaining bread on " + bot.guilds.size + ' servers!')
    bot.user.setActivity('Crusading ' + bot.guilds.size + ' servers');
})

bot.login(token);
