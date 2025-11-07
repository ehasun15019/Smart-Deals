const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// require cors
const cors = require("cors");

// import mongodb form drivers
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://Smart-Deals:wQD6vJAidDec0Txm@ic-cluster.qdhi4wp.mongodb.net/?appName=ic-cluster";

// middleware
app.use(cors());
app.use(express.json());

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    /* collection point start */
    const DataBase = client.db("Smart_DB");
    const productCollection = DataBase.collection("products");
    const userCollection = DataBase.collection("users");
    const wishListCollection = DataBase.collection("wishList");
    /* collection point end */

    /* products all API method start */
    // get method for getting all data
    app.get("/products", async (req, res) => {
      const cursor = productCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    //get method for getting 6 data
    app.get("/recent-products", async (req, res) => {
      const cursor = productCollection.find().sort({ created_at: -1 }).limit(6);
      const result = await cursor.toArray();
      res.send(result);
    });

    // get method for page details
    app.get("/products/:id", async (req, res) => {
      const productID = req.params.id;
      const query = {
        _id: new ObjectId(productID),
      };
      const result = await productCollection.findOne(query);

      res.send(result);
    });

    // post method for all data send in MongoDB (primary)
    /* app.post("/products", async (req, res) => {
      const newProducts = req.body;
      const result = await productCollection.insertOne(newProducts);
      res.send(result);
    }); */

    // post method for all data send in MongoDB
    app.post("/products", async (req, res) => {
      try {
        const NewProduct = req.body;

        // basic validation
        if (
          !NewProduct.title ||
          !NewProduct.category ||
          !NewProduct.min_price ||
          !NewProduct.seller_email
        ) {
          return res.status(400).send({ message: "Missing required fields" });
        }

        // add created_at field automatically
        NewProduct.created_at = new Date();

        const result = await productCollection.insertOne(NewProduct);

        res.send({
          success: true,
          message: "Product created successfully!",
          data: result,
        });
      } catch (error) {
        console.error("Error inserting product:", error);
        res.status(500).send({ success: false, message: "Server error" });
      }
    });
    /* products all API method end */

    /* user all API method start */
    //get method for all users
    app.get("/users", async (req, res) => {
      const cursor = userCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // post method for user data send in MongoDB
    app.post("/users", async (req, res) => {
      const newUser = req.body;
      const email = req.body.email;
      const query = { email: email };

      const existingUser = await userCollection.findOne(query);
      if (existingUser) {
        res.send({
          message: "user already exists",
        });
      } else {
        const result = await userCollection.insertOne(newUser);
        res.send(result);
      }
    });
    /* user all API method end */

    /* wishlist all API method start */
    //post method for wishlist data send in MongoDB
    app.post("/whishList", async (req, res) => {
      const product = req.body;

      const existingItem = await wishListCollection.findOne({
        product_id: product.product_id,
      });

      if (existingItem) {
        return res.send({
          success: false,
          message: "Product already in wishList",
        });
      }

      const result = await wishListCollection.insertOne(product);
      res.send({
        success: true,
        message: "Product added to wishList",
        data: result,
      });
    });

    // get method for getting all wishlist data
    app.get("/get-wishList", async (req, res) => {
      const cursor = wishListCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    /* wishlist all API method end */

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
