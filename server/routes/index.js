
const express = require("express");
const router = express.Router();
const getClient = require('.././db');
// get all Cars
getCars = (client,res) =>{
  const collection = client.db("cars").collection("cars");
   collection.find({}).toArray(function(err, docs) {
    res.json(docs)
  });
}
// get individual car data
getCar = (client,req,res) =>{
  const collection = client.db("cars").collection("cars");
   collection.find({_id:req.params.id}).toArray(function(err, docs) {
    res.json(docs)
  });
}
// Although it is not used in this particular app , Just created a route for development sake.
insertCar = (client,req,res) =>{
  const collection = client.db("cars").collection("cars");
  const car = {
    make:req.body.make,
    model: req.body.model,
    date: req.body.date,
    vin: req.body.vin,
    price: req.body.price,
    released:req.body.released ,
    picture_url: req.body.picture_url
    }
   collection.insertOne(car,function(err, docs) {
    res.json({message:'200 OK'})
  });
}
// Get all cars data
router.get("/cars",function(req, res) {
     getClient(function(err,client){
      if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
      }
       getCars(client,res);
     })
  });
  // Get individual car data
  router.get("/car/:id",function(req, res) {
    getClient(function(err,client){
     if(err) {
       console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
     }
      getCar(client,req,res);
    })
 });
//Send car data to the server
 router.post("/",function(req, res) {
  getClient(function(err,client){
   if(err) {
     console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
    insertCars(client,req,res);
  })
});


module.exports = router;
 