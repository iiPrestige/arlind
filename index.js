const Discord = require("discord.js");
const TOKEN = "NDYxNDc1NTczMTE0NDcwNDAw.DhT2LA.-eUdNttZLPllHCLMT_reScA4VHU";

const PREFIX = "p!"

var bot = new Discord.Client();

var servers = {};

bot.on("ready", function() {
  console.log("Ready");
  bot.user.setActivity("with Arlind");
  bot.user.setStatus("dnd");
});

bot.on("message", function(message) {
  if (message.author.equals(bot.user)) return;

  if (!message.content.startsWith(PREFIX)) return;

  var args = message.content.substring(PREFIX.length).split(" ");

  switch (args[0].toLowerCase()) {
    //PING
    case "ping":
    message.channel.sendMessage("Pinging...").then((mes) => {
      mes.edit(`Pong! :ping_pong: ${message.author.toString()} API is ${bot.ping.toFixed()}ms`)
      message.channel.send
    });
    break;
    
    //SERVERINFO 
    case "serverinfo":
    var embed = new Discord.RichEmbed()
     
    .setDescription("***Server Information***")
    .addField("Name", "Prestige")
    .addField("Created at", message.guild.createdAt)
    .addField("Member Count", message.guild.memberCount)
    .addField("Server Reigon :flag_eu:", message.guild.region)
    .addField("Channels", bot.channels.size)
    .addField("Roles", message.guild.roles.size)
    .addField("ID:", "375635880313880586")
    .setColor(14177041)
    .setThumbnail(message.guild.iconURL)
    message.channel.sendEmbed(embed);
    break;
    case 'ban':   
    if (message.content.startsWith(PREFIX + "ban")) {
      if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You don't have permission to ban members!");
      if (!message.mentions.members.first()) return message.reply("Usage: " + PREFIX + "ban <@user> [reason]");
      message.guild.member(message.mentions.users.first()).ban();
     message.channel.sendMessage('***Member banned!***');
        };
        break;
        case 'kick':
        if (message.content.startsWith(PREFIX + "kick")) {
            if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You don't have permission to kick members!");
            if (!message.mentions.members.first()) return message.reply("Usage: " + PREFIX + "kick <@user> [reason]");
            message.guild.member(message.mentions.users.first()).kick();
            message.channel.sendMessage('***Member kicked!***');
        };
        break;

  }

})
bot.on('guildMemberAdd',  (member) => {
member.guild.channels.get("413023284293271552").sendMessage("A new *prestigious* member has joined, Welcome to **! Prestige** :heart:"  +member,);
   });
  
bot.login(TOKEN)

