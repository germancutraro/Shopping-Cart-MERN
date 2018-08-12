const mongoose = require('mongoose');
const { MONGO_URL } = require('../config/keys');
// Allow Promises
mongoose.Promise = global.Promise;
// Connection
mongoose.connect(MONGO_URL, { useNewUrlParser: true });
// Validation
 mongoose.connection
  .on('open', () => console.info('Database connected!'))
  .on('error', err => console.info('Create a database and put the link into config/index.js/MONGO_URL'));