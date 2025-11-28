import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Todo = db.define(
    'Todo',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        task: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Keterangan task wajib diisi!!!',
                },
                len: {
                    args: [1, 200],
                    msg: 'Task maksimal 200 karakter',
                },
            },
        },
        status: {
            type: DataTypes.ENUM(['Pending', 'On Progress', 'Complete']),
            allowNull: false,
            defaultValue: 'Pending',
            validate: {
                isIn: {
                    args: [['Pending', 'On Progress', 'Complete']],
                    msg: 'Status harus Pending/On Progress/Complete',
                },
            },
        },
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'categories',
                key: 'id',
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE',
        },
        deletedAt: {
            type: DataTypes.DATE,
        },
    },
    {
        // tableName: 'todos', // bisa disesuaikan, namun default nya auto plural
        timestamps: true,
        indexes: [
            {
                fields: ['status'],
            },
            {
                fields: ['category_id'],
            },
        ],
    }
);

export default Todo;
