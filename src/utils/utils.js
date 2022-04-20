const constants = require('../../constants');

exports.getResponse = (event)=>{
    let resp = {
        statusCode :200,
        body : JSON.stringify(event.body),
    }
    console.log('ejecuta getResponse', resp);
    return resp;
};