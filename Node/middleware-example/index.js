const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log(`URL: ${req.url}`);
    next();
});
app.use((req, res, next) => {
    console.log(`Query String: ${JSON.stringify(req.query)}`);
    next();
});

app.listen(5000, () => console.log('Running on port 5000'));