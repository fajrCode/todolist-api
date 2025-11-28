import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Category = db.define(
    'Category',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Nama kategori task wajib diisi!!!',
                },
                len: {
                    args: [1, 20],
                    msg: 'Task maksimal 20 karakter',
                },
            },
        },
    },
    {
        timestamps: false,
    }
);

export default Category;
