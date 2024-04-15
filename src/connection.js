var mysql = require("mysql");


var con =mysql.createConnection({
    host:"localhost",
    user:"saby",
    password:"husnA12345",
    database:"joinUs_form"
})

 module.exports= con;