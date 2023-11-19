const express = require("express")
const cors = require("cors")
const session = require("express-session")

const db = require('./models')

const app = express()

app.use(express.json())
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}))

app.use(session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false, 
    cookie: {
        expires: 24 * 60 * 60,  // 1 day
    },
}))

// Routers
const userRouter = require('./routes/Users.js')
app.use('/users', userRouter)

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server is running")
    })
})
