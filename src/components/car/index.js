import express from 'express';
import { getCars, addCar,updateCar, removeCar } from './handler';
import { passportJwt } from '../../middleware/auth';
import { roleBasedMiddleware } from '../../services/authorization/index';

const Router = express.Router();
Router.get('/get-cars',passportJwt, roleBasedMiddleware([1,2]), getCars);
Router.post('/add-car',passportJwt, roleBasedMiddleware([1,2]), addCar);
Router.delete('/remove-car/:id', removeCar);
Router.patch('/update-car/:id',passportJwt, roleBasedMiddleware([1]),updateCar);


export default Router;