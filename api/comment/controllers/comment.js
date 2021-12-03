const { default: createStrapi } = require('strapi');
const { sanitizeEntity } = require('strapi-utils');
const { create, update } = require('../../article/controllers/article');

module.exports = {
    async create(ctx) {
        ctx.request.body.user = ctx.state.user.id;
        const { articleId } = ctx.params;
        ctx.request.body.article = articleId;

        const article = await strapi.services.article.findOne({ id: articleId });
        if (!article) {
            ctx.throw(404);
        }

        const entity = await strapi.services.article.create(ctx.request.body);
        return sanitizeEntity(entity, { model: strapi.models.comment });
    },
    async find(ctx) {
        const entities = await strapi.services.comment.find({
            article: ctx.params.articleId
        });
        return entities.map((entity) => 
            sanitizeEntity(entity, { model: strapi.models.comment })
        );
    },
    async update(ctx) {
        const { articleId, id } = ctx.params;
        const comment = await strapi.services.comment.findOne({
            id,
            article: articleId,
        });
        if (!comment) {
            return ctx.throw(404);
        }
        if (ctx.request.body.article || ctx.request.body.user) {
            return ctx.throw(400, 'article or user field cannot be changed');
        }
        if (ctx.state.user.id !== comment.user.id) {
            return ctx.unauthorized(`You can't update this entry`);
        }
        const entity = await strapi.services.comment.update(
            {
                id
            },
            ctx.request.body
        );
        return sanitizeEntity(entity, { model: strapi.models.comment });
    },
    async delete(ctx) {
        const { articleId, id } = ctx.params;
        const comment = await strapi.services.comment.findOne({
            id,
            article: articleId,
        });
        if (!comment) {
            return ctx.throw(404);
        }
        if (ctx.state.user.id !== comment.user.id) {
            return ctx.unauthorized(`You can't remove this entry`);
        }
        await strapi.services.comment.delete({ id });
        ctx.status = 204;
    }
};