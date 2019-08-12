/** Callback */
function multiplicaPorSiMismo( valor, ejecuta ) {
    console .log( `Inicia > Valor: ${ valor }` );
    setTimeout( () => {
        ejecuta( valor, valor * valor );
    }, 1000 );
}

multiplicaPorSiMismo( 2, ( valor, resultado ) => {
    console .log( `Finaliza > Valor: ${ valor } y el resultado = ${ resultado }` );
}); 

console .log( 'Procesando...' );