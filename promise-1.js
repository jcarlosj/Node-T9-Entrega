/** Promise */
let multiplica = new Promise( ( resolve, reject ) => {
    let num = 2;
    console .log( `Inicia > Valor: ${ num }` );
    isNaN( num ) ? reject( new Error( 'Esto no es un numero') ) : resolve( num );
}) .then( ( num ) => {
    return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            console .log( 'Procesando...' );
            Math .pow( num, 2 ) === num * num ? resolve( [ num, num * num ] ) : resolve( new Error( 'El calculo a fallado' ) );
        }, 1000 );
    });
}). then( ( values ) => {
    console .log( `Finaliza > Valor: ${ values[ 0 ] } y el resultado = ${ values[ 1 ] }` );
}).catch( ( err ) => {
    console .log( err .message );
});