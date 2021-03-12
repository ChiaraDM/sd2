const http = require("http");

const hostname = "127.0.0.1";

const port = 3000;

const server = http.createServer(function(req, res) {
    console.log(req)
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    var name = req.url; //                   /Kristof /I'm%20Chiara
    var justname = name.substr(1);  //       Kristof   I'm%20Chiara
    var decodedjustname = decodeURIComponent(justname) // I'm Chiara
    res.end("Hello, " + decodedjustname); 
});

server.listen(port, hostname, function() {
    console.log(`Server running at http://${hostname}:${port}/`);
})