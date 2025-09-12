const express = require("express")
const messagesRoutes = require("./routes/message.routes")

const app = express()

app.use(express.json())

app.use('/api/chat', messagesRoutes)



module.exports = app;