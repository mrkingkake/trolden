const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Info")
        .setDescription("People responsible for each league")
        .setThumbnail("https://www.t-lan.dk/wp-content/uploads/2017/08/logo.png")
        .setColor([0, 174, 134])
        .addField("CSGO", "Hovedansvarlig Christian")
        .addField("HEARTSTONE", "Hovedansvarlig Steffen")
        .addField("ROCKET LEAGUE", "Hovedansvarlig Visti, medhjælper Thomas")
        .addField("LOL", "Hovedansvarlig Kristian")
        .addField("PUBG", "Hovedansvarlig Daniel, medhjælper Andreas");
        

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