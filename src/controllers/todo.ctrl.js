import * as TodoService from '../services/todo.service.js';
import response from '../utils/response.js';

export const getTodoList = async (_, res, next) => {
    try {
        const data = await TodoService.getAllData();
        response(res, 200, 'Success', data);
    } catch (err) {
        next(err);
    }
};

export const getDetailTodo = async (req, res, next) => {
    try {
        const data = await TodoService.getOneData(req.params.id);
        response(res, 200, 'Success', data);
    } catch (err) {
        next(err);
    }
};

export const createTodo = async (req, res, next) => {
    try {
        const data = await TodoService.createData(req.body);
        response(res, 200, 'Success', data);
    } catch (err) {
        next(err);
    }
};

export const updateTodo = async (req, res, next) => {
    try {
        const data = await TodoService.updateData(req.params.id, req.body);
        response(res, 200, 'Success', data);
    } catch (error) {
        next(err);
    }
};

export const deleteTodo = async (req, res, next) => {
    try {
        await TodoService.deleteData(req.params.id);
        response(res, 200, 'Success', req.params.id);
    } catch (err) {
        next(err);
    }
};
