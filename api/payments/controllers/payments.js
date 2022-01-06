
module.exports = {
    async find(ctx) {
        return "test";
    },
    async create(ctx) {
        return {
            code: 200,
            data: {
                id: 5012,
            },
            message: '주문 생성',
        };
    },
};
