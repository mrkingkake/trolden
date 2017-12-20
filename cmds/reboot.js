const Discord = module.require("discord.js");
const fs = module.require("fs");
var cp = require('child_process');

module.exports.run = async (bot, message, args) => {
  if (!args || args.size < 1) return message.reply("Must provide a command to reload. Derp.");

  fs.watchFile('./cmds/', function (event, filename) {
    console.log(`Restarting ${args[0]}`);
    server.kill();
    server = cp.fork(args[0]);
    
  });

  let response = await delete require.cache['./cmds/' + args[0] + ".js"];
  console.log(response);
  if (response) return message.reply(`Error Unloading: ${response}`);

  message.reply(`The command \`${args[0]}\` has been reloaded`);
};

module.exports.conf = {
    role: ["Admin"],
    enabled: true,
    aliases: ["re"]
};

module.exports.help = {
    name: "reboot",
    info: "Reboot the bot",
    usage: "!reboot"
    
};