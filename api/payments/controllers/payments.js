const { sanitizeEntity } = require('strapi-utils');
const axios = require('axios');

const secretKey = 'test_sk_jZ61JOxRQVEnkkRa2OyrW0X9bAqw';

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
    async auth(ctx) {
        axios.post('https://api.tosspayments.com/v1/connectpay/authorizations/access-token', {
           grantType: 'AuthorizationCode',
            code: ctx.query.code,
            customerKey: ctx.query.customerKey,
        }, {
            headers: {
                Authorization: "Basic " + Buffer.from(secretKey + ":").toString("base64"),
                "Content-Type": "application/json",     
            }
        }).then((response) => {
            console.log('response', response.data);
            const { accessToken, refreshToken, tokenType, expiresIn } = response.data;
            return {
                code: 200,
                data: {
                    id: 5012,
                },
                message: '인증',
            };
        }).catch((error) => {
            console.log('error', error);
            return {
                code: 200,
                data: {
                    id: 5012,
                },
                message: '인증',
            };
        })
        return {
            code: 200,
            data: {
                id: 5012,
            },
            message: '인증',
        };
    //     got
    // .post("https://api.tosspayments.com/v1/connectpay/authorizations/access-token", {
    //   headers: {
    //     Authorization:
    //       "Basic " + Buffer.from(secretKey + ":").toString("base64"),
    //     "Content-Type": "application/json",
    //   },
    //   json: {
    //     grantType: 'AuthorizationCode',
    //     code: ctx.query.code,
    //     customerKey: ctx.query.customerKey,
    //   },
    //   responseType: "json",
    // })
    // .then(function (response) {
    //     console.log('response', response);
    //     return {
    //         code: 200,
    //         data: {
    //             id: 5012,
    //         },
    //         message: '인증',
    //     };
    // })
    // .catch(function (error) {
    //     console.log('error', error);
    //     return {
    //         code: 200,
    //         data: {
    //             id: 5012,
    //         },
    //         message: '인증',
    //     };
    // });
    },
};
