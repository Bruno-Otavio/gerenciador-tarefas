const mysql = require("mysql");

const connect = mysql.createConnection({
    user: "root",
    password: "ROOT",
    host: "localhost",
    database: "gerenciador_tarefas"
});

module.exports = connect;
