var listaNumeri = []

var primoNumero = prompt('inserisci il primo numero')
var secondoNumero = prompt('inserisci il secondo numero')
var terzoNumero = prompt('inserisci il terzo numero')
var quartoNumero = prompt('inserisci il quarto numero')
var quintoNumero = prompt('inserisci il quinto numero')

listaNumeri.push(parseInt(primoNumero));
listaNumeri.push(parseInt(secondoNumero));
listaNumeri.push(parseInt(terzoNumero));
listaNumeri.push(parseInt(quartoNumero));
listaNumeri.push(parseInt(quintoNumero));

var somma = 0;
for (var i = 0; i < listaNumeri.lenght; i++) {
 somma += listaNumeri[i]
}
console.log('La tua somma è ' + somma)


/*
SOLUZIONE FOR
var somma = 0
for(var x = 0; x < 5; x++){
  var n = prompt('Inserisci un numero')
  somma += parseInt(n)
}
console.log('La tua somma è ' + somma)
*/

/*
SOLUZIONE DO WHILE
var somma = 0;
var x= 0;
do {
  var n = prompt('Inserisci un numero');
  somma += parseInt(n);
  x++;
} while (x < 5)
console.log('La tua somma con il while è ' + somma)
*/
/*
SOLUZIONE WHILE
var x = 0
while (x < 5) {
  var n = prompt('Inserisci numero')
  somma += parseInt(n)
  x++
}
*/
