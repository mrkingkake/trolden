const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Info")
        .setDescription("People responsible for each league")
        .setThumbnail("https://www.t-lan.dk/wp-content/uploads/2017/08/logo.png")
        .setColor([0, 174, 134])
        .addField("CSGO", "They can also be inline.")
        .addField("HEARTSTONE", "They can also be inline.")
        .addField("ROCKET LEAGUE", "They can also be inline.");
        

    message.channel.send({embed});
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