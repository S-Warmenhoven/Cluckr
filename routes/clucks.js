const router = require('express').Router()


//load knex module
const knex = require("../db/queries")

router.get('/', (req, res) => {
//this code will run async:
    knex
    .getAll()

    //this code will run synchronously:
    .then(clucks => {
        res.render("clucks", {
            //for render the second arg has to be an object
            clucks: clucks
            //if property:value is the same, you can just say { tasks }
        })
    })
})

//to get us the form to fill out
router.get("/new", (req, res) => {
    res.render("new")
})

//this is to create a new item: post
router.post('/', (req, res) => {
    if (req.cookies.username) {
        knex
         .new({
            username: req.cookies.username,
            content: req.body.content
        })
        .then(cluck => {
          res.redirect("/clucks")
        })
    } else {
        res.status(401)
        .send("You must sign in to start 'clucking' away.")
    }
})
  
  
  module.exports = router
  