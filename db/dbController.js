/** @format */

import config from 'config';
import { connect } from 'mongoose';

export default async function dbController() {
	try {
		const URI = config.get('MONGO_URI');
		const options = { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false };

		await connect(URI, options);
		console.log(`MongoDB connected with the app... 🤺 🤺`);
	} catch (error) {
		console.log('error :>> ', error);
	}
}
