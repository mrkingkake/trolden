const botConfig = module.require("../config.json");
const Discord = module.require("discord.js");
const snekfetch = module.require("snekfetch");

module.exports.run = async (bot, message, args) => {
    snekfetch.get(botConfig.api).then(r => {
        let body = r.body;
    });
}

module.exports.conf = {
    role: ["Admin", "Mod","Team Captain", "Players"],
    enabled: true,
    aliases: []
}

module.exports.help = {
    name: "api",
    info: "Api Test",
    usage: "!api"
    
}