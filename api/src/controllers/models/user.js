const CRUD = require("../CRUD");

const table = "usuarios"

const queries = (data={}) => {
    return {
        getAll: `SELECT * FROM ${table};`,
        get: `SELECT * FROM ${table} WHERE id = ${data.id}`,
        create: `INSERT INTO ${table}(nome, email, senha) VALUE
            ('${data.nome}', '${data.email}', '${data.senha}');`,
    }
}

class User extends CRUD {
    constructor(queries) {
        super(queries);
    }

    login = (req, res) => {
        return;
    }
}

const user = new User(queries);
module.exports = user;
