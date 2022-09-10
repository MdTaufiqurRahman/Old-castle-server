const router = require("express").Router();

router.get("/usertest", (req, res) => {
    res.send('user test is successful');
});

router.post("/usertestpost", (req, res) => {
    const userName = req.body.userName;
    res.send('your user name is ' + userName);
})

module.exports = router;
