import { jest, describe, test, expect, beforeEach } from '@jest/globals';
import { getAllData, getOneData, createData, updateData, deleteData } from '../todo.service.js';
import { Todo } from '../../models/index.js';
import ErrorCustom from '../../utils/customError.js';

jest.mock('../../models/index.js');

describe('Todo Service', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('getAllData', () => {
        test('Should return all todos', async () => {
            const mockTodos = [
                { id: 1, task: 'Todo 1', status: 'Pending', deletedAt: null },
                { id: 2, task: 'Todo 2', status: 'On Progress', deletedAt: null },
            ];
            Todo.findAll.mockResolvedValue(mockTodos);

            const result = await getAllData();

            expect(Todo.findAll).toHaveBeenCalledWith({ where: { deletedAt: null } });
            expect(result).toEqual(mockTodos);
        });
    });

    describe('getOneData', () => {
        test('Should return a todo by id', async () => {
            const mockTodo = { id: 1, task: 'Todo 1', status: 'Pending', deletedAt: null };
            Todo.findOne.mockResolvedValue(mockTodo);

            const result = await getOneData(1);

            expect(Todo.findOne).toHaveBeenCalledWith({ where: { id: 1, deletedAt: null } });
            expect(result).toEqual(mockTodo);
        });

        test('Should throw error when todo not found', async () => {
            Todo.findOne.mockResolvedValue(null);

            await expect(getOneData(999)).rejects.toThrow(ErrorCustom);
            expect(Todo.findOne).toHaveBeenCalledWith({ where: { id: 999, deletedAt: null } });
        });
    });

    describe('createData', () => {
        test('Should create and return todo', async () => {
            const mockBody = { task: 'New Todo' };
            Todo.create.mockResolvedValue(mockBody);

            const result = await createData(mockBody);

            expect(Todo.create).toHaveBeenCalledWith(mockBody);
            expect(result).toEqual(mockBody);
        });
    });

    describe('updateData', () => {
        test('Should update and return todo', async () => {
            const mockBody = { task: 'Updated Todo' };
            Todo.update.mockResolvedValue([1]);

            const result = await updateData(1, mockBody);

            expect(Todo.update).toHaveBeenCalledWith(mockBody, { where: { id: 1 } });
            expect(result).toEqual(mockBody);
        });
    });

    describe('deleteData', () => {
        test('Should soft delete todo and return id', async () => {
            Todo.update.mockResolvedValue([1]);

            const result = await deleteData(1);

            expect(Todo.update).toHaveBeenCalledWith(
                { deletedAt: expect.any(Date) },
                { where: { id: 1 } }
            );
            expect(result).toBe(1);
        });
    });
});
