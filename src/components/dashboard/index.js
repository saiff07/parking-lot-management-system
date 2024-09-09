import express from 'express';
import {
    getAllCars,
    getTotalCars,
    getTotalFloors,
    getTotalBlocks,
    getTotalParkingLots,
    getCarRecords,
    getBlockCapacity,
    getFloorCapacity,
    getParkingLotCapacity,
    getAll
} from './handler';
import { passportJwt } from '../../middleware/auth';
import { roleBasedMiddleware } from '../../services/authorization/index';

const Router = express.Router();

Router.get('/get-all-cars', getAllCars);
Router.get('/get-total-cars', getTotalCars);
Router.get('/get-total-floors', getTotalFloors);
Router.get('/get-total-blocks', getTotalBlocks);
Router.get('/get-total-parkinglots', getTotalParkingLots);


Router.get("/search", getCarRecords);
Router.get("/get-block-capacity/:id", getBlockCapacity);
Router.get("/get-floor-capacity/:id", getFloorCapacity);
Router.get("/get-parkinglot-capacity/:id", getParkingLotCapacity);
Router.get("/get-all/:id", getAll);

export default Router;
