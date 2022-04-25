const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express();

app.get('/', (req, res) => {
    res.send("ola mundo");
})

app.post("/")

module.exports = app;