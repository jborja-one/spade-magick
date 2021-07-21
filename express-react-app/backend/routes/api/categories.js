const express = require('express');
const asyncHandler = require('express-async-handler');
const { Category } = require('../../db/models');
const router = express.Router();

router.get(
	'/',
	asyncHandler(async (_req, res) => {
		const categories = await Category.findAll({ where: categoryId });
		res.json(categories);
	})
);

module.exports = router;
