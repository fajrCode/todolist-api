import * as CategoryService from '../services/category.service.js';
import response from '../utils/response.js';

export const getAllCategory = async (req, res) => {
    const categories = await CategoryService.getAllData();
    response(res, 200, 'Success', categories);
};

export const getDetailCategory = async (req, res) => {
    const category = await CategoryService.getOneData(req.params.id);
    response(res, 200, 'Success', category);
};

export const createCategory = async (req, res) => {
    await CategoryService.createData(req.body);
    response(res, 200, 'Success', req.body);
};

export const updateCategory = async (req, res) => {
    await CategoryService.updateData(req.params.id, req.body);
    response(res, 200, 'Success', req.body);
};

export const deleteCategory = async (req, res) => {
    await CategoryService.deleteData(req.params.id);
    response(res, 200, 'Success', req.body);
};
