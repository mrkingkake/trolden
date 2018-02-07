const mysql = module.require("mysql");
const botConfig = module.require("../../config.json");

let host = botConfig.db.host;
let user = botConfig.db.user;
let password = botConfig.db.password;

var con = mysql.createConnection({
            host: host,
            user: user,
            password: password,
            database: "trold"
          });

        
const getCon = function () {
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");

            con.query("CREATE DATABASE IF NOT EXISTS trold", function (err, result) {
                if (err) throw err;
                console.log("Database created");
            });

            con.query('CREATE TABLE IF NOT EXISTS Gameservers (Id INTEGER PRIMARY KEY AUTO_INCREMENT, Name TEXT NOT NULL, Game TEXT NOT NULL, IP TEXT NOT NULL)', function(err, result) {
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
    console.log(`Deleted ${name} from gameservers`)
}

const gameserverShow = function () {
    con.query(`SELECT * FROM gameservers`, (err, rows) => {
        if (err) throw err;
        var name = rows;
    });
}

module.exports = { getCon, gameserverAdd, gameserverDelete, gameserverShow } ;

