const ordercreater = require("../models/order");
const stripe = require("stripe")(process.env.STRIPESECRETEKEY);

const checkoutform = async (req, res) => {
  try {
    console.log(
      req.body.cart.map((item) => {
        return {
          price_data: {
            currency: "inr",
            product_data: {
              name: item.name,
            },
            unit_amount: Number(item.price.slice(1).split(".").join("")),
          },
          quantity: item.quantity,
        };
      })
    );
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.cart.map((item) => {
        return {
          price_data: {
            currency: "inr",
            product_data: {
              name: item.name,
            },
            unit_amount: Number(item.price.slice(1).split(".").join("")),
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${"http://localhost:3000"}/success`,
      cancel_url: `${"http://localhost:3000"}/addtocart`,
    });
    console.log(session.url);
    res.json({ url: session.url });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.message });
  }
};

const confirmorder = async (req, res) => {
  const data = await ordercreater.insertMany([
    { order: JSON.stringify(req.body.cart), email: req.body.email },
  ]);
  console.log(data);
  // res.cookie('cart', JSON.stringify([]));

  res.json("success");
};

module.exports = { checkoutform, confirmorder };
