import express from 'express';
import { addNewAddress, getAddress, updateAddress } from './handler';
import { passportJwt } from '../../middleware/auth';
import { roleBasedMiddleware } from '../../services/authorization/index';

const Router = express.Router();
Router.get('/list-address', passportJwt, roleBasedMiddleware([1, 2, 4]), getAddress);
// Router.get('/list-address-all', passportJWT, roleBasedMiddleware([1]), getAllAddress);
Router.post('/new-address', passportJwt, roleBasedMiddleware([1, 2]), addNewAddress);
Router.patch('/update-address/:id', passportJwt, roleBasedMiddleware([1, 2]), updateAddress);

export default Router;
