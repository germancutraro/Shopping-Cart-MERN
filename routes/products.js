const express = require('express');
const router = express.Router();

const Products = require('../models/Product');

router.get('/', async (req, res) => {
	const products = await Products.find({});
	console.log('WORKING ROUTE');
	res.json({ products });
});

module.exports = router;
