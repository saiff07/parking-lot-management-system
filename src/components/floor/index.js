import express from 'express';
import { getFloors, addFloor, updateFloor } from './handler';
import { passportJwt } from '../../middleware/auth';
import { roleBasedMiddleware } from '../../services/authorization/index';

const Router = express.Router();
Router.get('/get-floors',passportJwt, roleBasedMiddleware([1,2]), getFloors);
Router.post('/add-floor',passportJwt, roleBasedMiddleware([1]), addFloor);
Router.patch('/update-floor/:id',passportJwt, roleBasedMiddleware([1]),updateFloor);


export default Router;
