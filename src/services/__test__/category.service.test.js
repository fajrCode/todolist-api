import { jest, describe, it, expect, beforeEach } from '@jest/globals';
import { getAllData, getOneData, createData, updateData, deleteData } from '../category.service.js';
import { Category } from '../../models/index.js';
import ErrorCustom from '../../utils/customError.js';

jest.mock('../../models/index.js');

describe('Category Service', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('getAllData', () => {
        it('Should return all categories', async () => {
            const mockCategories = [
                { id: 1, name: 'Work' },
                { id: 2, name: 'Personal' },
            ];
            Category.findAll.mockResolvedValue(mockCategories);

            const result = await getAllData();

            expect(Category.findAll).toHaveBeenCalledTimes(1);
            expect(Category.findAll).toHaveBeenCalledWith();
            expect(result).toEqual(mockCategories);
        });
    });

    describe('getOneData', () => {
        it('Should return a category by id', async () => {
            const mockCategory = { id: 1, name: 'Work' };
            Category.findOne.mockResolvedValue(mockCategory);

            const result = await getOneData(1);

            expect(Category.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
            expect(result).toEqual(mockCategory);
        });

        it('Should throw error when category not found', async () => {
            Category.findOne.mockResolvedValue(null);

            await expect(getOneData(999)).rejects.toThrow(ErrorCustom);
            expect(Category.findOne).toHaveBeenCalledWith({ where: { id: 999 } });
        });
    });

    describe('createData', () => {
        it('Should create and return category body', async () => {
            const mockBody = { name: 'New Category' };
            Category.create.mockResolvedValue(mockBody);

            const result = await createData(mockBody);

            expect(Category.create).toHaveBeenCalledWith(mockBody);
            expect(result).toEqual(mockBody);
        });
    });

    describe('updateData', () => {
        it('Should update and return category body', async () => {
            const mockBody = { name: 'Updated Category' };
            Category.update.mockResolvedValue([1]);

            const result = await updateData(1, mockBody);

            expect(Category.update).toHaveBeenCalledWith(mockBody, { where: { id: 1 } });
            expect(result).toEqual(mockBody);
        });

        it('Should throw error when update target not found', async () => {
            const mockBody = { name: 'Updated Category' };
            Category.update.mockResolvedValue([0]);

            await expect(updateData(999, mockBody)).rejects.toThrow(ErrorCustom);
            expect(Category.update).toHaveBeenCalledWith(mockBody, { where: { id: 999 } });
        });
    });

    describe('deleteData', () => {
        it('Should throw 404 when category not found', async () => {
            Category.findOne.mockResolvedValue(null);

            await expect(deleteData(999)).rejects.toThrow(ErrorCustom);
            expect(Category.findOne).toHaveBeenCalledWith({ where: { id: 999 }, include: 'todos' });
        });

        it('Should block delete when category has todos', async () => {
            const mockCategory = { id: 1, name: 'Work', todos: [{ id: 10 }] };
            Category.findOne.mockResolvedValue(mockCategory);

            await expect(deleteData(1)).rejects.toThrow(ErrorCustom);
            expect(Category.findOne).toHaveBeenCalledWith({ where: { id: 1 }, include: 'todos' });
            expect(Category.destroy).not.toHaveBeenCalled();
        });

        it('Should delete category when no todos', async () => {
            const mockCategory = { id: 1, name: 'Work', todos: [] };
            Category.findOne.mockResolvedValue(mockCategory);
            Category.destroy.mockResolvedValue(1);

            await expect(deleteData(1)).resolves.toBeUndefined();
            expect(Category.findOne).toHaveBeenCalledWith({ where: { id: 1 }, include: 'todos' });
            expect(Category.destroy).toHaveBeenCalledWith({ where: { id: 1 } });
        });
    });
});
