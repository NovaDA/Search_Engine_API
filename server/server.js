const express = require('express')
const app = express();

const router = require('../server/controllers/search');

app.use('/search', router);

app.get('/', (req,res) =>{
    res.send('starting server');
})



app.listen(4000);
