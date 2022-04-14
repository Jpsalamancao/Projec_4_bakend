const factory = ('./src/factory/factory.js');
const validator = ('./src/utils/validateHeaders.js');

exports.handler = async (event, callback) => {
    console.log('Received event:',event.body);
    let handlerData= event.path.includes('/handlerdata')

    if(!handlerData){
        const response = {
            statusCode: 400,
            body: JSON.stringify('not found!'),
        };
    return response;
    }

    await factory.getMethod(event, callback);

};



// var http= require('http');
// http.createServer(function(peticion, respuesta){
//     respuesta.writeHead(200, {'content-type':'text/html'});
//     respuesta.write('<h3> hola mundo </h3>')
//     respuesta.end();
// });

// servidor.listen(3000);
