function asincrono( valor, ejecucion ) { 
    console .log( `Inicia ejecución: el Valor es = ${ valor }` ); 
    setTimeout( function() { 
        ejecucion( valor, valor * valor ); 
    }, 0 | Math .random() * 100 ); 
} 
    
var max = 10; 
var cnt = 0; 

for( var i = 0; i < max; i++ ) { 
    asincrono( i, function( valor, resultado ) { 
        console .log( `Finaliza con el valor = ${ valor } y el resultado = ${ resultado }` );
        if ( ++cnt === max ) { 
            console.log( 'Éxito' ); 
        } 
    }); 
}
