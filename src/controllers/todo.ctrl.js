import { getAllData } from '../services/todo.service.js';
import response from '../utils/response.js';

export const getTodoList = async (_, res, next) => {
    try {
        const data = await getAllData();
        response(res, 200, 'Success', data);
    } catch (error) {
        next(error);
    }
};
