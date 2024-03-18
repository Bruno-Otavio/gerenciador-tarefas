const CRUD = require("../CRUD");

const table = "tarefas"

const queries = (data={}) => {
    return {
        getAll: `SELECT * FROM ${table}`,
        get: `SELECT * FROM ${table} WHERE id = ${data.id}`,
        create: `INSERT INTO ${table}(descricao, data_vencimento, status_tarefa, id_usuario) VALUE
            ('${data.descricao}', '${data.data_vencimento}', '${data.status_tarefa}', '${data.id_usuario}');`,
        update: `UPDATE ${table} SET
            descricao = '${data.descricao}',
            data_vencimento = '${data.data_vencimento}',
            status_tarefa = '${data.status_tarefa}',
            id_usuario = '${data.id_usuario}'
            WHERE id = '${data.id}'`,
        delete: `DELETE FROM ${table} WHERE id = ${data.id}` 
    }
}

class Task extends CRUD {
    constructor(queries) {
        super(queries);
    }
}

const task = new Task(queries);
module.exports = task;
