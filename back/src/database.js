const knex = require('knex')({
    client: 'postgres',
    connection: {
      host : 'localhost',
      user : 'postgres',
      password : 'banco',
      database : 'dinamica',
      port: '5432'
    }
  })

module.exports = knex