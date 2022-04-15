const constants = require('../../../constants');
const utils = require('../../utils/utils');

exports.postRecordsProcess = async (event, callback) =>{
    //callback( null, utils.getResponse (200, event.body));
    return {
        statusCode :200,
        body : JSON.stringify(event.body),
        headers:{'prueba':'*'}
    };
    //console.log('postRecordsProcess', event.body);
}

exports.postAddProducto = async (event, callback) => {
    console.log('postAddProducto');
}

exports.postChargeRawMaterial = async (event, callback) => {
    console.log('postChargeRawMaterial');
}

exports.postPerformance = async (event, callback) => {
    console.log('postPerformance');
}

exports.postQualityProduct = async (event, callback) => {
    console.log('postQualityProduct');
}
