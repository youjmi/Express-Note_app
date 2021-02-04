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
        fs.readFile(path.join(__dirname,"../db/db.json"),"utf8",(err,data)=> {
            if (err) throw (err)
            else (console.log (data))
            data = JSON.parse(data)
            console.log(data)
            data.push(req.body)
            console.log(data)

            fs.writeFile(path.join(__dirname,"../db/db.json"),JSON.stringify(data),(err) => {
                if (err) throw (err)
                res.json(data)
            })
        })

    });

}

// app.delete("/api/notes/:id", (req, res) => {
//     const deleteApp = req.params.id
//     console.log (deleteApp)

// })

// ADD NEW NOTE WITH ID IN POST. THEN CALL AND DELETE IN DBJSON

//loop thru the data. and find what to remove. 


//     //// FIGURE OUT HOW TO DO BONUS
