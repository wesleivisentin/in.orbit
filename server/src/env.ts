import z from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
})

export const env = envSchema.parse(process.env) // parse verifica se o .env(process.env) está seguindo o formato atribuido no envSchema a cima
