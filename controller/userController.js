/** @format */

import User from '../models/User';
import { genSalt, hash } from 'bcrypt';
import passport from 'passport';

// view Register Form
const register = (req, res) => {
	res.render('register');
};

//View Login Form
const loginView = (req, res) => {
	res.render('login');
};

// Registration or create

const create = async (req, res) => {
	const { name, email, password, password2 } = req.body;
	let errors = [];
	if (!name || !email || !password || !password2) {
		errors.push({ msg: 'Please Enter All fields' });
	}
	if (password != password2) {
		errors.push({ msg: 'Password does not match' });
	}
	if (password.length < 6) {
		errors.push({ msg: 'Password must be at least 6 character' });
	}
	if (errors.length > 0) {
		res.render('register', {
			errors,
			name,
			email,
			password,
			password2,
		});
	} else {
		try {
			const user = await User.findOne({ email: email });
			if (user) {
				errors.push({ msg: 'Email already register' });
				res.render('register', { errors, name, email, password, password2 });
			}
			const salt = await genSalt(10);
			const hashPassword = await hash(password, salt);
			const newUser = new User({ name, email, password: hashPassword });
			await newUser.save();
			req.flash('success_msg', 'You are now register and can longin');
			res.redirect('/users/login');
		} catch (err) {
			res.status(400).json({ msg: 'the server error' });
		}
	}
};

const login = (req, res, next) => {
	passport.authenticate('local', {
		successRedirect: '/dashboard',
		failureRedirect: '/users/login',
		failureFlash: true,
	})(req, res, next);
};

const logout = (req, res) => {
	req.logout();
	req.flash('success_msg', 'You are logged out');
	res.redirect('/users/login');
};
export { register, loginView, create, login, logout };
