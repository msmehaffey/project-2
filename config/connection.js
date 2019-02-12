var Sequelize = require("sequelize");
var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {

var sequelize = new Sequelize("artistdb", "root", "root", {
    host: "localhost",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000,
    }
});
}
connection.connect();
module.exports = connection;

module.exports = sequelize;