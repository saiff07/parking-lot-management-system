import express from 'express';
import { listUserRole, getUserRole, addNewUserRole, updateUserRole } from './handler';
import { passportJwt } from '../../middleware/auth';
import { roleBasedMiddleware } from '../../services/authorization/index';

const Router = express.Router();

// Router.post('/', add);
Router.get('/get-role',passportJwt,   roleBasedMiddleware([1,2]), listUserRole);
Router.get('/get-role/:id', passportJwt, roleBasedMiddleware([1,2]), getUserRole);
Router.post('/add-role',passportJwt, roleBasedMiddleware([1]),addNewUserRole);
Router.patch('/update-role/:id',passportJwt, roleBasedMiddleware([1,2]), updateUserRole);
// Router.post('/login-check', login); /// Just to compare whether password is matching or not

export default Router;
