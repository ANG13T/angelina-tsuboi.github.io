const express = require("express");
const app = express();
const port = 3240 || process.env.PORT;

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.listen(port, (err) => {
    if(err){
        console.log("Something went wrong")
        console.log(err)
    } else{
        console.log("App is up on " + port)
    }
})