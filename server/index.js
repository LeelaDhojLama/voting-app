const express = require('express');
const handle = require('./handlers');
const app = express();
const port = 4000;

app.get('/',(req,res) => res.json({ 'id':1,'name':'Ram Thapa' }))

app.use(handle.notFound);

app.use(handle.errorHandler);

app.listen(port,console.log(`Server started on port ${port}`))