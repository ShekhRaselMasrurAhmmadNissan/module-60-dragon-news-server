const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');

app.get('/', (req, res) => {
	res.send('News API is running');
});

app.get('/news-categories', (req, res) => {
	res.send(categories);
});

app.listen(port, () => {
	console.log(`The Dragon News server is running at port: ${port}`);
});
