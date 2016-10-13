/// <reference path="../typings/index.d.ts" />


import { sayHello } from './greet';
import * as $ from 'jquery';
import * as moment from 'moment';

function showHello(elName, name){
    const elt = $('#greeting');
    elt.html(`${sayHello(name)} ${moment().format('DD/MM/YYYY HH:ss')}`);
}



setInterval(() => {
    showHello('greeting', 'TypeScript');
}, 1000);