# CRUD API för BondFilmer
    Den här projekt här för målet att lära mig hur man kan implementera en API, skappa ett CRUD (Create, Read, Update och Delete) och en API-nyckel.

## Installation och börjar med projekten.

1. Skappad med npm init -y en package.json
2. Skappad index.js
3. Installera express med: npm i express
4. Skappad mockData.js is an array of objects, med alla filmer
    och exporterade det med module.export = mockData; 
5. Skappad nodemon med npm i --save-dev nodemon
    och add till scripts. "dev":"nodemon index.js"
6. Skappad routes folder och movies.js file in i.
7. I index.js link express, routes, app och port som kommer att använda, samtidigt som:
    app.use  
    app.get 
    app.listen
8. I routes/movies.js link också express, router och mockData, samtidigt som 
module.export=router;  

### Postman

Vi kommer att använda postman för att hjälpa oss att se den data som vi vill skappar, delete eller updatera.

https://www.postman.com

Först vi skapa en ny collection, och man kommer att välja, GET, POST, DELETE eller PUT, enlight typ av router som vi gör i värje övning.

Sen skriver den http med den localhost som vi har valt och slutar med id om det behövs.

### Hämta alla movies

 Vi gör det med router.get
 Eftsom har vi declarera redan let movies=mockData;
 -url: är tömt: "/"

### Hämta movies med ID

 Objekten för Id är imdbID
 Då vi använder router.get
 med url "/:imdbID"
 och vi hittar movie med comand find, när movie är equal Id

### Delete movie

 Vi använder router.delete
 Först vi letar efter den movie med Id och sen med comand filter, vi kan göra en ny data med den Id som är inte den samma Id som vi har hittat.

### Skappa en ny movie

 vi declarera och initiera en ny variable för nextId med vadsomhelst nummer.
 vi använder router.post
 vi requiere body for att skriva den ny movie och skappa en ny id med nextId++, och sen use comand push för addera till array

 -I postman:
     Gå till "body" och välja "raw" och "JSON".
    Då du kan skriva den objekter typ: "Title", "Year", "Genre"
    Och klicka: SEND. För att skapa en ny movie.

### Uppdatera movie
 vi använder router.put 
 med url: "/:id"
 med comand findIndex when the id is the one
 we can change the body and update in the index.

 -I postman:
     Gå till "body" och välja "raw" och "JSON".
    Då du kan andrat i body den data som du vill updatera och sen clicka: SEND.


