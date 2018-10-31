const express = require("express")
const path = require("path")

const app = express()
const publicFolderPath = path.join(__dirname, "public")

app.use(express.json())
app.use(express.static(publicFolderPath))

const users = []


app.post("/api/user", function(req, res) {

    let userObject = req.body
    checkUserName(userObject, res)
})

function checkUserName(userObject, res) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].userName === userObject.userName) {
            res.status(409)
            res.send({ message: "Error, username Exists" })
            return
        }
    }
    userObject.idNumber = Math.floor(Math.random() * 18000)
    users.push(userObject)
        // res.status(201)
    res.send(userObject)
        // console.log(res)
    return
}

app.listen(3000, function() { console.log("I am working") });

