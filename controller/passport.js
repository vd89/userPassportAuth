/** @format */

import { Strategy } from 'passport-local';
import { compare } from 'bcrypt';

import User from '../models/User';

const LocalStrategy = Strategy;

export default function (passport) {
	passport.use(
		new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
			User.findOne({ email: email }).then((user) => {
				if (!user) {
					return done(null, false, { message: 'The email is not register' });
				}
				compare(password, user.password, (err, isMatch) => {
					if (err) throw err;
					if (isMatch) {
						return done(null, user);
					} else {
						return done(null, false, { message: 'Password incorrect' });
					}
				});
			});
		}),
	);
	passport.serializeUser((user, done) => {
		done(null, user.id);
	});
	passport.deserializeUser((id, done) => {
		User.findById(id, (err, user) => {
			done(err, user);
		});
	});
}
