const express = require('express');
const app = express();

app.get('/login', (req, res) => {
    // ICI : la donnée vient de l'URL (source non fiable)
    const email = req.query.email; 
    
    // L'injection SQL classique
    const query = "SELECT * FROM users WHERE email = '" + email + "'";
    
    db.execute(query); 
});
