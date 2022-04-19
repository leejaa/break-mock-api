const { sanitizeEntity } = require('strapi-utils');

module.exports = {
    async list(ctx) {
        
        return {
            "code": 0,
            "message": "OK",
            "data": {
                "membership": [
                    {
                        "id": 1,
                        "memberType": "NORMAL",
                        "discountRate": 0,
                        "createdAt": "2022-04-12T04:37:15.000Z",
                        "updatedAt": "2022-04-12T04:37:15.000Z"
                    },
                    {
                        "id": 2,
                        "memberType": "VIP1",
                        "discountRate": 0,
                        "createdAt": "2022-04-12T04:37:15.000Z",
                        "updatedAt": "2022-04-12T04:37:15.000Z"
                    }
                ],
                "costPolicy": [
                    {
                        "id": 1,
                        "region": "KR",
                        "createdAt": "2022-04-12T04:36:26.000Z",
                        "updatedAt": "2022-04-12T04:36:26.000Z",
                        "productService": [
                            {
                                "id": 1,
                                "supportRegionId": 1,
                                "serviceName": "EXP",
                                "price": 15000,
                                "discountPrice": 0,
                                "discountRate": 0,
                                "amount": 15000,
                                "isUse": false,
                                "createdAt": "2022-04-12T04:50:39.000Z",
                                "updatedAt": "2022-04-13T03:12:52.000Z"
                            },
                            {
                                "id": 2,
                                "supportRegionId": 1,
                                "serviceName": "REG",
                                "price": 5000,
                                "discountPrice": 0,
                                "discountRate": 0,
                                "amount": 5000,
                                "isUse": false,
                                "createdAt": "2022-04-12T04:50:39.000Z",
                                "updatedAt": "2022-04-12T04:50:39.000Z"
                            },
                            {
                                "id": 5,
                                "supportRegionId": 1,
                                "serviceName": "test",
                                "price": 15000,
                                "discountPrice": 0,
                                "discountRate": 0,
                                "amount": 15000,
                                "isUse": false,
                                "createdAt": "2022-04-13T03:16:01.000Z",
                                "updatedAt": "2022-04-13T03:16:01.000Z"
                            },
                            {
                                "id": 6,
                                "supportRegionId": 1,
                                "serviceName": "test",
                                "price": 15000,
                                "discountPrice": 0,
                                "discountRate": 0,
                                "amount": 15000,
                                "isUse": false,
                                "createdAt": "2022-04-18T07:39:15.000Z",
                                "updatedAt": "2022-04-18T07:39:15.000Z"
                            },
                            {
                                "id": 7,
                                "supportRegionId": 1,
                                "serviceName": "test",
                                "price": 15000,
                                "discountPrice": 0,
                                "discountRate": 0,
                                "amount": 15000,
                                "isUse": false,
                                "createdAt": "2022-04-18T07:39:17.000Z",
                                "updatedAt": "2022-04-18T07:39:17.000Z"
                            }
                        ],
                        "costAdditional": [
                            {
                                "id": 1,
                                "supportRegionId": 1,
                                "additionalType": "isAuto",
                                "extraCharge": 3000,
                                "createdAt": "2022-04-13T05:29:54.000Z",
                                "updatedAt": "2022-04-13T05:29:54.000Z"
                            }
                        ],
                        "productCardCategory": [
                            {
                                "id": 1,
                                "supportRegionId": 1,
                                "category": "POKEMON",
                                "price": 0,
                                "discountPrice": 0,
                                "discountRate": 0,
                                "amount": 0,
                                "createdAt": "2022-04-12T06:33:38.000Z",
                                "updatedAt": "2022-04-12T06:33:38.000Z",
                                "productCardCase": [
                                    {
                                        "id": 1,
                                        "supportRegionId": 1,
                                        "categoryId": 1,
                                        "caseType": "A",
                                        "price": 14800,
                                        "discountPrice": 0,
                                        "discountRate": 0,
                                        "amount": 14800,
                                        "createdAt": "2022-04-12T06:35:38.000Z",
                                        "updatedAt": "2022-04-12T06:35:38.000Z"
                                    }
                                ]
                            },
                            {
                                "id": 3,
                                "supportRegionId": 1,
                                "category": "ETC",
                                "price": 0,
                                "discountPrice": 0,
                                "discountRate": 0,
                                "amount": 0,
                                "createdAt": "2022-04-14T03:49:54.000Z",
                                "updatedAt": "2022-04-14T03:49:54.000Z",
                                "productCardCase": [
                                    {
                                        "id": 4,
                                        "supportRegionId": 1,
                                        "categoryId": 3,
                                        "caseType": "A",
                                        "price": 14800,
                                        "discountPrice": 0,
                                        "discountRate": 0,
                                        "amount": 14800,
                                        "createdAt": "2022-04-14T03:50:52.000Z",
                                        "updatedAt": "2022-04-14T03:50:52.000Z"
                                    }
                                ]
                            },
                            {
                                "id": 4,
                                "supportRegionId": 1,
                                "category": "YUGIOH",
                                "price": 0,
                                "discountPrice": 0,
                                "discountRate": 0,
                                "amount": 0,
                                "createdAt": "2022-04-14T09:54:28.000Z",
                                "updatedAt": "2022-04-14T09:54:28.000Z",
                                "productCardCase": [
                                    {
                                        "id": 5,
                                        "supportRegionId": 1,
                                        "categoryId": 4,
                                        "caseType": "B",
                                        "price": 14800,
                                        "discountPrice": 0,
                                        "discountRate": 0,
                                        "amount": 14800,
                                        "createdAt": "2022-04-14T09:56:32.000Z",
                                        "updatedAt": "2022-04-14T09:56:32.000Z"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "region": "TW",
                        "createdAt": "2022-04-12T04:36:26.000Z",
                        "updatedAt": "2022-04-12T04:36:26.000Z",
                        "productService": [
                            {
                                "id": 10,
                                "supportRegionId": 2,
                                "serviceName": "test",
                                "price": 15000,
                                "discountPrice": 0,
                                "discountRate": 0,
                                "amount": 15000,
                                "isUse": false,
                                "createdAt": "2022-04-18T07:48:45.000Z",
                                "updatedAt": "2022-04-18T07:48:45.000Z"
                            }
                        ],
                        "costAdditional": [],
                        "productCardCategory": [
                            {
                                "id": 2,
                                "supportRegionId": 2,
                                "category": "YUGIOH",
                                "price": 0,
                                "discountPrice": 0,
                                "discountRate": 0,
                                "amount": 0,
                                "createdAt": "2022-04-12T06:33:38.000Z",
                                "updatedAt": "2022-04-12T06:33:38.000Z",
                                "productCardCase": [
                                    {
                                        "id": 2,
                                        "supportRegionId": 2,
                                        "categoryId": 2,
                                        "caseType": "B",
                                        "price": 14800,
                                        "discountPrice": 0,
                                        "discountRate": 0,
                                        "amount": 14800,
                                        "createdAt": "2022-04-12T06:35:38.000Z",
                                        "updatedAt": "2022-04-12T06:35:38.000Z"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    },
};
