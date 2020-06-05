/** @format */

import express from 'express';
import dbController from './db/dbController';
import expressEjsLayouts from 'express-ejs-layouts';
import indexRoute from './routers/index';
import userRoute from './routers/user';

//Middleware
const app = express();

//EJS
app.use(expressEjsLayouts);
app.set('view engine', 'ejs');

// Express body Parser
app.use(express.urlencoded({ extended: true }));

//Router
app.use('/', indexRoute);
app.use('/users', userRoute);

dbController();
const port = process.env.PORT || 8082;
app.listen(port, () => {
	console.log(`Express server is running at Port ${port} 🌵 🌵`);
});
