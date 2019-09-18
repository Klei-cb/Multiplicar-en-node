/** 
 -Requireds
 
 const fs = require('express');
 const fs = require('../carpeta/archivo');
 */

// const fs = require('fs');

// let base = 9;


// let data = "";

// for (let i = 1; i <= 10; i++) {
    //     data += `${base} * ${i} = ${base * i} \n`;
    // }
    
// fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
    //     if (err) throw err;
    //     console.log(`El archivo de la tabla del ${ base } ha sido creado!`);
    //   });

const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multilicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then( archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        
}







//let argv2 = process.argv;

//console.log(argv.base);

//let parametro = argv[2];
//let base = parametro.split('=')[1];
        
