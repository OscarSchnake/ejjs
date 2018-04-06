// implementación API /api/area
// OSV Agosto 2017
'use strict';
const express = require('express');

const ejjs = express.Router();


ejjs.get('/', function(req, res) {
    res.contentType('application/json');
    if (Object.keys(req.query).length !== 0 ) {
        res.status(400).json('Error en número de parámetros').end();
        return;
    }

    let json_res = {
        moraleja: 'No es que tenga deficit atencional, es que no me importa lo que dices'
    }
    res.status(200).json(json_res).end();
});

module.exports = ejjs;
