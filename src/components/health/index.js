import express from 'express';
import { check } from './handler';

const Router = express.Router();

Router.get('/', check);

export default Router;
