var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/backend', {useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;