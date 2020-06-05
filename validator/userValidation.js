/** @format */

import { body, validationResult } from 'express-validator';

const registerRules = () => {
	return [
		body('name', 'Name is required').not().isEmpty(),
		body('email', 'Email valid email address').isEmail(),
		body('password', 'Minimum 6 characers are required')
			.isLength({ min: 6 })
			.custom((value, { req }) => {
				if (value !== req.body.password2) {
					throw new Error("Passwords don't match");
				} else {
					return value;
				}
			}),
	];
};
const validate = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		const extractedErrors = [];
		errors.array().map((err) =>
			extractedErrors.push({
				[err.param]: err.msg,
			}),
		);
		return res.json({
			errors: extractedErrors,
		});
	}
	return next();
};
export { registerRules, validate };
