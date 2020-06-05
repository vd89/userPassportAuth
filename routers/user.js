/** @format */

import { Router } from 'express';
import userController from '../controller/userController';
const router = Router();

/*
   Route : /users/login   GET
   Login form of User
   Public Route
*/
router.get('/login', userController.login);

/*
   Route : /users/register   GET
   Register Form of user
   Public Route
*/
router.get('/register', userController.register);

export default router;
