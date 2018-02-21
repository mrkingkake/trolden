const mysql = module.require("mysql");
const botConfig = module.require("../../config.json");
const Discord = module.require("discord.js");

let host = botConfig.db.host;
let user = botConfig.db.user;
let password = botConfig.db.password;

var con = mysql.createConnection({
            host: host,
            user: user,
            password: password,
            database: "trold"
          });

          var arrayRow = [];
        
const getCon = function () {
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");

            con.query("CREATE DATABASE IF NOT EXISTS trold", function (err, result) {
                if (err) throw err;
                console.log("Database created");
            });

            con.query('CREATE TABLE IF NOT EXISTS Gameservers (Id INTEGER PRIMARY KEY AUTO_INCREMENT, name TEXT NOT NULL, game TEXT NOT NULL, ip TEXT NOT NULL)', function(err, result) {
                if (err) throw err;
                console.log("Created Game Server Table")
            });


    });
}

const gameserverAdd = function (name, game, ip) {
    con.query(`INSERT INTO gameservers (Name, Game, IP) VALUES ('${name}', '${game}', '${ip}')`, function (err) {
        if (err) throw err;
        console.log(`Added ${name} in the ${game} category with the IP: ${ip}`); 
    });
}

const gameserverDelete = function (name) {
    con.query(`DELETE FROM gameservers where Name = '${name}'`);
    console.log(`Deleted ${name} from gameservers`);
}

const gameserverShow = function (callback) {
    con.query(`SELECT * FROM gameservers ORDER BY game`, (err, rows) => {
        if (err) throw err;
        callback(null, rows, fields);
    });
}


//module.exports = { getCon, gameserverAdd, gameserverDelete, gameserverShow } ;
module.exports.getCon = getCon;
module.exports.gameserverAdd = gameserverAdd;
module.exports.gameserverDelete = gameserverDelete;
module.exports.gameserverShow = gameserverShow;


