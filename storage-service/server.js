const express = require('express');
const app = express();

const appid = process.env.APPID;

app.listen(appid, () => {
    console.log(`Storage service up and running`);
});