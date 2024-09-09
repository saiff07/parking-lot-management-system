import express from 'express';
const Router = express.Router();

import healthRouter from './components/health/index';
import authRouter from './components/auth/index';
import userRouter from './components/user/index';
import userRoleRouter from './components/userRole/index';
import roleRouter from './components/role/index';
import addressRouter from './components/address/index';
import parkingLotRouter from './components/parkingLot/index';
import floorRouter from './components/floor';
import blocksRouter from './components/block';
import carsRouter from './components/car';
import dashboardRouter from './components/dashboard';

Router.use('/health', healthRouter);
Router.use('/auth', authRouter);
Router.use('/user', userRouter);
Router.use('/user-role', userRoleRouter);
Router.use('/role', roleRouter);
Router.use('/address', addressRouter); 
Router.use('/parking-lot', parkingLotRouter); 
Router.use('/blocks', blocksRouter); 
Router.use('/floors', floorRouter); 
Router.use('/cars', carsRouter); 
Router.use('/dashboard', dashboardRouter); 







export default Router;
