require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const db = require('./models');
const handle = require('./handlers');
const routes = require('./routes');

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.get('/',(req,res) => res.json({ 'id':1,'name':'Ram Thapa' }))
app.use('/api/auth',routes.auth);
app.use('/api/poll',routes.poll)

app.use(handle.notFound);

app.use(handle.errorHandler);

app.listen(port,console.log(`Server started on port ${port}`))