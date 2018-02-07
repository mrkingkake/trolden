const Discord = module.require("discord.js");
const mysqlcon = require("./../lib/mysql/mysql.js");

module.exports.run = async (bot, message, args) => {
    let myRole = message.member.roles.some(r=>["Admin", "Mod"].includes(r.name));

    if (args[0] == 'show') {
        mysqlcon.gameserverShow();
     
       
    }

    if (args[0] == 'add' && args.length === 4  && myRole != false) {
        console.log('works');
        mysqlcon.gameserverAdd(args[1], args[2], args[3]);
    }

    if (args[0] == 'delete' && args.length === 2 && myRole != false) {
        console.log("deleted");
        mysqlcon.gameserverDelete(args[1]);
    }

    if (args[0] == null) {
        message.channel.send("Nothing");
    }
    
}

module.exports.conf = {
    role: ["Admin", "Mod","Team Captain", "Players"],
    enabled: true,
    aliases: ["Gameservers"]
}

module.exports.help = {
    name: "gameserver",
    info: "retrieve info of who has responsibility of what",
    usage: "!gameserver show, !gameserver add"
}