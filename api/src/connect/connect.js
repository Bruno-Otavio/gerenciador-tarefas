const mysql = require("mysql");

const connect = mysql.createConnection({
    user: "root",
    host: "localhost",
    database: "gerenciador_tarefas"
});

module.exports = connect;
