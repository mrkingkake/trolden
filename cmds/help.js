module.exports.run = async (bot, message, args) => {
    message.author.send( 
        [
           "**Hej! Trolden er her for at hjælpe dig!**",
           "",
           "__List__",
           "",
           "`!help`: trolden vil sende dig en hjælpelist",
           "",
           "`!none` Vi kan intet trlolo",
           "`!none` Vi kan intet overhovedet."        
       ]);
}

module.exports.help = {
    name: "help"
}