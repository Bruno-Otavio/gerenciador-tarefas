const connect = require("../../connect/connect");
const CRUD = require("../CRUD");

const tarefas_url = "http://127.0.0.1:5500/frontend/pages/tarefas.html";

const table = "usuarios"

const queries = (data={}) => {
    return {
        getAll: `SELECT id, nome, email FROM ${table};`,
        get: `SELECT id, nome, email FROM ${table} WHERE id = ${data.id}`,
        create: `INSERT INTO ${table}(nome, email, senha) VALUE
            ('${data.nome}', '${data.email}', md5('${data.senha}'));`,
        login: `SELECT * FROM ${table} WHERE email = "${data.email}" AND senha = md5("${data.senha}")`,
    }
}

class User extends CRUD {
    constructor(queries) {
        super(queries);
        this.queries = queries;
    }

    login = (req, res) => {
        const data = { ...req.body };
        console.log(data);

        if (data.email && data.senha) {
            connect.query(this.queries(data).login, (err, result) => {
                if (err) res.status(400).json(err).end();

                console.log(result);

                const users = result;
                if (users.length > 0) {
                    req.session.loggedIn = true;
                    req.session.email = data.email;

                    console.log("correct", req.session);
                    res.status(202).json(req.session).end();
                } else {
                    console.log("incorrect");
                    res.send("Incorrect Email and/or Password");
                }

                res.end();
            });
        } else {
            res.send("Please send Username or Password");
            res.end();
        }
    }
}

const user = new User(queries);
module.exports = user;
