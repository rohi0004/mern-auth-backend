const env = require('dotenv')
env.config() // This will load the .env file in the root directory
const express = require('express')
const app = express()
const port = process.env.PORT
const cors = require('cors')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

const uri = process.env.URI

const authRoutes = require('./routes/authRoutes')

const allowedOrigins = [
  'https://mern-auth-frontend-m65x.onrender.com'
]

app.use(
  cors({
    credentials: true,
    origin: allowedOrigins,
  })
)

app.use(express.json())
app.use(cookieParser())

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err))

app.use(authRoutes)

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})
