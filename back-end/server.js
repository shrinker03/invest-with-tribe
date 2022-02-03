import dotenv from 'dotenv'
import express from 'express'
import connectDB from './config/db.js'
import userRoutes from './routes/userRoute.js'
import path from 'path'


dotenv.config()

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded());



app.get('/api/test', (req, res) => {
    res.send('helooooo')
})

app.use('/api/users', userRoutes)

const __dirname = path.resolve()
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/front-end/build')))
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'front-end', 'build', 'index.html')))
} else {
    app.get('/', (req, res) => {
        res.json('Api is running')
    })
}

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} on port ${PORT}`))
