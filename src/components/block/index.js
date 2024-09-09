import express from 'express';
import { getBlocks, newBlock, updateBlock } from './handler';
import { passportJwt } from '../../middleware/auth';
import { roleBasedMiddleware } from '../../services/authorization/index';

const Router = express.Router();
Router.get('/get-blocks',passportJwt, roleBasedMiddleware([1, 2]), getBlocks);
Router.post('/add-block',passportJwt, roleBasedMiddleware([1]), newBlock);
Router.patch('/update-block/:id',passportJwt, roleBasedMiddleware([1]),updateBlock);

export default Router;
