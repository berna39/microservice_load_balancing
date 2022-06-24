const express = require("express");
const app = express();

const appid = process.env.APPID

app.get('/', (req, res) => {
    res.send(`Hello from ${appid}`);
});

app.listen(appid, (err) => {
    console.log(`Termiator Server running on ${appid}`);
}); 