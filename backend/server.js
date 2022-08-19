const express  = require('express');
const connectDB = require('./Config/database')
const cors = require('cors');

connectDB();
const http = require("http")
const app = express()
const server = http.createServer(app)
app.use(express.json());

app.get('/',(req,res) => {
    res.send('Hello');
});

app.use(cors())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
app.use('/student', require('./routes/studentRoutes')) 
app.use('/teacher', require('./routes/teacherRoutes'))



const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log('server run on port', PORT)); 