const express = require("express");
const cors = require("cors");
const app = express();
const {resolve} = require("path");
// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2022-08-01",
});

app.use(cors());
app.use(express.json());

app.use(express.static("../public"));
app.get("/", (req, res) => {
    const path = resolve("../public" + "/index.html")
    res.sendFile(path);
});

const taxRates = {
    ON: 0.13,
    BC: 0.12,
    AB: 0.05,
    MB: 0.12,
    NB: 0.15,
    NL: 0.15,
    NT: 0.05,
    NS: 0.15,
    NU: 0.05,
    PE: 0.15,
    QC: 0.14975,
    SK: 0.11,
    YT: 0.05,
}

const constructOrderDescription = (items) => {
    return items.map(item => `${item.quantity} x ${item.name}`).join(", ");
};
const calculateTax = (amount, province) => {
    const taxRate = taxRates[province] || 0;
    return amount * taxRate;
}

app.get("/config", (req, res) => {
    res.send({
        publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    });
});

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return items.reduce((total, item) => total + (item.price * item.quantity) * 100, 0);
};

app.post("/create-payment-intent", async (req, res) => {

    try {
        const items = req.body.items;
        const description = constructOrderDescription(items);

        // Create a PaymentIntent with the order amount and currency
        const paymentIntent = await stripe.paymentIntents.create({
            currency: "cad",
            amount: calculateOrderAmount(items),
            description: description,
            automatic_payment_methods: {
                enabled: true,
            },
            // You can add more parameters here as needed
        });

        res.send({
            clientSecret: paymentIntent.client_secret,
            paymentIntentId: paymentIntent.id
        });
    } catch (e) {
        return res.status(400).send({
            error: {
                message: e.message,
            },
        });
    }
});

app.post("/update-payment-intent", async (req, res) => {
    try {
        const items = req.body.items;
        const province = req.body.province;
        const paymentIntentId = req.body.paymentIntentId;
        const amount = calculateOrderAmount(items);
        const tax = calculateTax(amount, province);
        const totalAmount = Math.round(amount + tax);
        const description = constructOrderDescription(items);

        // Update the payment intent with the new total amount
        const updatedPaymentIntent = await stripe.paymentIntents.update(paymentIntentId, {
            amount: totalAmount,
            description: description,
        });

        res.send({
            clientSecret: updatedPaymentIntent.client_secret,
        });
    } catch (e) {
        return res.status(400).send({
            error: {
                message: e.message,
            },
        });
    }
});

app.listen(4242, () => console.log("Node server listening on port 4242!"));