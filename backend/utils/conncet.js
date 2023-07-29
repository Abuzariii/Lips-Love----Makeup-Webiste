const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

async function connect() {
  const client = await MongoClient.connect(
    "mongodb+srv://abuzariii:users1234@users-cluster.mcqhi1q.mongodb.net/?retryWrites=true&w=majority"
  );
  // Access the database and collection
  const db = client.db();
  const collection = db.collection("Makeup Data");
  return collection;
}

module.exports = { connect };
