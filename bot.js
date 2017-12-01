const botConfig = require("./config.json");
const Discord = require("discord.js");
const prefix = botConfig.prefix;


const bot = new Discord.Client({disableEveryone: true})

bot.on("ready", async () => {

    console.log(`Ready! ${bot.user.username}`);
    try {
     let link = await bot.generateInvite(["ADMINISTRATOR"]);
     console.log(link);
    }catch(e) {
        console.log(e.stack);
    }
});

bot.login(botConfig.token);