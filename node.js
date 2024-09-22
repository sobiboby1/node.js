const http = require("http");

const server = http.createServer(function(req, res) {
    console.log("server is active");
    res.write("<h1>This is my homepage</h1>");
    res.end();
});

server.listen(4000);