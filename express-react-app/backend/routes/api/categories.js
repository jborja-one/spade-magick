const express = require('express');
const asyncHandler = require('express-async-handler');
const { Illusion } = require('../../db/models');
const router = express.Router();

router.get(
	'/:categoryId',
	asyncHandler(async (req, res) => {
		const { categoryId } = req.params;
		const illusions = await Illusion.findAll({ where: { categoryId } });
		res.json(illusions);
	})
);

module.exports = router;
