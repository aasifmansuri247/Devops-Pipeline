const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("this app running by GitHub Pipeline + Docker Successfully! Version 2");
});

app.get("/health", (req, res) => {
    res.json({ status: "OK" });
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});