const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const homeCategory = require('./home-categories');
const illusion = require('./illusion');

router.use('/session', sessionRouter);
router.use('/illusion', illusion);
router.use('/home', homeCategory);
router.use('/users', usersRouter);

router.post('/test', function (req, res) {
	res.json({ requestBody: req.body });
});

//! Test route for setTokenCookie
// const asyncHandler = require('express-async-handler');
// const { setTokenCookie } = require('../../utils/auth.js');
// const { User } = require('../../db/models');
// router.get('/set-token-cookie', asyncHandler(async (req, res) => {
//   const user = await User.findOne({
//       where: {
//         userName: 'Demo-lition'
//       },
//     })
//   setTokenCookie(res, user);
//   return res.json({ user });
// }));

//! Test route for restoreUser
// const { restoreUser } = require('../../utils/auth.js');
// router.get('/restore-user', restoreUser, (req, res) => {
//     return res.json(req.user);
//   }
// );

// //! Test route for requireAuth
// const { requireAuth } = require('../../utils/auth.js');
// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

module.exports = router;
