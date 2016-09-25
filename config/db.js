var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/clone-bnb-' + process.env.NODE_ENV);
