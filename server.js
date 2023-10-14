const express = require('express') // This is the first step to create server import or require express.

const app = express()  // express started

console.log("Rohan backend developer")
console.log(" abc developer")
console.log("  developer")
console.log("xyhashfdslksfdhhlfds")


/*
    / bhaneko root ho banesii main file run hunxa yo path maa
    req ~~~> request ho  ~~~~> server lai maagxau 
    res ~~~> response ho ~~~~> server return somthing
*/

app.get('/',function (req, res) {   
    res.send('Hello World')
})

app.listen(3000, ()=> {
    console.log("Server started sucessfully")
})