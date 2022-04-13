const factory = ('./src/factory/factory.js');
const validator = ('./src/utils/validateHeaders.js');

exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};




// var http= require('http');
// http.createServer(function(peticion, respuesta){
//     respuesta.writeHead(200, {'content-type':'text/html'});
//     respuesta.write('<h3> hola mundo </h3>')
//     respuesta.end();
// });

// servidor.listen(3000);
