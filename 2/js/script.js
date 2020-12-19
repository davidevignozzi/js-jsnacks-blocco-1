var primaParola = prompt('inserisci una parola')
var secondaParola = prompt('inserisci una seconda parola')

if (primaParola.length < secondaParola.length) {
  console.log(primaParola + ' ' + secondaParola)
} else if (secondaParola.length < primaParola.length) {
  console.log(secondaParola + ' ' + primaParola)
} else {
  console.log('E che devo fare mo?')
}
