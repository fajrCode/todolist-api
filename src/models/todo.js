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
        deletedAt: {
            type: DataTypes.DATE,
        },
    },
    {
        tableName: 'todos',
        timestamps: true,
        indexes: [
            {
                fields: ['status'],
            },
        ],
    }
);

export default Todo;
