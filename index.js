var classes = {
    religion: 'https://zoom.us/j/93842525600?pwd=YkNnWDZvZnovbFVhSE53ait6T2NPUT09',
    etica: 'https://zoom.us/j/97488381417?pwd=S2dLVkh3d2hkNzJBQU9GcmFtU2RFdz09',
    ingles: '',
    artistica: 'https://zoom.us/j/94795919533?pwd=dnNKYm5OZHJUODFSM0t6TUJ3czRyZz09',
    matematicas: 'https://zoom.us/j/91465885389?pwd=S1VNbmlNeWRUa0lGeUhsYlZNdzMvQT09',
    espanol: 'https://us02web.zoom.us/j/84033745698?pwd=VDBRNVRhVzJwK0paM1d2Q3dWcUphUT09',
    tic: 'https://us02web.zoom.us/j/82377024959?pwd=ZDZ1S0FycWdRT3ZMTHFyWVBpQytmQT09',
    contabilidad: 'https://zoom.us/j/96087047075?pwd=WlpvYjIyektQTldneWFhL2c1VkFXZz09',
    sociales: 'https://us04web.zoom.us/j/72448323032?pwd=YlNQQk84SWNHQXpZYUh5UnBwd2M3Zz09',
    quimica: 'https://zoom.us/j/93685555080?pwd=QUNpdEpzYUtpMTdsOCtxK0FXYkFjQT09',
    catedra: 'https://us02web.zoom.us/j/81006284571?pwd=ZVBSUER2U3JDaUZoMHg4MHlTSVRaZz09',
    fisica: 'https://us02web.zoom.us/j/82746456222?pwd=STJGTUZKL1NsaDFST2cyZ2lBWnVGZz09',
    ciencias: 'https://zoom.us/j/95534156343?pwd=S0o4eE5YMGpJYlR1MDV3eGpwU1U1QT09'
}

var opn = require('opn');
function joinClass(clase) {
    opn(classes[clase]);
    console.log('[LOG]: Se entró a la clase de ' + clase);
}

var inClass = false;

setInterval(function() {
    var date = new Date();
    var day = date.getDay();
    var hour = date.getHours();
    var minute = date.getMinutes();
    if(!inClass) {
        //lunes
        if(day == 1) {
            if(hour == 7 && minute == 30) {
                joinClass('religion');
                inClass = true;
                setTimeout(function() {
                    joinClass('religion')
                    console.log('[LOG]: Reset de 40 minutos de zoom gratis. (religion)');
                }, 45 * 60000);
                setTimeout(function() {
                    inClass = false;
                    console.log('[LOG]: Se terminó la clase de religión.');
                }, 60 * 60000);
            }
            if(hour == 8 && minute == 30) {
                joinClass('etica');
                inClass = true;
                setTimeout(function() {
                    joinClass('etica')
                    console.log('[LOG]: Reset de 40 minutos de zoom gratis. (etica)');
                }, 45 * 60000);
                setTimeout(function() {
                    inClass = false;
                    console.log('[LOG]: Se terminó la clase de etica.');
                }, 60 * 60000);
            }
            if(hour == 10 && minute == 30) {
                joinClass('ingles');
                inClass = true;
                setTimeout(function() {
                    joinClass('ingles')
                    console.log('[LOG]: Reset de 40 minutos de zoom gratis. (ingles)');
                    setTimeout(function() {
                        joinClass('ingles')
                        console.log('[LOG]: Reset de 40 minutos de zoom gratis. (ingles)');
                    }, 45 * 60000);
                }, 45 * 60000);
                setTimeout(function() {
                    inClass = false;
                    console.log('[LOG]: Se terminó la clase de ingles.');
                }, 120 * 60000);
            }
            if(hour == 14) {
                joinClass('artistica');
                inClass = true;
                setTimeout(function() {
                    joinClass('artistica')
                    console.log('[LOG]: Reset de 40 minutos de zoom gratis. (artistica)');
                }, 45 * 60000);
                setTimeout(function() {
                    inClass = false;
                    console.log('[LOG]: Se terminó la clase de artistica.');
                }, 60 * 60000);
            }
        }
        //martes
        if(day == 2) {
            if(hour == 7 && minute == 30) {
                joinClass('matematicas');
                inClass = true;
                setTimeout(function() {
                    joinClass('matematicas')
                    console.log('[LOG]: Reset de 40 minutos de zoom gratis. (matematicas)');
                    setTimeout(function() {
                        joinClass('matematicas')
                        console.log('[LOG]: Reset de 40 minutos de zoom gratis. (matematicas)');
                    }, 45 * 60000);
                }, 45 * 60000);
                setTimeout(function() {
                    inClass = false;
                    console.log('[LOG]: Se terminó la clase de matematicas.');
                }, 120 * 60000);
            }
            if(hour == 10 && minute == 30) {
                joinClass('espanol');
                inClass = true;
                setTimeout(function() {
                    joinClass('espanol')
                    console.log('[LOG]: Reset de 40 minutos de zoom gratis. (español)');
                }, 45 * 60000);
                setTimeout(function() {
                    inClass = false;
                    console.log('[LOG]: Se terminó la clase de español.');
                }, 60 * 60000);
            }
            if(hour == 11 && minute == 30) {
                joinClass('tic');
                inClass = true;
                setTimeout(function() {
                    joinClass('tic')
                    console.log('[LOG]: Reset de 40 minutos de zoom gratis. (TIC)');
                }, 45 * 60000);
                setTimeout(function() {
                    inClass = false;
                    console.log('[LOG]: Se terminó la clase de TIC.');
                }, 60 * 60000);
            }
        }
        //miercoles
        if(day == 3) {
            if(hour == 7 && minute == 30) {
                joinClass('contabilidad');
                inClass = true;
                setTimeout(function() {
                    joinClass('contabilidad')
                    console.log('[LOG]: Reset de 40 minutos de zoom gratis. (contabilidad)');
                    setTimeout(function() {
                        joinClass('contabilidad')
                        console.log('[LOG]: Reset de 40 minutos de zoom gratis. (contabilidad)');
                    }, 45 * 60000);
                }, 45 * 60000);
                setTimeout(function() {
                    inClass = false;
                    console.log('[LOG]: Se terminó la clase de contabilidad.');
                }, 120 * 60000);
            }
            if(hour == 10 && minute == 30) {
                joinClass('sociales');
                inClass = true;
                setTimeout(function() {
                    joinClass('sociales')
                    console.log('[LOG]: Reset de 40 minutos de zoom gratis. (sociales)');
                    setTimeout(function() {
                        joinClass('sociales')
                        console.log('[LOG]: Reset de 40 minutos de zoom gratis. (sociales)');
                    }, 45 * 60000);
                }, 45 * 60000);
                setTimeout(function() {
                    inClass = false;
                    console.log('[LOG]: Se terminó la clase de sociales.');
                }, 120 * 60000);
            }
        }
        //jueves
        if(day == 4) {
            if(hour == 7 && minute == 30) {
                joinClass('espanol');
                inClass = true;
                setTimeout(function() {
                    joinClass('espanol')
                    console.log('[LOG]: Reset de 40 minutos de zoom gratis. (español)');
                    setTimeout(function() {
                        joinClass('espanol')
                        console.log('[LOG]: Reset de 40 minutos de zoom gratis. (español)');
                    }, 45 * 60000);
                }, 45 * 60000);
                setTimeout(function() {
                    inClass = false;
                    console.log('[LOG]: Se terminó la clase de español.');
                }, 120 * 60000);
            }
            if(hour == 10 && minute == 30) {
                joinClass('quimica');
                inClass = true;
                setTimeout(function() {
                    joinClass('quimica')
                    console.log('[LOG]: Reset de 40 minutos de zoom gratis. (quimica)');
                    setTimeout(function() {
                        joinClass('quimica')
                        console.log('[LOG]: Reset de 40 minutos de zoom gratis. (quimica)');
                    }, 45 * 60000);
                }, 45 * 60000);
                setTimeout(function() {
                    inClass = false;
                    console.log('[LOG]: Se terminó la clase de quimica');
                }, 120 * 60000);
            }
        }
        //viernes
        if(day == 5) {
            if(hour == 7 && minute == 30) {
                joinClass('catedra');
                inClass = true;
                setTimeout(function() {
                    joinClass('catedra')
                    console.log('[LOG]: Reset de 40 minutos de zoom gratis. (catedra)');
                }, 45 * 60000);
                setTimeout(function() {
                    inClass = false;
                    console.log('[LOG]: Se terminó la clase de catedra.');
                }, 60 * 60000);
            }
            if(hour == 8 && minute == 30) {
                joinClass('fisica');
                inClass = true;
                setTimeout(function() {
                    joinClass('fisica')
                    console.log('[LOG]: Reset de 40 minutos de zoom gratis. (fisica)');
                }, 45 * 60000);
                setTimeout(function() {
                    inClass = false;
                    console.log('[LOG]: Se terminó la clase de fisica.');
                }, 60 * 60000);
            }
            if(hour == 10 && minute == 30) {
                joinClass('ciencias');
                inClass = true;
                setTimeout(function() {
                    joinClass('ciencias')
                    console.log('[LOG]: Reset de 40 minutos de zoom gratis. (ciencias)');
                    setTimeout(function() {
                        joinClass('ciencias')
                        console.log('[LOG]: Reset de 40 minutos de zoom gratis. (ciencias)');
                    }, 45 * 60000);
                }, 45 * 60000);
                setTimeout(function() {
                    inClass = false;
                    console.log('[LOG]: Se terminó la clase de ciencias');
                }, 120 * 60000);
            }
        }
    }
}, 1000)