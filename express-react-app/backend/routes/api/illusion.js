const express = require('express');
const asyncHandler = require('express-async-handler');
const { Illusion } = require('../../db/models');
const router = express.Router();

router.get(
	'/:illusionId',
	asyncHandler(async (req, res) => {
		const { IllusionId } = req.params;
		const illusion = await Illusion.findAll({ where: { IllusionId } });
		res.json(illusion);
	})
);

module.exports = router;
