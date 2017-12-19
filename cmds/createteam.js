const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    // https://discord.js.org/#/docs/main/stable/class/VoiceChannel
    const voice = bot.voiceChannel;
    console.log(voice.name);
     
}

module.exports.help = {
    name: "createteam",
    info: "Hello",
    role: ["Team Captain"]
}