const dbjson = require("../db/db.json")



module.exports = (app) => {

    app.get('/api/notes', (req, res) => {
        res.json(dbjson)
    });
    app.post('/api/notes', (req, res) => {
        dbjson.push(req.body)
    });

}

// app.delete("/api/notes/:id", (req, res) => {
//     //// FIGURE OUT HOW TO DO BONUS
// })