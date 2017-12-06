module.exports.run = async (bot, message, args) => {
    if(!args || args.size < 1) return message.reply("Must provide a command name to reload.");

        // the path is relative to the *current folder*, so just ./filename.js
        try {
            delete require.cache[require.resolve(`./${args[0]}.js`)];
        } catch (e) {
            console.log(e);
        }
        
        
        message.reply(`The command ${args[0]} has been reloaded`);
}

module.exports.help = {
    name: "reload",
    info: "To reload function",
    role: "Admin"
}