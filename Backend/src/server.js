import express from 'express'
import cors from 'cors'
import { ENV } from './config/env.js'

const app = express()

app.use(express.json())

app.use(cors({
    origin: ENV.NODE_ENV === 'production'
        ? (ENV.ALLOWED_ORIGINS?.split(',').map(o => o.trim()) || [])
        : true,
    credentials: true
}))


const PORT = ENV.PORT || 3000

app.get('/', (req, res) => res.send('Hello from server'))

const startServer = async () => {
    try {

        app.listen(PORT, () => {
            console.log('Server is up and running on PORT:', PORT)
            if (ENV.NODE_ENV === 'production') {
                console.log('Running in PROD mode');
            }
        })



    } catch (error) {
        console.log('Server failed to connect:', error.message)
        process.exit(1)
    }
}

startServer()