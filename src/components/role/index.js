import express from 'express';
import {  listRole, getRole, addNewRole, updateRole } from './handler';

const Router = express.Router();

// Router.post('/', add);
Router.get('/get-role', listRole);
Router.get('/get-role/:id', getRole);
Router.post('/add-role', addNewRole);
Router.patch('/update-role/:id', updateRole);
// Router.post('/login-check', login); /// Just to compare whether password is matching or not

export default Router;
