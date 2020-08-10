import knex from 'knex'
import path from 'path'
//knex escreve java scripte e tranpila para sql

const db = knex({
    client:'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')      
    },
    useNullAsDefault:true,
})

export default db;