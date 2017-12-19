const mysql = module.require("mysql");

module.exports = {
    connnection: function() {
        const con = mysql.createConnection({
            host: "127.0.0.1",
            user: "root",
            password: ""
          });
        
         
    },
    contest: function() {
        con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
          });
    }
}