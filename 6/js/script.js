var n = parseInt(prompt('scegli un numero da uno a 10'))
if (n > 10) {
  alert('Addio Bro')
} else {
  for (var i = 1; i <= n; i++) {
    console.log(Math.pow(i, 3))
  }
}
