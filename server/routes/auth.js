const express = require("express");
require("dotenv").config({ path: "../config.env" });

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const authRoutes = express.Router();

const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTH_SECRET,
  baseURL: 'http://localhost:8000',
  clientID: 'oIkUyRiGeSZa7OIrMPB4iavcBX24ENvV',
  issuerBaseURL: 'https://dev-rr6ok002l4118r3h.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
authRoutes.use(auth(config));

// req.isAuthenticated is provided from the auth router
authRoutes.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

module.exports = authRoutes;
