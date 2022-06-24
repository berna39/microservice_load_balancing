const express = require('express');
const app = express();

const appid = process.env.APPID;

app.get('/', (req, res) => {
    res.send(`Hello from ${appid}`);
});

app.listen(appid, () => {
    console.log(`Cyborg server is up and running on ${appid}`);    
})