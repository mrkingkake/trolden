const botConfig = require("./config.json");
const Discord = require("discord.js");
const fs = require("fs");

const prefix = botConfig.prefix;
const bot = new Discord.Client({disableEveryone: true});

bot.commands = new Discord.Collection();

fs.readdir("./cmds/", (err, files) => {
    if(err) console.error(err);
    
    let jsfile = files.filter(f => f.split(".").pop() === "js");

    if(jsfile.length <= 0) {
        console.log("No Commands");
        return;
    }
    console.log(`Loads ${jsfile.length} Commands`);

    jsfile.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`${i + 1}: ${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});

bot.on("ready", async () => {

    console.log(`Ready! ${bot.user.username}`);

});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(/\s+/g);
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(!command.startsWith(prefix)) return;
    
    let cmd = bot.commands.get(command.slice(prefix.length));
    let roles = cmd.help.role;

    if(cmd)  {
        // make indexOf
        console.log(roles);
        if(hasRoles(message.member, `${roles}`)){
            cmd.run(bot, message, args);
        }else{
            message.channel.send("Det har du ikke tilladelse til!");
        }
    }

});

function pluck(array) 
{
    return array.map(function(item) 
    { 
        return item["name"]; 
    }); 
}
function hasRoles(mem, role) {
    if(pluck(mem.roles).includes(role)) {
        return true;
    }else{
        return false;
    }
    
}

bot.login(botConfig.token);