const dbjson = require("../db/db.json")
const fs = require("fs")
const path = require("path")




module.exports = (app) => {

    app.get('/api/notes', (req, res) => {
        fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
            if (err) throw (err)
            else (console.log(data))
            data = JSON.parse(data)
            console.log(data)
            res.json(data)
        })
        

    });


    app.post('/api/notes', (req, res) => {
        dbjson.push(req.body)


        //how to get post route to render a page//

        //data is saving but not rendering//
    });
    // work on this with res. 
}

// app.delete("/api/notes/:id", (req, res) => {
//     const deleteApp = req.params.id
//     console.log (deleteApp)

// })

//     //// FIGURE OUT HOW TO DO BONUS
