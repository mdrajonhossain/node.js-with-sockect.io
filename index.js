const express = require('express');
const app = express();
var path = require('path');
const http = require('http');
const server = http.createServer(app);

const socketIO = require("socket.io")(server, {
    cors:{
        origin:["http://localhost"]
    }
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
server.listen(process.env.PORT || 3000, function () {
    console.log("Server is started.");
});

 
app.get('/', (req, res) => {
	res.render('index',{name:"bangladesh"});
});


socketIO.on("connection", function (socket) { 
    console.log("connect")

    socket.emit("send", "bangladesh");
}); 
