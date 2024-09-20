import express, { Router } from 'express'
import { signup } from '../controllers/user_controller.js'
import { login } from '../controllers/user_controller.js';
let UserRouter=express.Router()
UserRouter.post('/signup',signup);
UserRouter.post('/login',login);

export default UserRouter;