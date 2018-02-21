const fs = module.require("fs");
const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    msgsArray = [];

    fs.readdir("./cmds/", (err, files) => {
        if(err) console.error(err);
        
        if(files.length <= 0) {
            console.log("Empty");
            return;
        }

        files.forEach((f) => {
            let props = require(`./${f}`);
            let list = bot.commands.get(props.help.name, props.help.info, props.help.role, props);
            let roles = list.conf.role;
    
            if(message.member.roles.some(r => roles.includes(r.name))){
                msgsArray.push(`!${list.help.name}: ${list.help.info} - usage: ${list.help.usage}`+ "\n");
            }


        });
        message.author.send( 
            [
               "**Hej! Trolden er her for at hjælpe dig!**",
               "",
               "__List__",
               "",
               `${msgsArray.join("")}`  
           ]);  
    });  
}
module.exports.conf = {
    role: ["Players"],
    enabled: true,
    aliases: ["h"]
}

module.exports.help = {
    name: "help",
    info: "Display a list of Commands",
    usage: "!help"
    
}