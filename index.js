const factory = require ('./src/factory/factory.js');
const utils = require('./src/utils/utils');
let res

exports.handler = async (event) => {
    console.log('Received event:',event);
    let handlerData= event.path.includes('/handlerdata');
    if(!handlerData){
        res = {
            statusCode: 404,
            body: JSON.stringify('not found !'),
        };
        return res;
    }else {
        res = await factory.getMethod(event);
        const response = res ? res: {statusCode: 404, body: JSON.stringify('not found !')};
        console.log('fin del index',res);
        return response;
    }
};

