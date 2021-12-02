const { sanitizeEntity } = require('strapi-utils');

module.exports = {
    async find(ctx) {
        const params = ctx.query;
        const count = await strapi.services.notice.count();
        const entity = await strapi.services.notice.find(params);
        const result = {
            data: sanitizeEntity(entity, { model: strapi.models.notice }),
            count,
        };
        return result;
    },
};
