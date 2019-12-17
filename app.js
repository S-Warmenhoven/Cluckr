const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");
const app = express();

//Import our routes:
const baseRouter = require('./routes/index');
const clucksRouter = require('./routes/clucks');

//Setup our view engine to ejs
app.set("view engine", "ejs");

//use middleware:
app.use(logger())
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "/public")));

app.use(methodOverride((req, res) => {
    if (req.body && req.body._method) {
        const method = req.body._method
        delete req.body._method  
     return method
}
}))

app.use((req, res, next) => {
    res.locals.username = req.cookies.username || ""
    next()
});


//Create Routers to access our server
app.use("/clucks", clucksRouter)
app.use("/", baseRouter)


const PORT = process.env.PORT || 3000
const DOMAIN = "localhost"
app.listen(PORT, DOMAIN, () => {
    console.log(`Listening at http://${DOMAIN}:${PORT} in ${app.get('env')} environment`)
})