const http = require("http");
const express = require("express");
const app = express();
const hostname = "127.0.0.1";
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("hello world\n");
});

server.listen(port, hostname, () => {
    console.log(`server funcionando http://${hostname}:${port}/`);
});
