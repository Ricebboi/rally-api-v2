const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.post('/create-coach-account', async (req, res) => {
  const { email, firstName, lastName } = req.body;
  try {
    const account = await stripe.accounts.create({
      type: 'express',
      email: email,
    });
    res.status(200).json({ accountId: account.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
