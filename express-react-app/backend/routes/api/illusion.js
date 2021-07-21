const express = require('express');
const asyncHandler = require('express-async-handler');
const { Illusion } = require('../../db/models');
const router = express.Router();

router.get(
	'/:id(\\d+)',
	asyncHandler(async (req, res) => {
		const IllusionId = parseInt(req.params.id, 10);
		const illusion = await Illusion.findAll({ where: { IllusionId } });

		const build = Illusion.build();
		res.json(illusion);
	})
);

module.exports = router;
