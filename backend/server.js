require('dotenv').config()
const app = require("./src/app")
require('../backend/.gitignore')




app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})