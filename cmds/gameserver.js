const Discord = module.require("discord.js");
const mysqlcon = require("./../lib/mysql/mysql.js");


module.exports.run = async (bot, message, args) => {
    let myRole = message.member.roles.some(r=>["Admin", "Mod"].includes(r.name));

    if (args[0] == 'show') {
        mysqlcon.gameserverShow((err, rows, fields) => {
           
            let result = [];
            

            for (let i = 0; i < rows.length; i++) {
                result.push("Servername " + rows[i]['name'], "GAME: " + rows[i]['game'], "IP: " + rows[i]['ip'] + '\t\n');
                // make index
            }
            
            message.channel.send(result);
        });
        
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
    info: "Dislpay a list of servers",
    usage: "!gameserver show. For Mods: !gameserver add name game ip , !gameserver delete name"
}