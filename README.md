This project contains a Node website.

Index.html serves the static elements
server.js creates a express server on local host port 3000 by default and routes to index.html to serve as home page.
JS and CSS files are in public folder. public/js/scripts.js handels the button clicks, the user details form and cards on home screen.

we are using JQuery for handling static code from JS file and Materialize to enhance the design of our page.
The CSS files are stored in public/css/styles.css here we are customising the look of our webpage.
The Images are saved in public/images folder.

to run the app
open terminal > write "npm run start" or "npx nodemon server.js"> open browser and visit http://localhost:3000 to load the home page.

Database : MongoDB
cluster name: cluster0
Database name: test
collection name: Pokemons

document example: 
_id:642e5e4bd6e6026adf4b0ff3,
title:"Pikachu",
image:"https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.p…",
link:"https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.p…",
description:"Pikachu is a short, chubby rodent Pokémon. It is covered in yellow fur…",

APIs

Get all pokemons: GET: /api/pokemon
Get pokemon by name: GET: /api/pokemon:name
create pokemon: POST: /api/pokemon body{title:"pokemon name", link"somelink", image:"path or url of image", description:"some description"}
update pokemon: PUT: /api/pokemon:name body{title:"pokemon name", link"somelink", image:"path or url of image", description:"some description"}
