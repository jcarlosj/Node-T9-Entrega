/** Callback */
let multiplica = new Promise( ( resolve, reject ) => {
    let num = 2;
    console .log( `Inicia > Valor: ${ num }` );
    isNaN( num ) ? reject( new Error( 'Esto no es un numero') ) : resolve( num );
}) .then( ( num ) => {
    return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            console .log( 'Procesando...' );
            return resolve( [ num, num * num ] );
        }, 1000 );
    });
}). then( ( values ) => {
    console .log( `Finaliza > Valor: ${ values[ 0 ] } y el resultado = ${ values[ 1 ] }` );
}).catch( ( err ) => {
    console .log( err .message );
});