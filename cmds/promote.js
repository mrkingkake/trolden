const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setDescription("")
        .setColor("#9B59B6")
        .addField("Full Username ", message.author.tag)
        .addField("Created at: ", message.author.createdAt);
    message.channel.send({embed: embed});
}

module.exports.help = {
    name: "promote",
    info: "",
    role: "Players"
}