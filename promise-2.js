/** Promise */
let multiplica = new Promise( ( resolve, reject ) => {

    let asincrono = ( num, ejecucion ) => { 
        console .log( `Inicia ejecución: el Valor es = ${ num }` ); 
        setTimeout( () => { 
            ejecucion( num, num * num ); 
        }, 0 | Math .random() * 100 ); 
    }

    typeof Function !== typeof asincrono  ? reject( new Error( 'No es una Funcion' ) ) : resolve( asincrono );
}) .then( data => { 
    return new Promise( ( reject, resolve ) => {
        //console .log( data );  

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
}) .catch( err => {
    console .log( err .message );
});