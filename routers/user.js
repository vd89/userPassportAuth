/** @format */

import { Router } from 'express';
import {
	register,
	loginView,
	create,
	login,
	logout,
} from '../controller/userController';

const router = Router();

/*
   Route : /users/login   GET
   Login form of User
   Public Route
*/
router.get('/login', loginView);

/*
   Route : /users/register   GET
   Register Form of user
   Public Route
*/
router.get('/register', register);

/*
   Route : /users/register   POST
   Register Handel
   Public Route
*/
router.post('/register', create);

/*
   Route : /users/login   POST
   Longin Handel
   Public Route
*/
router.post('/login', login);

/*
   Route : /users/logout   GET
   Logout Handel
   private Route
*/
router.post('/login', logout);

export default router;
