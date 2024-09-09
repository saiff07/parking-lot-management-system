import express from 'express';
import { getList,addNewList,updateList, deleteAllData } from './handler';
import { passportJwt } from '../../middleware/auth';
import { roleBasedMiddleware } from '../../services/authorization/index';

const Router = express.Router();
Router.get('/list', passportJwt, roleBasedMiddleware([1, 2]), getList);
Router.post('/new', passportJwt, roleBasedMiddleware([1]), addNewList);
Router.patch('/update-list/:id',passportJwt, roleBasedMiddleware([1]),updateList);
Router.patch('/delete',deleteAllData);

export default Router;
