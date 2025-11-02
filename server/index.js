const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

// require cors
const cors = require('cors');

// import mongodb form drivers
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Smart-Deals:wQD6vJAidDec0Txm@ic-cluster.qdhi4wp.mongodb.net/?appName=ic-cluster";


// middleware
app.use(cors());
app.use(express.json());

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
    try{
        await client.connect();

        /* collection point start */
        const DataBase = client.db("Smart_DB");
        const productCollection = DataBase.collection("products")
        /* collection point end */


        /* products all API method start */
        // get method
        app.get('/products', async(req, res) => {
            const cursor = productCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        });

        // post method 
        app.post('/products', async(req, res) => {
            const newProducts = req.body;
            const result = await productCollection.insertOne(newProducts);
            res.send(result);
        });
        /* products all API method end */


        // Send a ping to confirm a successful connection
        await client.db('admin').command({ ping: 1 })
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
    finally{

    }
}
run().catch(console.dir)



app.get('/', (req, res) => {
    res.send("Hello")
});


app.listen(port, ()=> {
    console.log(`server is running on http://localhost:${port}`);
});

