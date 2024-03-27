const connect = require("../../connect/connect");
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
        this.queries = queries;
    }

    login = (req, res) => {
        const data = { ...req.body };
        connect.query(this.queries().getAll, (err, result) => {
            const users = result;
            users.forEach((user) => {
                if (data.email === user.email && data.senha === user.senha) {
                    console.log("logged");
                    res.status(202).json({ id: user.id, logged: true }).end();
                }
            });
        });
    }
}

const user = new User(queries);
module.exports = user;
