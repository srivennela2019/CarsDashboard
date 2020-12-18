const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const carRouter = require('./routes');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/dashboard', carRouter);
app.listen(3000,()=>{
    console.log("Running on port 3000")
})