const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 3000
const locahost = 'localhost'
const cors = require('cors')
const cookieParser = require('cookie-parser')
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))
app.use(cookieParser())
app.disable('x-powered-by');//Ẩn header “X-Powered-By” (Express)

app.listen(port, () => {
    console.log(`----Server running at http://${locahost}:${port}----`)
})