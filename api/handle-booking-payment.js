const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.post('/handle-booking-payment', async (req, res) => {
  const { amount, currency, paymentMethodId, coachAccountId } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: currency,
      payment_method: paymentMethodId,
      confirm: true,
    });

    const serviceFee = amount * 0.15; // 15% service fee
    const coachPayout = amount - serviceFee;

    const transfer = await stripe.transfers.create({
      amount: coachPayout,
      currency: currency,
      destination: coachAccountId,
    });

    res.status(200).json({ paymentIntent, transfer });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
