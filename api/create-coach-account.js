const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
<<<<<<< HEAD
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

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
=======
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

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
>>>>>>> f364e4d360d208a6b6bdea13e56452f98ee186a9
};
