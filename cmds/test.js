const fs = module.require("fs");
const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    
    message.channel.send("Test Besked");
}

module.exports.conf = {
    role: ["Admin", "Mod","Team Captain", "Players"],
    enabled: true,
    aliases: ["information"]
}

module.exports.help = {
    name: "info",
    info: "retrieve info of who has responsibility of what",
    usage: "!info"
}