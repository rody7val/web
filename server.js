// dependencias
var cors = require('cors');
var express = require('express');

// nueva applicación
var app = express();

// configuración del servidor
app.use(cors());

// directorio píblico
app.use(express.static(__dirname + '/public'));

// lanzar servidor
app.listen(3000, "0.0.0.0", function () {
	console.log('Servidor funcionando!');
});