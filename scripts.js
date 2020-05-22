
const escribe = msg => {
  const $body = document.querySelector('body')
  const $message = document.createElement('p')
  $message.innerHTML = msg
  $body.appendChild($message)
}

function printString (string) {
  setTimeout(
    () => {
      escribe(string)
    },
    Math.floor(Math.random() * 100) + 1
  )
}

function printPrecuela () {
  printString('Episodio I: la amenaza fantasma')
  printString('Episodio II: el ataque de los clones')
  printString('Episodio III: la venganza de los sith')
}

function printParalelas () {
  printString('Han Solo: una historia de Star Wars')
  printString('Rogue One: una historia de Star Wars')
}

function printOriginal () {
  printString('Episodio IV: una nueva esperanza')
  printString('Episodio V: el imperio contraataca')
  printString('Episodio VI: el regreso del jedi')
}

function printSecuelas () {
  printString('Episodio VII: el despertar de la fuerza')
  printString('Episodio VIII: el último jedi')
  printString('Episodio IX: el ascenso de Skywalker')
}

function printAll () {
  printPrecuela()
  printParalelas()
  printOriginal()
  printSecuelas()
}

printAll()
