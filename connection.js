/**
 * Test connection
 */

module.exports = {
    connection: function () {
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root'
        });

        connection.connect();
        return connection;
    }
};
