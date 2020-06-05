/** @format */

import express from 'express';
import dbController from './db/dbController';

const app = express();

const port = process.env.PORT || 8082;

dbController();
app.listen(port, () => {
	console.log(`Express server is running at Port ${port} 🌵 🌵`);
});
