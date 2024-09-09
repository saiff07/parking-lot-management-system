import express from 'express';
import { add, listUser, getUsers, addNewUser, updateUser, login } from './handler';
import { passportJwt } from '../../middleware/auth';

const Router = express.Router();

Router.post('/', add);
Router.get('/get-user', listUser);
Router.get('/get-user/:id', getUsers);
Router.post('/add-user', passportJwt, addNewUser);
Router.patch('/update-user/:id', updateUser);
Router.post('/login-check', login); /// Just to compare whether password is matching or not

export default Router;
