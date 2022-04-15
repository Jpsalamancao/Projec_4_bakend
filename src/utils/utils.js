const constants = require('../../constants');

exports.getResponse = (statusCode, body)=>{
    console.log('ejecuta getResponse',statusCode);
    return {
        statusCode :statusCode,
        body : JSON.stringify(body),
        headers:{'prueba':'*'}
    };
};