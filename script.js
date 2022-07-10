const inputArea = document.querySelector('.inputArea');
const buttonArea = document.querySelectorAll('button')

let displayArea = []

buttonArea.forEach(button => {
  button.addEventListener('click', () => {

    if (button.classList.contains('num') || (button.classList.contains('operator'))) {
      displayArea.push(button.value)
      const equationInput = displayArea.join('')
      inputArea.textContent = equationInput
    } 
    
    const equationInput = displayArea.join('')

    if (button.value === 'C') {
      clear()
    }

    if (button.classList.contains('special')) {
      const exp = equationInput ** 2
      const round = Number(exp.toFixed(2))

      calc(exp)

      if (exp !== Math.floor(exp)) {
        inputArea.textContent = round
      } else {
        inputArea.textContent = exp
      }
    }

    if (button.id === 'evaluate') {
      const answer = eval(equationInput)
      const round = Number(answer.toFixed(9))

      calc(answer)

      if (round.toString().length > 11 || answer.toString().length > 11) {
        inputArea.style.fontSize = '2.75rem'
      }

      if (answer !== Math.floor(answer)) {
        inputArea.textContent = round
      } else {
        inputArea.textContent = answer
      }
    }

    if (button.id === 'back') {
      displayArea.pop()
      let backup = displayArea.join('')
      inputArea.textContent = backup
    }

    if (displayArea.length === 12) {
      inputArea.style.fontSize = '2.75rem'
    } else if (displayArea.length === 13) {
      inputArea.style.fontSize = '2.5rem'
    } else if (displayArea.length === 14) {
      inputArea.style.fontSize = '2.25rem'
    } else if (displayArea.length === 15) {
      inputArea.style.fontSize = '2rem'
    } else if (displayArea.length > 16) {
      return
    }

  })
})


function clear() {
  displayArea = []
  inputArea.textContent = 0
  inputArea.style.fontSize = ''
}

function calc(answer) {
  const stringify = answer.toString()
  const answerArray = stringify.split('')
  displayArea.splice(0, displayArea.length, ...answerArray)
}