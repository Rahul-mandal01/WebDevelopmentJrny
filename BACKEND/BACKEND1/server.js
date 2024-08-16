// step1: create a folder
// step2: move into that folder
// step3: npm init -y
// step4: open folder using VSCode
// step5: npm i express
// step6: create server.js

// Instantiate Server
const express = require('express');
const app = express();

// used to parse req.body in express -> PUT or POST
const bodyParser = require('body-parser');

// specifically parse JSON data & add it to the request.body object
app.use(bodyParser.json());

// activate the server on 3000 port
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// Routes
app.get('/', (request, response) => {
    response.send("Hello Jee, kaise ho saare!");
});

app.post('/api/cars', (request, response) => {
    const { name, brand } = request.body;
    console.log(name);
    console.log(brand);
    response.send("Car Submitted Successfully.");
});

const mongoose = require('mongoose');

// Connect to MongoDB database named 'myDatabase' on localhost:27017
 mongoose.connect('mongodb://127.0.0.1:27017/myDataBase') 
        .then(() => {
            console.log("DB connection successful.");
        })
        .catch((err) => {
            console.log("DB connection error");
        });



