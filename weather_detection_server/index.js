const express = require('express')
const cors = require('cors')
const mongodb = require('mongodb')
var bodyParser = require('body-parser')



const { MongoClient } = mongodb

const app = express()

app.use(cors())
require('dotenv').config()

app.use(bodyParser.json({ limit: '50mb' }));


const port = 4000
const url = "mongodb+srv://weather_detection:weather_detection12345@cluster0.pz1hxyg.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true })

const ObjectId = mongodb.ObjectId;

async function server() {
    try {
        await client.connect()
        const database = client.db("Weather_Database")
        const weatherCollection = database.collection("weather")
        const userCollection = database.collection("users")
        const postCollection = database.collection("posts");
        const likeDislikeCollection = database.collection("like_dislike");
        const commentCollection = database.collection("comments");


        app.get("/posts", async (req, res) => {
            const { post_key } = req.query;
            console.log(req.query)
        })

        // ----------------------users post submit to database -------------------

        app.post('/post-data', async (req, res) => {

            const fullpost = req.body
            // console.log(req.body);
            if (fullpost.postTitle != "") {
                const result = await postCollection.insertOne(fullpost);
                res.send("success")
            }

        })


        // ----------------------- retrive all users posts ----------------

        const ITEMS_PER_PAGE = 4;

        app.get('/all-posts', async (req, res) => {
            const page = req.query.page || 1;


            const skip = (page - 1) * ITEMS_PER_PAGE;


            const count = await postCollection.estimatedDocumentCount({});


            const result = await postCollection.find({}).skip(skip).limit(ITEMS_PER_PAGE).toArray();
            res.json({ count, result });
        })


        //---------------------like / dislike ----------------------------

        app.get("/get-like-dislike/:id", async (req, res) => {
            const id = req.params.id;
            const filter = {
                postID: ObjectId(id)
            };
            const cursor = likeDislikeCollection.find(filter);
            const result = await cursor.toArray();
            res.json(result);
        });

        app.post("/get-like-or-dislike/:id", async (req, res) => {
            const id = req.params.id;
            const { activeState } = req.body;            
            console.log(activeState);

            const filter = {
                postID: ObjectId(id),
                activeState: activeState
            };
            
            const cursor = likeDislikeCollection.find(filter);
            const result = await cursor.toArray();
            res.json(result);
        });

        app.post("/get-user-like-dislike/:id", async (req, res) => {
            const id = req.params.id;
            const { userName } = req.body;            
            console.log(userName);

            const filter = {
                postID: ObjectId(id),
                userName: userName
            };
            const result = await likeDislikeCollection.findOne(filter);
            res.json(result);
        });

        app.put('/update-like-dislike/:id', async (req, res) => {
            const id = req.params.id;
            const { userName, activeState } = req.body;            
            console.log(userName);

            const filter = {
                postID: ObjectId(id),
                userName: userName
            };
            
            const result = await likeDislikeCollection.updateOne(filter, {
              $set: {
                activeState: activeState
              }
            })
            res.json(result);
            // const id = req.params.id;
            // const { userName, activeState } = req.body;
            // const doc = {
            //     postID: ObjectId(id),
            //     userName,
            //     activeState
            // };
            // const filter = {
            //   _id: ObjectId(id),
            //   userName: userName
            // }

            // const result = await likeDislikeCollection.updateOne(filter, {
            //   $set: {
            //     activeState: "like"
            //   }
            // })
            // res.json(result);
          })

        // app.post("/get-user-like-dislike/:id", async (req, res) => {
        //     const id = req.params.id;
        //     const  { userNames } = req.body;
        //     console.log(userNames);
        //     const filter = {
        //         postID: ObjectId(id)
        //     };
        //     const cursor = likeDislikeCollection.find(filter);
        //     const result = await cursor.toArray();
        //     res.json(result);
        // });

        app.post("/new-like-dislike/:id", async (req, res) => {
            const id = req.params.id;
            const { userName, activeState } = req.body;
            const doc = {
                postID: ObjectId(id),
                userName,
                activeState
            };
            console.log(doc);
            const result = await likeDislikeCollection.insertOne(doc);
            res.json(result);
        });




        //----------------get all comments from database------------------

        app.get("/comments/:id", async (req, res) => {
            const id = req.params.id;
            const filter = {
                postID: ObjectId(id)
            };
            const cursor = commentCollection.find(filter);
            const result = await cursor.toArray();
            res.json(result);
        });

        //---------------------submit comment to database----------------

        app.post("/comments/:id", async (req, res) => {
            const id = req.params.id;
            const { userName, comment } = req.body;
            const doc = {
                postID: ObjectId(id),
                userName,
                comment,
                comment_date: new Date().toISOString().replace('-', '/').split('T')[0].replace('-', '/')
            };
            // console.log(doc);
            const result = await commentCollection.insertOne(doc);
            res.json(result);
        });


        // --------------api to fetch all the user list and check username in frontend-------------



        // -------------------------fetch single post using title -------------------

        app.get('/single-post', async (req, res) => {
            const title = req.query.posttitle;
            // console.log(title);
            const result = await postCollection.find({ "postTitle": `${title}` }).toArray();
            res.json(result);
        })



        app.get('/users', async (req, res) => {
            const result = await userCollection.find({}).toArray();

            res.json(result);
        })

        // -------------------- user sign up data send to database -------------------

        app.post('/users', async (req, res) => {
            const finalData = req.body;
            const result = await userCollection.insertOne(finalData);
            res.json(result)
        })


        app.get('/users/:userName', async (req, res) => {
            const userName = req.params.userName;
            const filter = { userName }
            const result = await userCollection.findOne(filter);
            res.json(result == null ? false : true)
        })
        app.get('/user_login/:userName', async (req, res) => {
            const userName = req.params.userName;
            const filter = { userName: userName }
            const result = await userCollection.findOne(filter);
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