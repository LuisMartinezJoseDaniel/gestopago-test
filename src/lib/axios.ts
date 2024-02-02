// lib/axios.js

import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.GESTOPAGO_SERVER}${process.env.GESTOPAGO_CONTEXT}`, // Replace with your API endpoint
  // timeout: 5000, // Set a timeout for requests (in milliseconds)
  headers: {
    "Content-Type": "text/xml", // Set the default content type for request headers
    Authorization: `Bearer ${process.env.TOKEN}`, // Set authorization headers if needed
    "X-API-Key": `${process.env.X_API_KEY}`,
  },
});

export default instance;
