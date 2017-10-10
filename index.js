const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const msg = 'hello word in docker';
    console.log(msg)
    res.send(msg);
})

app.listen(8626, ()=>console.log('server is running'));
