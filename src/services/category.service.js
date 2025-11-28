import { Category } from '../models/index.js';
import ErrorCustom from '../utils/customError.js';

export const getAllData = async () => {
    return await Category.findAll();
};

export const getOneData = async (id) => {
    const category = await Category.findOne({
        where: {
            id,
        },
    });

    if (!category) throw new ErrorCustom(404, 'No record found for that id');
    return category;
};

export const createData = async (body) => {
    await Category.create(body);
    return body;
};

export const updateData = async (id, body) => {
    const [category] = await Category.update(body, {
        where: { id },
    });
    if (!category) throw new ErrorCustom(404, 'No record found for that id');
    return body;
};

export const deleteData = async (id) => {
    const category = await Category.findOne({
        where: {
            id,
        },
        include: 'todos',
    });
    if (!category) throw new ErrorCustom(404, 'No record found for that id');
    if (category.todos.length > 0)
        throw new ErrorCustom(
            400,
            'Cannot delete category, because this category have task (todo)'
        );
    await Category.destroy({
        where: {
            id,
        },
    });
};
