const express = require("express")
const logger = require("morgan")
const cookieParser = require("cookie-parser")
const methodOverride = require("method-override")

//Initialize our express app
const app = express()

// Import our routes:
const baseRouter = require('./routes/index')
const clucksRouter = require('./routes/clucks')

//Setup our view engine to ejs
app.set("view engine", "ejs")

//use middleware:
app.use(logger())
app.use(cookieParser())
//for parsing Content-Type: application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}))
//parse (read values of) HTML forms
//extended: true means more rich formats will also be encoded

app.use(methodOverride((req, res) => {
    if (req.body && req.body._method) {
        const method = req.body._method
        delete req.body._method 
        //this will delete if type="hidden" and ._method used  
     return method
}
}))
//this enables us to make our own methods like PATCH and POST

//defining our own middleware, so must call next()
//but don't require next in existing middleware:
app.use((req, res, next) => {
    res.locals.username = req.cookies.username || ""
    next()
})

//CREATE ROUTERS TO ACCESS OUR SERVER
app.use("/clucks", clucksRouter)
app.use("/", baseRouter)


const PORT = process.env.PORT || 3000
const DOMAIN = "localhost"
app.listen(PORT, DOMAIN, () => {
    console.log(`Listening at http://${DOMAIN}:${PORT} in ${app.get('env')} environment`)
})