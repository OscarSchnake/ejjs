// Programa principal de Servidor de Control Horario
// Optimisa 2017 Óscar Schnake
'use strict';
const express = require('express');

const path = require('path');
const bodyParser = require('body-parser');
const winston = require('winston');
winston.level = 'debug';


const ejjs = require('./routes/ejjs');

const app = express();
// BodyParser Middleware
app.use(bodyParser.json());

app.use(function(err, req, res, next) {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        Logger.logger.error('Bad JSON ' + err);
        res.status(400).send(err).end();
    } else {
        next();
    }
});


app.use(bodyParser.urlencoded({
    extended: false
}));



//IP
app.enable('trust proxy');
app.set('trust proxy', 'loopback');

//Middleware Router
app.use('/api/ejjs', ejjs);

//Error
app.use(function(req, res) {
    res.status(404).send('Error 5001 : Página no encontrada');
});

app.set('port', (process.env.PORT || 3001));

app.listen(app.get('port'), function() {
    console.log('Servidor en el puerto ' + app.get('port'));
});
