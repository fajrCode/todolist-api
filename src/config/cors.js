import env from './env.js';

export default {
    origin: env.cors.origin.split(','),
    methods: env.cors.method.split(','),
    aallowHeaders: ['Content-Type', 'Authorization'],
};
