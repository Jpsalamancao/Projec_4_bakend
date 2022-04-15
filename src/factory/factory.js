const utils = require('../utils/utils');
const constants = require('../../constants');
const getFactory = require('./impl/getFactoryImpl');
const postFactory = require('./impl/postFactoryImpl');

class Factory {
    async getMethod(event, callback){
        console.log('factory implementation', event.httpMethod);
        const splitPath=event.path.split('/');
        const actionPath=event.path.split('/')[2];
        let  httpMethod= constants.METHOD_FACTORY.hasOwnProperty(event.httpMethod) ? constants.METHOD_FACTORY[event.httpMethod] : {};
        let  functionName =httpMethod[actionPath]
        
        if (event.httpMethod === 'GET') await getFactory[functionName](event, callback);
        if (event.httpMethod === 'POST') await postFactory[functionName](event, callback);
        
        console.log('Method', functionName, httpMethod);      
    }
}

module.exports= new Factory();