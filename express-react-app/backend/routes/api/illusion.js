const express = require('express');
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');
const { Illusion } = require('../../db/models');
const { check } = require('express-validator');
const router = express.Router();

router.get(
	'/:illusionId',
	asyncHandler(async (req, res) => {
		const { illusionId } = req.params;
		const parsedId = Number(illusionId);
		const illusion = await Illusion.findByPk(parsedId);
		res.json(illusion);
	})
);

const illusionValidators = [
	check('title')
		.exists({ checkFalsy: true })
		.withMessage('Please add a title!')
		.isLength({ max: 100 })
		.withMessage('Title has to be less than 100 characters'),
	check('description')
		.exists({ checkFalsy: true })
		.withMessage("Don't forget to add a description"),
	check('image')
		.exists({ checkFalsy: true })
		.withMessage("Don't forget to add a picture"),
];

router.post(
	'/create',
	requireAuth,
	illusionValidators,
	asyncHandler(async (req, res) => {
		const { title, image, description, steps, userId, categoryId } =
			req.body;
		const illusion = await Illusion.create({
			title,
			image,
			description,
			steps,
			userId,
			categoryId,
		});
		return res.json(illusion);
	})
);

router.delete(
	'delete/:illusionId',
	requireAuth,
	asyncHandler(async (req, res) => {
		const { illusionId } = req.params;
		const parsedId = Number(illusionId);
		const illusion = await Illusion.findByPk(parsedId);
		const deletedIllusion = await illusion.destroy();
		res.json(deletedIllusion);
	})
);

router.post(
	'edit/:illusionId',
	requireAuth,
	asyncHandler(async (req, res) => {
		const { illusionId } = req.params;
		const illusionUpdate = Illusion.findByPk(illusionId);
		const { title, image, description, steps } = req.body;
		const illusion = { title, image, description, steps };
		const editedillusion = await illusionUpdate.update(illusion);
		res.json(editedillusion);
	})
);

module.exports = router;
