// To get all of the data, simply Use this code

const MongoClient = require("mongodb").MongoClient;
app.get("/data", async (req, res) => {
  const client = await MongoClient.connect(
    "mongodb+srv://abuzariii:users1234@users-cluster.mcqhi1q.mongodb.net/?retryWrites=true&w=majority"
  );

  // Access the database and collection
  const db = client.db();
  const collection = db.collection("Makeup Data");

  // Fetch all documents from the collection
  const data = await collection.find({}).toArray();

  res.status(201).json(data);
});
