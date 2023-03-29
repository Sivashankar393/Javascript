//factor of 24  are 1,3,4,6,12,24
var a=1
for ( a=1; a<=24; a++ ){
    if( 24 % a === 0 ){
        console.log( a );
        a++
}   
}
