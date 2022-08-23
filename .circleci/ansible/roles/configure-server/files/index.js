var http = require("http");
var server = http.createServer(function (req, res) {
res.writeHead(200);
res.end("Project 3 - Udapeople by Kofi Nyarko Kumi!");
});

server.listen(3030);