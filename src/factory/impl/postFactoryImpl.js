const constants = require('../../../constants');
const utils = require('../../utils/utils');

exports.postRecordsProcess = async (event) =>{
    const bodyMqtt=event.body.includes('record');
    if(!bodyMqtt){
        resp={}
        return resp
    }
    const resp = await utils.getResponse(event);
     console.log('repuesta',bodyMqtt);
     return resp;
};

exports.postAddProducto = async (event) => {
    const bodyMqtt=event.body.includes('addProduct');
    if(!bodyMqtt){
        resp={}
        return resp
    }
    const resp = await utils.getResponse(event);
    console.log('repuesta',resp);
    return resp;
};
exports.postChargeRawMaterial = async (event) => {
    const bodyMqtt=event.body.includes('charger');
    if(!bodyMqtt){
        resp={}
        return resp
    }
    const resp = await utils.getResponse(event);
    console.log('repuesta',resp);
    return resp;
};

exports.postPerformance = async (event) => {
    const bodyMqtt=event.body.includes('perform');
    if(!bodyMqtt){
        resp={}
        return resp
    }
    const resp = await utils.getResponse(event);
    console.log('repuesta',resp);
    return resp;
};

exports.postQualityProduct = async (event) => {
    const bodyMqtt=event.body.includes('quality');
    if(!bodyMqtt){
        resp={}
        return resp
    }
    const resp = await utils.getResponse(event);
    console.log('repuesta',resp);
    return resp;
};
