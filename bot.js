const botConfig = require("./config.json");
const Discord = require("discord.js");
const fs = require("fs");
const mysql = require("mysql");
const mysqlcon = require("./lib/mysql/mysql.js");

var prefix = botConfig.prefix;
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

mysqlcon.getCon();

bot.on("ready", async () => {

    console.log(`Ready! ${bot.user.username}`);
    
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    const bannedWords = ["cunt", "bøsse", "fuck", "nigga", "nigger"];
    
    if(bannedWords.some(bw => message.content.includes(bw)) ) {
        // not good enough, need to check words only.
        message.delete();
        message.reply("Du gjorde trolden ked af det ved at sige et slemt ord!!");
    }

    let messageArray = message.content.split(/\s+/g);
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(!command.startsWith(prefix)) return;
    
    let cmd = bot.commands.get(command.slice(prefix.length));
    let roles = cmd.conf.role;

    if(cmd)  {
        if(message.member.roles.some(r => roles.includes(r.name)))
        {
            cmd.run(bot, message, args);
        }else{
            message.channel.send("Det har du ikke tilladelse til!");
        }  
    }
    const guildMember = message.member;
    guildMember.addRole('Player');
    console.log(`${guildMember} is added to Player role`);
});

bot.login(botConfig.token);