const router = require('express').Router();
const knex = require("../db/queries");

router.get('/', (req, res) => {
    //this code will run async:
    knex
    .getAll()
    .orderBy("createdAt", "DESC")
    //this code will run synchronously:
    .then(clucks => {
        res.render("clucks", {
            clucks: clucks
        });
    });
});


//To get us the form to fill out
router.get("/new", (req, res) => {
    res.render("new")
});

//This is to create a new Cluck
router.post('/', (req, res) => {
    if (req.cookies.username) {
        knex
         .new({
            username: req.cookies.username,
            content: req.body.content,
            image_url : req.body.image_url
        })
        .into("clucks")
        .returning("*")
        .then(cluck => {
          res.redirect("/clucks")
        })
    } else {
            res.redirect("/sign_in")
        
    }
})
  
module.exports = router
  