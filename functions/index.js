const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Kxw8qSCnhk4UUkO8e91AgOZBQz4v9HrxAStAl45cRQJ6yN6QvNx6erudVbX3Nj91BvEvnP9EVpStcHGqni5QPp900V2gAzXqE"
);

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payment/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment request recieved BOOOOOOOOOOM    !", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/furnisell-5ba89/us-central1/api
