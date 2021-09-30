const numbers = document.querySelectorAll('.number')
const add = document.getElementById('add')
const resta = document.getElementById('resta')
const mult = document.getElementById('multiplicar')
const dividir = document.getElementById('dividir')
const clear = document.getElementById('clear')
const raiz = document.getElementById('raiz')
const pow = document.getElementById('potencia')
const equal = document.getElementById('equal')
const pantalla = document.getElementById('resultado')

let ultOperacion = ''
let total = 0

pantalla.textContent = 0

numbers.forEach(number => {
  number.addEventListener('click', () => {
    if (pantalla.textContent === '0' || ultOperacion === 'equal') {
      pantalla.textContent = Number(number.innerText)
    } else if (pantalla.textContent.length < 10) pantalla.textContent += number.innerText
  })
})

clear.addEventListener('click', () => {
  if (pantalla.textContent.length === 1) {
    pantalla.textContent = 0
  } else pantalla.textContent = pantalla.textContent.slice(0, -1)
})

clear.addEventListener('dblclick', () => {
  pantalla.textContent = '0'
  ultOp(0, 'clear')
})

const ultOp = (previo, operacion) => {
  let pant = pantalla.textContent
  if (ultOperacion === '' || ultOperacion === 'clear') {
    total = previo
    ultOperacion = operacion
  } else
  if (ultOperacion === 'add') {
    total += previo
    ultOperacion = operacion
  } else if (ultOperacion === 'restar') {
    total -= previo
    ultOperacion = operacion
  } else
  if (ultOperacion === 'multiplicar') {
    total *= previo
    ultOperacion = operacion
  } else
  if (ultOperacion === 'dividir') {
    total /= previo
    ultOperacion = operacion
  } else
  if (ultOperacion === 'potencia') {
    total **= previo
    ultOperacion = operacion
  } else
  if (ultOperacion === 'raiz') {
    total = Math.sqrt(total)
    ultOperacion = operacion
  } else {
    ultOperacion = operacion
  }
  // eslint-disable-next-line no-unused-vars
  pant = 0
}

add.addEventListener('click', () => {
  const preRes = parseInt(pantalla.textContent)
  ultOp(preRes, 'add')
  pantalla.textContent = 0
  console.log(total)
})

resta.addEventListener('click', () => {
  const preRes = parseInt(pantalla.textContent)
  ultOp(preRes, 'restar')
  pantalla.textContent = 0
  console.log(total)
})
mult.addEventListener('click', () => {
  const preRes = parseInt(pantalla.textContent)
  ultOp(preRes, 'multiplicar')
  pantalla.textContent = 0
  console.log(total)
})
dividir.addEventListener('click', () => {
  const preRes = parseInt(pantalla.textContent)
  ultOp(preRes, 'dividir')
  pantalla.textContent = 0
  console.log(total)
})
pow.addEventListener('click', () => {
  const preRes = parseInt(pantalla.textContent)
  ultOp(preRes, 'potencia')
  pantalla.textContent = 0
  console.log(total)
})
raiz.addEventListener('click', () => {
  const preRes = parseInt(pantalla.textContent)
  ultOp(preRes, 'raiz')
  pantalla.textContent = 0
  console.log(total)
})

equal.addEventListener('click', () => {
  const preRes = parseInt(pantalla.textContent)
  ultOp(preRes, 'equal')
  pantalla.textContent = total
})
