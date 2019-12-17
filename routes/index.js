const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('')
})

//get the form
router.get("/sign_in", (req, res) => {
    res.render("sign_in")
})

//add a cookie for sign_in
router.post("/sign_in", (req, res) => {
    const ONE_DAY = new Date(Date.now() + 1000 * 60 * 60 * 24)
    res.cookie(
        "username", 
        req.body.username,
        { expires: ONE_DAY }
    )
    res.redirect("/")
})

//add a delete cookie function for logout
router.delete("/logout", (req, res) => {
    res.clearCookie("username")
    res.redirect("/")
})

module.exports = router
