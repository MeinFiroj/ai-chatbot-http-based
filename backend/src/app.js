const express = require("express")
const messagesRoutes = require("./routes/message.routes")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors({credentials : true, origin : "http://localhost:5173"}))

app.use('/api/chat', messagesRoutes)



module.exports = app;