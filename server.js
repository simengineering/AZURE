const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static("."));

app.get('/', function(req, res)  {
    //setting middleware
res.sendFile(path.join('index.html'));
});

const server = http.createServer(app);
const port = 3000;
server.listen(port);
console.debug('Matt...your server is listening on port ' + port);
