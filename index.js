const http = require('http');

const generator = require('generate-password');

http.createServer((req, res) => {
    const password = generator.generate({
        length: 10,
        numbers: true
    });

    console.log("Generated password: ", password);    
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`<h1>${password}</h1>`);
    res.end();
}).listen(8080, () => {console.log('Server running at http://localhost:8080')});