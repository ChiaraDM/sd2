const http = require("http");

const hostname = "127.0.0.1";

const port = 3000;

const server = http.createServer(function(req, res) {
    console.log(req)
    res.statusCode = 302;
    res.setHeader("Location", "http://www.roehampton.ac.uk");
    
    res.end("Hello from " + req.url.substr(1)); 
});

server.listen(port, hostname, function() {
    console.log(`Server running at http://${hostname}:${port}/`);
})