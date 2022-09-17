const router = require("express").Router();
const KEY = "sk_test_51Ikj2jAzXKqWoNArUTz8UF1Lrwy0Dek6vqDKmMxCv3ong7IVOuDzBI5bAENeLDPw4MtuRluSDfiGajJceKAP54kO00fLBmV2UV"
const stripe = require("stripe")(KEY);


router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
