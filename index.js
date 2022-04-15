const factory = require ('./src/factory/factory.js');
const utils = require('./src/utils/utils');
let response 

exports.handler = async (event, callback) => {
    console.log('Received event:',event);
    let handlerData= event.path.includes('/handlerdata');
    if(!handlerData){
        response = {
            statusCode: 404,
            body: JSON.stringify('not found !'),
        };
        return response;
    }else {
        console.log('fin del index',event.body);
        await factory.getMethod(event, callback);
        response = {
            statusCode:200,
            body:JSON.stringify(event.body)
        };
        return response
    }
};

// exports.handler = async (event, callback) => {
//     console.log('Received event:',event.body);
//     let handlerData= event.path.includes('/handlerdata')
//     if(!handlerData){
//         const response = {
//             statusCode: 400,
//             body: JSON.stringify('not found!'),
//         };
//     return response;
//     }

// };
