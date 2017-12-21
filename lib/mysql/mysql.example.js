const mysql = module.require("mysql");
const botConfig = module.require("../../config.json");

let host = botConfig.db.host;
let user = botConfig.db.user;
let password = botConfig.db.password;

var con = mysql.createConnection({
            host: host,
            user: user,
            password: password
          });

        
const getCon = function () {
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });
}

module.exports = { getCon } ;
