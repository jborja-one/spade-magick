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
	'/delete/:illusionId',
	requireAuth,
	asyncHandler(async (req, res) => {
		const { illusionId } = req.params;
		const parsedId = Number(illusionId);
		const illusion = await Illusion.findByPk(parsedId);
		const deletedIllusion = await illusion.destroy();
		res.json(deletedIllusion);
	})
);

router.put(
	'/edit/:illusionId',
	requireAuth,
	asyncHandler(async (req, res) => {
		const { illusionId } = req.params;
		const parsedId = Number(illusionId);
		const illusionUpdate = await Illusion.findByPk(parsedId);
		const { title, image, description, steps, userId, categoryId } =
			req.body;
		const illusion = {
			title,
			image,
			description,
			steps,
			userId,
			categoryId,
		};
		const editedIllusion = await illusionUpdate.update(illusion);
		res.json(editedIllusion);
	})
);

const reviewValidators = [
	check('title')
		.exists({ checkFalsy: true })
		.withMessage('Please add a title!')
		.isLength({ max: 200 })
		.withMessage('Title has to be less than 200 characters'),
	check('description')
		.exists({ checkFalsy: true })
		.withMessage("Don't forget to add a description"),
];

router.get(
	'/review/:reviewId',
	requireAuth,
	asyncHandler(async (req, res) => {
		const { reviewId } = req.params;
		const parsedId = Number(reviewId);
		const review = await Review.findAll({ where: parsedId });
		res.json(review);
	})
);

router.post(
	'/review/',
	requireAuth,
	reviewValidators,
	asyncHandler(async (req, res) => {
		const { description, userId, illusionId, title } = req.body;
		const review = await Review.create({
			description,
			userId,
			illusionId,
			title,
		});
		res.json(review);
	})
);

router.delete(
	'/review/delete/:reviewId',
	requireAuth,
	asyncHandler(async (req, res) => {
		const { reviewId } = req.params;
		const parsedId = Number(reviewId);
		const review = await Review.findByPk(parsedId);
		const deletedReview = await review.destroy();
		res.json(deletedReview);
	})
);

router.put(
	'/review/edit/:reviewId',
	requireAuth,
	asyncHandler(async (req, res) => {
		const { reviewId } = req.params;
		const parsedId = Number(reviewId);
		const reviewUpdate = await Review.findByPk(parsedId);
		const { description, title, userId, illusionId } = req.body;
		const review = {
			description,
			title,
			userId,
			illusionId,
		};
		const editedReview = await reviewUpdate.update(review);
		res.json(editedReview);
	})
);

module.exports = router;
