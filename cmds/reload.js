const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!args || args.size < 1) return message.reply("Must provide a command name to reload.");
    
    let response = await bot.unloadCommand(args[0]);
    if (response) return message.reply(`Error Unloading: ${response}`);

    response = bot.loadCommand(args[0]);
    if (response) return message.reply(`Error Loading: ${response}`);

    message.reply(`The command \`${args[0]}\` has been reloaded`);
}

module.exports.help = {
    name: "reload",
    info: "To reload function",
    role: "Admin"
}