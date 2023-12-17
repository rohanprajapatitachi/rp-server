require('dotenv').config();
const express = require('express') // This is the first step to create server import or require express.
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()  // express started
const todoRoutes = require('./routes/todo-routes');
const userRoutes = require('./routes/user-routes')


app.use(cors());
app.use(bodyParser.json());
app.use("/todos", todoRoutes);
app.use("/users", userRoutes);

/*
    / bhaneko root ho banesii main file run hunxa yo path maaa
    req ~~~> request ho  ~~~~> server lai maagxau 
    res ~~~> response ho ~~~~> server return somthing
    
*/

// Connect to database..
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection Successfull!"))
    .catch((err) => {
        console.log("DB Connection Error :", err);
    });


app.get('/healthcheck', function (req, res){
    res.send(" This is HealthService Portal ");
})


app.listen(process.env.PORT, ()=> {
    console.log("Server started sucessfully")
})
