
const MongoClient = require('mongodb').MongoClient;

// replace the uri string with your connection string.
const uri = "mongodb+srv://user1234:user1234@cluster0.s1ewf.mongodb.net/cars";

const getClient = (callback)=>{
  MongoClient.connect(uri,{ useUnifiedTopology: true }, callback);
 
}
module.exports = getClient;