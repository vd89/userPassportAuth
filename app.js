/** @format */

import express from 'express';
import expressEjsLayouts from 'express-ejs-layouts';
import session from 'express-session';
import flash from 'connect-flash';

import indexRoute from './routers/index';
import userRoute from './routers/user';
import dbController from './db/dbController';
//Middleware
const app = express();

//EJS
app.use(expressEjsLayouts);
app.set('view engine', 'ejs');

// Express body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Express Session
app.use(
	session({
		secret: 'Secret',
		resave: true,
		saveUninitialized: true,
	}),
);

//Connect Flash
app.use(flash());

// Global Variables
app.use((req, res, next) => {
	res.locals.success_msg = req.flash('success_msg');
	res.locals.error_msg = req.flash('error_msg');
	res.locals.error = req.flash('error');
	next();
});

//Router
app.use('/', indexRoute);
app.use('/users', userRoute);

dbController();
const port = process.env.PORT || 8082;
app.listen(port, () => {
	console.log(`Express server is running at Port ${port} 🌵 🌵`);
});
