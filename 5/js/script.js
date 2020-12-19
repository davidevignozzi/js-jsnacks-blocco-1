var array = []

for (var x = 0; x < 6; x++){
  var n = prompt('Inserisci un numero');
  if (isNaN(n)) {
    alert('error')
  } else if (n % 2 !== 0) {
    array.push(n)
  }
}
console.log(array)



/*

CORREZIONE
var = n;
n = parseInt (prompt('scrivi un numero'))

//togliere isNaN dato che abbiamo usato il parseInt

--> IL RESTO E' UGUALE <--

*/
