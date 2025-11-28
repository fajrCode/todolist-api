import * as TodoService from '../services/todo.service.js';
import response from '../utils/response.js';

export const getTodoList = async (req, res) => {
    const data = await TodoService.getAllData();
    response(res, 200, 'Success', data);
};

export const getDetailTodo = async (req, res) => {
    const data = await TodoService.getOneData(req.params.id);
    response(res, 200, 'Success', data);
};

export const createTodo = async (req, res) => {
    const data = await TodoService.createData(req.body);
    response(res, 200, 'Success', data);
};

export const updateTodo = async (req, res) => {
    const data = await TodoService.updateData(req.params.id, req.body);
    response(res, 200, 'Success', data);
};

export const deleteTodo = async (req, res) => {
    await TodoService.deleteData(req.params.id);
    response(res, 200, 'Success', req.params.id);
};
