export const getAllData = async () => {
    const todos = [
        {
            id: 1,
            task: 'Belajar express',
            isClear: 'Complete',
        },
        {
            id: 2,
            task: 'Belajar Sequelize',
            status: 'In Progress',
        },
        {
            id: 3,
            task: 'Belajar Unit Testing Jest',
            status: 'Pending',
        },
    ];
    return todos;
};
