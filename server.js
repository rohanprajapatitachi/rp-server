const express = require('express') // This is the first step to create server import or require express.
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const app = express()  // express started
const todoRoutes = require =('./routes/user.js');


app.use(bodyParser.json());

/*
    / bhaneko root ho banesii main file run hunxa yo path maa
    req ~~~> request ho  ~~~~> server lai maagxau 
    res ~~~> response ho ~~~~> server return somthing
    
*/

// Connect to database
mongoose.connect("mongodb+srv://rohanprajapatitachi:12345@rohanprajapati.qev1zdg.mongodb.net/rp-server?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connection Successfull!"))
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
