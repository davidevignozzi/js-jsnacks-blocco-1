var n = prompt('scrivi un numero di quattro cifre')
if (n.length !== 4 ) {
  alert('error')
} else {
  // ***
  console.log(/* */)
}

// MIE SOLUZIONI ?? Perchè non funziona ??
// parseInt(n.length[0]) + parseInt(n.length[1]) + parseInt(n.length[2]) + parseInt(n.length[3])
// n.length[0] + n.length[1] + n.length[2] + n.length[3]
// All'interno di console.log(/* */) ^


/*
CORREZIONE
*** =
              var somma = 0

              for (var x = 0; x < 4: x++){
                somma += parseInt(n[x])
              }

***
*/
