 

exports.mess = (req, res, next) => {
	res.send('<h1>Hello world</h1>');
}

 

exports.socketIO.on("connection", function (socket) { 

	console.log(socket);

});