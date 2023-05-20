const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// App Init
const app = express();

// db
require('./libs/db-connection');

const PORT = process.env.PORT || 5000;

// Middlewares
app.use(require('helmet')());
app.use(require('cors')());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// Routes
app.use('/api/products', require('./routes/products'));

// Production
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendfile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
