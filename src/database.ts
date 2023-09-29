import { knex as setupKnex, Knex} from 'knex'

export const config: Knex.Config = { // variável para isolar as informações de conexão da conexão de fato.
  client: 'sqlite',
  connection: {
    filename: "./db/app.db"
  },
  useNullAsDefault: true,
  migrations: {
    extension: ".ts",
    directory: "./db/migrations"
  }
} 

export const knex = setupKnex(config) //conexão com o banco

