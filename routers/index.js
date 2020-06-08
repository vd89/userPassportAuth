/** @format */

import { Router } from 'express';
// import { ensureAuthenticated } from '../controller/auth';

const router = Router();

//Welcome Page
router.get('/', (req, res) => {
	res.render('welcome');
});

//Dashboard
router.get('/dashboard', (req, res) => {
	res.render('dashboard', { name: res.user.name });
});

export default router;
