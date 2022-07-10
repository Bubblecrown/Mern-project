const express = require("express")
const morgan = require("morgan") // report bug request | ดักตัว request
const cors = require("cors") // allow resource 

const mongoose = require("mongoose")
require("dotenv").config() // Setting-variable access: port-api-database-token use process.env.variableName

const app = express()

//middleware
app.use(express.json()) // ให้บริการกับ rest api json->client
app.use(cors())
app.use(morgan("dev"))

//route path to sent request to server | จะให้ตัว server response อะไรกลับไป -- json

app.get("*", (req, res) => {
    res.json({
        data:"message from server"
    })
}) // route whatever url that run server out

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`start server in port ${port}`))
