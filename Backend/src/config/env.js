import dotenv from 'dotenv'

dotenv.config()

if (!process.env.PORT || !process.env.NODE_ENV || !process.env.ALLOWED_ORIGINS) throw new Error("All env variables are required")

export const ENV = {
    PORT: process.env.PORT,
    NODE: process.env.NODE_ENV,
    ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS
}