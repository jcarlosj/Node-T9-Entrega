/** Callback */
let multiplica = new Promise( ( resolve, reject ) => {

    function asincrono( valor, ejecucion ) { 
        console .log( `Inicia ejecución: el Valor es = ${ valor }` ); 
        setTimeout( function() { 
            ejecucion( valor, valor * valor ); 
        }, 0 | Math .random() * 100 ); 
    }

    //( asincrono && {} .toString .call( asincrono ) === '[object Function]' ) ? reject( new Error( 'No es un objeto' ) ) : 
    resolve( asincrono );

}) .then( data => { 
    return new Promise( ( reject, resolve ) => {
        console .log( data );  

        let max = 10, cnt = 0; 

        for( var i = 0; i < max; i++ ) { 
            data( i, ( valor, resultado ) => { 
                console .log( `Finaliza con el valor = ${ valor } y el resultado = ${ resultado }` );
                if ( ++cnt === max ) { 
                    console.log( 'Éxito' ); 
                } 
            }); 
        }
    });
    
})
.catch( err => {
    console .log( err .message );
});


// function asincrono( valor, ejecucion ) { 
//     console .log( `Inicia ejecución: el Valor es = ${ valor }` ); 
//     setTimeout( function() { 
//         ejecucion( valor, valor * valor ); 
//     }, 0 | Math .random() * 100 ); 
// } 
    
// var max = 10; 
// var cnt = 0; 

// for( var i = 0; i < max; i++ ) { 
//     asincrono( i, function( valor, resultado ) { 
//         console .log( `Finaliza con el valor = ${ valor } y el resultado = ${ resultado }` );
//         if ( ++cnt === max ) { 
//             console.log( 'Éxito' ); 
//         } 
//     }); 
// }