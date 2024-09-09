import express from 'express';
import { login, test, logout } from './handler';
import { passportLocal, passportJwt } from '../../middleware/auth';

const Router = express.Router();

Router.post('/login', passportLocal, login);
// Router.get('/token', passportJwt, test);

// Router.post('/login', passportLocal, login);
Router.post('/logout', logout);

export default Router;
