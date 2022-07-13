const express  = require('express');
const connectDB = require('./Config/database')


connectDB();
const http = require("http")
const app = express()
const server = http.createServer(app)
app.use(express.json());


app.get('/',(req,res) => {
    res.send('Hello');
});





const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log('server run on port', PORT)); 