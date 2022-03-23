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
    },
    async ready(ctx) {
        const { cid, partner_order_id, partner_user_id, item_name, quantity, total_amount, tax_free_amount, approval_url, cancel_url, fail_url } = ctx.request.body;
        console.log('ctx.request.body', ctx.request.body);

        axios.post('https://kapi.kakao.com/v1/payment/ready', `cid=${cid}&partner_order_id=${partner_order_id}&item_name=${item_name}&quantity=${quantity}&total_amount=${total_amount}&tax_free_amount=${tax_free_amount}&approval_url=${approval_url}&cancel_url=${cancel_url}&fail_url=${fail_url}&partner_user_id=${partner_user_id}`, {
            headers: {
                Authorization: "KakaoAK 06a09830f8019c4a840d7731a3882f77",
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",     
            }
        }).then((response) => {
            console.log('response', response.data);
            
            return {
                code: 200,
                data: {
                    
                },
                message: '성공',
            };
        }).catch((error) => {
            console.log('error', error);
            return {
                code: 200,
                data: {
                    
                },
                message: '실패',
            };
        })

        return {
            code: 200,
            data: {
                
            },
            message: '결제준비',
        };
    },
};
