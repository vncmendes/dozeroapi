// import fastify from 'fastify'
import fastify from 'fastify'
import { knex } from './database'

const app = fastify()

app.get('/', async () => {
  const tables = knex('sqlite_schema').select('*')
  return tables
})

app.listen({ port: 3000 }).then(() => {
  console.log('HTTP Server Running')
})
