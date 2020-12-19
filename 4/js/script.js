var lista = ['Davide', 'Pippo', 'Pluto', 'Paperino', 'Ciao',];

var nomeUtente = prompt('sei nella lista? Dimmi il tuo nome')

var flag = false

for (var i = 0; i < lista.length; i++) {
  if(lista[i] === nomeUtente) {
    flag = true;
    console.log('Eccoti');
  }
}

if (flag) {
  console.log('Puoi entrare')
} else {
  console.log('addio')
}
