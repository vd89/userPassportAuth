/** @format */

import { Router } from 'express';
import { register, login, create } from '../controller/userController';
import { registerRules, validate } from '../validator/userValidation';

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
   Register Form of user
   Public Route
*/
router.post('/register', registerRules(), validate, create);

export default router;
