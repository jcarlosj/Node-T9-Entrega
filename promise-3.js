let actions = [
    {
        action: 'Despertar',
        hour: '6:00',
        execute: true
    },
    {
        action: 'Tomar Transmilenio',
        hour: '7:00',
        execute: true
    },
    {
        action: 'Entrar a clase',
        hour: '8:15',
        execute: true
    },
    {
        action: 'Almorzar',
        hour: '12:00',
        execute: true
    },
    {
        action: 'Ir a trabajar',
        hour: '13:00',
        execute: true
    },
    {
        action: 'Salir del trabajo',
        hour: '20:00',
        execute: true
    },
    {
        action: 'Regresar a casa',
        hour: '23:00',
        execute: true
    },
    {
        action: 'Ver Netflix',
        hour: '01:00',
        execute: true
    }
], promise = new Promise( ( resolve, reject ) => {  
    console .log( ' > Debe despertar' );
    setTimeout( () => {
        ( actions[ 0 ] .execute && actions[ 0 ] .hour <= '6:00' ) ? resolve( true ) : reject( new Error( 'No sonó el respertador' ) );    
    }, 1500 );
}) .then( ( dataPromise ) => {
    console .log( '   Despertó', dataPromise );

    return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            console .log( ' > Debe alistarse para salir a tomar Transmilenio' );    
        }, 1000 );
        setTimeout( () => {
            ( actions[ 1 ] .execute && actions[ 1 ] .hour <= '7:00' ) ? resolve( true ) : reject( new Error( '   Paro en el portal no puede tomar el transporte' ) );       
        }, 2000 );      
    });
}) .then( ( dataPromise ) => {
    console .log( '   Tomó el transporte', dataPromise );

    return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            console .log( ' > Debe entrar a clase' );    
        }, 1000 );
        setTimeout( () => {
            ( actions[ 2 ] .execute && actions[ 2 ] .hour <= '8:15' ) ? resolve( true ) : reject( new Error( '   Paro en el portal no puede tomar el transporte' ) );       
        }, 2000 );   
    });
}) .then( ( dataPromise ) => {
    console .log( '   Entra a clase', dataPromise );

    return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            console .log( ' > Debe salir a almorzar' );    
        }, 1000 );
        setTimeout( () => {
            ( actions[ 3 ] .execute && actions[ 3 ] .hour <= '12:00' ) ? resolve( true ) : reject( new Error( '   Le sale un pelo en la sopa, no almuerza' ) ) ;       
        }, 2000 );   
    });
}) .then( ( dataPromise ) => {

    console .log( '   Almorzó', dataPromise );

    return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            console .log( ' > Debe llegar a trabajar a Bellatrix' );    
        }, 1000 );
        setTimeout( () => {
            ( actions[ 4 ] .execute && actions[ 4 ] .hour <= '13:00' ) ? resolve( true ) : reject( new Error( '   Olvida el carnet, no lo dejan ingresar' ) ) ;       
        }, 2000 );   
    });

}) .then( ( dataPromise ) => {
    console .log( '   Entra a trabajar', dataPromise );

    return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            console .log( ' > Planea salir con sus compañeros de trabajo para relajarse' );    
        }, 1000 );
        setTimeout( () => {
            ( actions[ 5 ] .execute && actions[ 5 ] .hour <= '20:00' ) ? resolve( true ) : reject( new Error( '   Lo roban' ) ) ;       
        }, 2000 );   
    });

}) .then( ( dataPromise ) => {
    console .log( '   Salió del trabajo a relajarse con sus compañeros', dataPromise );

    return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            console .log( ' > Debe regresar a casa' );    
        }, 1000 );
        setTimeout( () => {
            ( actions[ 6 ] .execute && actions[ 6 ] .hour <= '23:00' ) ? resolve( true ) : reject( new Error( '   Ha perdido las llaves, a dormir al parque' ) ) ;       
        }, 2000 );   
    });
    
}) .then( ( dataPromise ) => {
    console .log( '   Llega a casa', dataPromise );

    return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            console .log( ' > Desea acostarse a verse una serie en Netflix' );    
        }, 1000 );
        setTimeout( () => {
            ( actions[ 7 ] .execute && actions[ 7 ] .hour <= '01:00' ) ? resolve( true ) : reject( new Error( '   Olvido pagar la mensualidad, desbarata la cama y no tiene donde dormir' ) ) ;       
        }, 2000 );   
    });
    
}) .then( ( dataPromise ) => {
    if( dataPromise ) {
        console .log( '   Esta viendo Netflix', dataPromise );
    }
}) .catch( ( err ) => {
    console .log( err .message );
});