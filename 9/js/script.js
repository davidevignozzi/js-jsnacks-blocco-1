// CALCOLA LA SOMMA E LA MEDIA DEI PRIMI NUMERI.
var n = prompt('scrivi un numero di tre cifre')
var somma = 0

if (n.length !== 3 ) {
  alert('error')
} else {
  for (var x = 0; x < 3; x++){
    somma += parseInt(n[x])
  }
  var media = parseInt(somma / (n.length)) 

  console.log('la somma delle cifre è ' + somma)
  console.log('la media tra le cifre è ' + media)
}
