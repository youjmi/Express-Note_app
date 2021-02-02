// Dependencies

const express = require('express');
const path = require("path")


// Sets up the Express App

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static(__dirname + "/Develop/public/assets/js"))
app.use(express.static(__dirname + "/Develop/public"))

// Routes
require("./Develop/routes/apiroute")(app)
require("./Develop/routes/htmlroute")(app)



app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
