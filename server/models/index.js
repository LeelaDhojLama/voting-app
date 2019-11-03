const mongoose = require('mongoose');
//passing variable to mongoose parameter
mongoose.set('debug','true');
mongoose.set('useNewUrlParser','true');
mongoose.set('useUnifiedTopology','true');
mongoose.set('useCreateIndex', true);
mongoose.Promise = global.Promise;

//connect to mongodb database vote
mongoose.connect('mongodb://localhost:27017/vote')

//exports other models
module.exports.User = require('./user');
module.exports.Poll = require('./poll');

