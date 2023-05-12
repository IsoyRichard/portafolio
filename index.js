const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
    console.log(req);
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(() => {
    console.log("running server");
});
