const mongoose = require('mongoose');
const app = require('./app');

mongoose
	.connect(
		'mongodb+srv://project:159357@project-cluster.rnix9.mongodb.net/project'
	)
	.then(() => {
		console.log('Connected to MongoDB!!');
	})
	.catch((err) => {
		console.error('Could not connect to MongoDB ...', err);
	});

// PORTs
const port = process.env.PORT || 8080; // must be for deployment on heroku
// const port = 8080;
app.listen(port, () => {
	console.log('Server is running!!');
	console.log(`Listening on port ${port}`);
});
