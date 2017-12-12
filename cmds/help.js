const fs = require("fs");

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
            let list = bot.commands.get(props.help.name, props.help.info, props);
       
            msgsArray.push(`!${list.help.name}: ${list.help.info}`+ "\n");

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

module.exports.help = {
    name: "help",
    info: "Display a list of Commands",
    role: "Players"
}