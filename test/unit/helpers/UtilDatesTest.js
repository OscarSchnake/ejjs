'use strict'
const UtilDates = require('../../../helpers/UtilDates');

const chai = require('chai');
const assert = chai.assert;
const should = chai.should;

describe('Test para UtilDates', function() {

    describe ('getMonday Test para 19 Abril 2018', function() {
        it ('deberia traer el lunes 16/04/2018', function() {
            let d = new Date(2018, 3, 16);  // d es 16/04/2018
            d.setHours(0,0,0,0);
            assert (d.getTime() === UtilDates.getMonday('2018-04-19').getTime());
        });
    });

    describe ('getMonday Test para 1 Enero 2017', function() {
        it ('deberia traer el lunes 26/12/2016', function() {
            let d = new Date(2016, 11, 26);
            d.setHours(0,0,0,0);
            assert (d.getTime() === UtilDates.getMonday('2017-01-01').getTime());
        });
    });

    describe ('getMonday Test para Fecha invalida', function() {
        it ('deberia traer null', function() {
            assert (UtilDates.getMonday('2017-35-01') === null);
        });
    });

    describe ('getMonday para Fecha invocada con string vacio', function() {
        it ('deberia traer null', function() {
            assert (UtilDates.getMonday('') === null);
        });
    });

});
