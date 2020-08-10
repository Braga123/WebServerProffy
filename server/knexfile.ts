import path from 'path'
//knex escreve java scripte e tranpila para sql
module.exports = {
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname,'src', 'database', 'database.sqlite')
    },
migrations:{
    directory:path.resolve(__dirname, 'src', 'database', 'migrations')
},
useNullAsDefault:true,
};
