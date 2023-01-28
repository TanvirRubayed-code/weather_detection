const express = require('express')
const cors = require('cors')
const mongodb = require('mongodb')

const { MongoClient } = mongodb

const app = express()
app.use(cors())
require('dotenv').config()
app.use(express.json())
const port = 4000
const url = "mongodb+srv://weather_detection:weather_detection12345@cluster0.pz1hxyg.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true })

async function server() {
    try {
        await client.connect()
        const database = client.db("Weather_Database")
        const weatherCollection = database.collection("weather")
        const userCollection = database.collection("users")

        app.get('/users', async (req, res) => {
            const result = await userCollection.find({}).toArray();
            console.log(result)
            res.json(result);
        })
        app.get('/users/:userName', async (req, res) => {
            const userName = req.params.userName;
            const filter = { userName }
            const result = await userCollection.findOne(filter);
            res.json(result == null ? false : true)
        })
        app.get('/user_login/:userName', async (req, res) => {
            const userName = req.params.userName;
            const filter = { userName : userName }
            const result = await userCollection.findOne(filter);
            res.json(result)
        })
        app.post('/users', async (req, res) => {
            const finalData = req.body;
            const result = await userCollection.insertOne(finalData);
            res.json(result)
        })
        app.get('/weather', async (req, res) => {
            //const filter = {"class": {$lte: 2}}
            const result = await userCollection.find({}).toArray();
            res.json(result);
        })
    }
    finally {
    }
}

server().catch()
app.get('/', (req, res) => {
    res.json('Hello World')
})

app.listen(port, () => {
    console.log(port);
})