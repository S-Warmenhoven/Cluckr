const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('')
})

//get the form
router.get("/sign_in", (req, res) => {
    res.render("sign_in")
})

//add a cookie
router.post("/sign_in", (req, res) => {
    const ONE_DAY = new Date(Date.now() + 1000 * 60 * 60 * 24)
    res.cookie(
        "username", 
        req.body.username,
        { expires: ONE_DAY }
    )
    res.redirect("/")
})

//create logout. no get because we are only going
//to use it to redirect to home page
//we use "delete" insetad of post for convention
//but "post" also works
//this will delete the cookie
router.delete("/logout", (req, res) => {
    res.clearCookie("username")
    res.redirect("/")
})

module.exports = router
