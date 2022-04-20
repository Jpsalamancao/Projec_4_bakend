const utils = require('../utils/utils');
const constants = require('../../constants');
const getFactory = require('./impl/getFactoryImpl');
const postFactory = require('./impl/postFactoryImpl');
let resp;

class Factory {
    async getMethod(event){
        console.log('factory implementation', event.httpMethod);
        const splitPath=event.path.split('/');
        const actionPath=event.path.split('/')[2];
        let  httpMethod= constants.METHOD_FACTORY.hasOwnProperty(event.httpMethod) ? constants.METHOD_FACTORY[event.httpMethod] : {};
        let  functionName =httpMethod[actionPath]
        if(httpMethod==={} || functionName===''){
            return {}            
        }
        if (event.httpMethod === 'GET') {
           resp = await getFactory[functionName](event); 
           console.log('Method', functionName, httpMethod);
           return resp;                           
        }
        if (event.httpMethod === 'POST'){
            resp =await postFactory[functionName](event);
            console.log('Method', functionName, httpMethod);
            return resp;    
        } 
        
  
    }
}

module.exports= new Factory();