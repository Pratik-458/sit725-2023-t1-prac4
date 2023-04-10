var express = require("express");
var app = express();
const { MongoClient } = require("mongodb");

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const uri =
  "mongodb+srv://pratik458:Azure%401325@cluster0.ypwmqzn.mongodb.net/?retryWrites=true&w=majority";
let mongoClient = new MongoClient(uri, { useNewUrlParser: true });
var port = process.env.port || 3000;
let dbcollection;

app.get("/", (req, res) => {
  res.render("index.html");
});

function dbconnection(collectionName) {
  mongoClient.connect((error) => {
    if (!error) {
      dbcollection = mongoClient.db("test").collection(collectionName);
      console.log(dbcollection);
    } else {
      console.log(error);
      process.exit(1);
    }
  });
}

function getPokemonById(req) {
  return dbcollection.find({ title: req }).toArray();
}

function getAllPokemons(callBack) {
  dbcollection.find({}).toArray(callBack);
}

function addPokemon(pokemon, callBack) {
  dbcollection.insertOne(pokemon, callBack);
}

async function updatePokemon(pokemon, name, callBack) {
  var objToUpdate = await getPokemonById(name);
  console.log(objToUpdate);
  console.log(pokemon);
  var query = { title: name };
  dbcollection.updateOne(query, {
    $set: pokemon,
    callBack,
  });
}

app.get("/api/pokemon", (req, res) => {
  getAllPokemons((error, result) => {
    if (!error) {
      res.json({ statusCode: 200, data: result, message: "success!" });
    } else {
      console.log(error);
    }
  });
});

app.get("/api/pokemonbyid", (req, res) => {
  getPokemonById((error, result) => {
    if (!error) {
      res.json({ statusCode: 200, data: result, message: "success!" });
    } else {
      console.log(error);
    }
  });
});

app.post("/api/pokemon", (req, res) => {
  let pokemon = req.body;
  addPokemon(pokemon, (error, result) => {
    if (!error) {
      res.json({ statusCode: 200, data: result, message: "Added" });
    } else {
      console.log(error);
      res.json({ statusCode: 400, data: error, message: "Failed" });
    }
  });
});

app.put("/api/pokemon/:name", async (req, res) => {
  let pokemon = req.body;
  let title = req.params.name;
  await updatePokemon(pokemon, title, (error, result) => {
    if (!error) {
      res.json({ statusCode: 200, data: result, message: "Updated" });
    } else {
      console.log(error);
      res.json({ statusCode: 400, data: error, message: "Failed" });
    }
  });
});

app.listen(port, () => {
  console.log("listening on port:" + port);
  dbconnection("Pokemons");
});
