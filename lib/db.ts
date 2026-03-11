import postgres from 'postgres'

const globalForDb = globalThis as unknown as { sql: ReturnType<typeof postgres> }

function createConnection() {
  return postgres(process.env.DATABASE_URL!, {
    max: 10,
    idle_timeout: 20,
    onnotice: () => {},
  })
}

const sql = globalForDb.sql || createConnection()

if (process.env.NODE_ENV !== 'production') globalForDb.sql = sql

export default sql
