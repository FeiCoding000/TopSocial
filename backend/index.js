const express = require('express');
const cors =require('cors');
const router=require('./routes/index')


const app = express();
const port = 8080;


app.use(cors());
app.use('/api',router);
app.listen(port,function(){
    console.log(`Server is running at http://127.0.0.1:${port}`)
})