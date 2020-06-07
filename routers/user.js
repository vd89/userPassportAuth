/** @format */

import { Router } from 'express';
import { register, login, create } from '../controller/userController';

const router = Router();

/*
   Route : /users/login   GET
   Login form of User
   Public Route
*/
router.get('/login', login);

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

export default router;
