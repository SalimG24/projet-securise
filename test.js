const express = require('express');
const app = express();

app.get('/search-user', (req, res) => {
    const userEmail = req.query.email; // Source non fiable
    const sqlQuery = "SELECT * FROM users WHERE email = '" + userEmail + "'"; // Faille
    db.execute(sqlQuery); 
});
