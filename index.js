const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');
const news = require('./data/news.json');

app.get('/', (req, res) => {
	res.send('News API is running');
});

app.get('/news-categories', (req, res) => {
	res.send(categories);
});

app.get('/category/:id', (req, res) => {
	const { id } = req.params;
	if (id === '08') {
		res.send(news);
	} else {
		const selectedCategory = news.filter((news) => news.category_id === id);
		res.send(selectedCategory);
	}
});

app.get('/allNews', (req, res) => {
	res.send(news);
});

app.get('/news/:id', (req, res) => {
	const { id } = req.params;
	const selectedNews = news.find((n) => n._id === id);
	res.send(selectedNews);
});

app.listen(port, () => {
	console.log(`The Dragon News server is running at port: ${port}`);
});
