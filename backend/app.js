const express = require("express");
const app = express();

const appid = process.env.APPID
const timeouts = [20000, 10000, 15000];
const timeout =  Math.floor(Math.random() * timeouts.length);

app.get('/', (req, res) => {
    res.send(`Hello from ${appid}`);
});

const server = app.listen(appid, (err) => {
    console.log(`Termiator Server running on ${appid}`);
}); 

console.log(`Timeout ${timeouts[timeout]}`)

setTimeout(()=>{
    console.log(`Received kill signal, shutting down gracefully`);
    server.close(() => {
        console.log(`Closed out connection of ${appid}`);
        process.exit(0);
    });
}, timeouts[timeout]);