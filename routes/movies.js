const express = require("express");
const router = express.Router();
const mockData = require("../mockData");

let movies = mockData;

router.get("/", (req, res) => {
    res.json(movies);
});

router.get("/:imdbID", (req, res) => {
    const imdbID = req.params.imdbID;
    const movie = movies.find((movie) => movie.imdbID === imdbID);

    if(!movie) {
        return res
        .status(404)
        .json ({message: "Not movie found"});
    }
    res.json(movie)
});

router.delete("/:imdbID", (req, res) => {
    const imdbID = req.params.imdbID;
    const movie = movies.find((movie) => movie.imdbID === imdbID);

    if(!movie) {
        return res
        .status(404)
        .json ({message: "Not movie found"});
    }
    const newData = movies.filter((movie) => movie.imdbID !== imdbID);
    movies = newData;

    res.json({message: "Den movie har blivit borttagen!"});
})

let nextId = 100 //skapa ett nytt unikt ID för nya movies

router.post("/", (req, res) => {
    const movie = req.body.movie; 
    
    const newMovie = {
        ...movie,
        imdbID: nextId.toString()
    };

    nextId++;

    movies.push(newMovie);
    res.json(newMovie);
});

router.put("/:imdbID", (req, res) => {
    const imdbID = req.params.imdbID;
    const movie = req.body.movie;

    const index = movies.findIndex((movie) => movie.imdbID === imdbID );

    if (index === -1) {
        return res
        .status (404)
        .json ({message: "Movie not found"});
    }

    const updatedMovie = { ...movies[index], ...movie};
    movies[index] = updatedMovie;

    res.json(updatedMovie);

})



module.exports = router;
