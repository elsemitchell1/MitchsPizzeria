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
    "ON": 0.13,
    "QC": 0.14975,
    "BC": 0.12,
    "AB": 0.05,
}

const constructOrderDescription = (items) => {
    return items.map(item => `${item.quantity} x ${item.name}`).join(", ");
};
const calculateTax = (amount, province) => {
    console.log(province);
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
        console.log(req.body);
        const items = req.body.items;
        const province = req.body.items;
        console.log("Items: " + items + ", Province: " + province);
        const amount = calculateOrderAmount(items);
        const tax = calculateTax(amount, province);
        const totalAmount = amount + tax;
        const description = constructOrderDescription(items);

        // Create a PaymentIntent with the order amount and currency
        const paymentIntent = await stripe.paymentIntents.create({
            currency: "cad",
            amount: totalAmount,
            description: description,
            automatic_payment_methods: {
                enabled: true,
            },
            // You can add more parameters here as needed
        });

        res.send({
            clientSecret: paymentIntent.client_secret,
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