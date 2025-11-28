import { Todo } from '../models/index.js';
import ErrorCustom from '../utils/customError.js';

export const getAllData = async () => {
    const todos = await Todo.findAll({
        where: {
            deletedAt: null,
        },
    });
    return todos;
};

export const getOneData = async (id) => {
    const todo = await Todo.findOne({
        where: {
            id,
            deletedAt: null,
        },
    });
    if (!todo) throw new ErrorCustom(404, 'No record found for that id');
    return todo;
};

export const createData = async (body) => {
    await Todo.create(body);
    return body;
};

export const updateData = async (id, body) => {
    const [affected] = await Todo.update(body, {
        where: {
            id,
        },
    });
    if (!affected) throw new ErrorCustom(404, 'No record found for that id');
    return body;
};

export const deleteData = async (id) => {
    const [affected] = await Todo.update(
        {
            deletedAt: new Date(),
        },
        {
            where: { id },
        }
    );
    if (!affected) throw new ErrorCustom(404, 'No record found for that id');
    return id;
};
