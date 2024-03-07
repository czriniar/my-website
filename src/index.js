const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
    res.render("pages/index");
});

app.get("/about", async (req, res) => {
    res.render("pages/about");
});

app.listen(8080, () => {
    console.log("App online! http://localhost:8080");
});