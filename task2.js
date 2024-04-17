var http = require('http');

http.createServer(function(request, response) {

    response.writeHead(200, {'Content-Type':'text/html'});

    response.write('<h1>Hello Node!!!!</h1>');

    request.on('error', (err) => {
        console.log("Erreur lors de l'envoi de la réponse:", err);
    })

    response.end();


}).listen(3000);