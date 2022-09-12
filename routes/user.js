const router = require("express").Router();

router.get("/usertest", (req, res) => {
    res.send('user test is successful');
});

router.post("/usertestpost", (req, res) => {
    const username = req.body.username;
    res.send("your user name is: " + username);
})

module.exports = router;
