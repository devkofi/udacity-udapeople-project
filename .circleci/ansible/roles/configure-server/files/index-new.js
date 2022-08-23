const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
    origin: "http://s3-bucket/index.html"
}));

app.get("/data", (req, res) => {
    res.json("Project 3 - Udapeople by Kofi Nyarko Kumi!")
});

app.listen(3000);