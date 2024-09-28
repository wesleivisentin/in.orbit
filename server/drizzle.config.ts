import { defineConfig } from 'drizzle-kit'
import { env } from './src/env'

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './migrations', //PASTA ONDE SERÁ SALVO OS MIGRATIONS
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
})
