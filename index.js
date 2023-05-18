const express = require("express");
const movies = require("./routes/movies");

const app = express();
const port = 8000;

app.use(express.json());

const validApiKey = "100";

const authenticateApiKey = (req, res, next) => {
    const apiKey = req.query.apiKey;
    console.log(req.query);

    if(!apiKey) {
        //returnera 401
        return res
        .status(401)
        .json ({message: "Din api key saknas."})

    }
        //Vill vi se om api nyckeln är korrekt. Om den inte är det ->
        // returnera en 401
    if (apiKey !== validApiKey) {
        return res
        .status(403)
        .json({message: "Invalid API key"});
    }
        // Om vi har kommit hit, så vill vi skicka vidare användare till API routen
        //next()
        next();
};

app.use((req, res, next) => {
    authenticateApiKey(req, res, next);
});

app.use("/movies", movies);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

