const express = require('express') // This is the first step to create server import or require express.
const mongoose = require('mongoose')

const app = express()  // express started

/*
    / bhaneko root ho banesii main file run hunxa yo path maa
    req ~~~> request ho  ~~~~> server lai maagxau 
    res ~~~> response ho ~~~~> server return somthing
    
*/

// Connect to database
mongoose.connect("", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('DB Connection Successfull!'))
    .catch((err) => {
        console.log("DB Connection Error :", err);
    });


app.get('/',function (req, res) {   
    res.send('Hello World');
})

app.get('/healthservice', function (req, res){
    res.send(" This is HealthService Portal ");
})

app.listen(3000, ()=> {
    console.log("Server started sucessfully")
    console.log("localhost:3000/")
})