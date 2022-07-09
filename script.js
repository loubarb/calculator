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
      displayArea = ['']
      inputArea.textContent = 0
    }

    if (button.classList.contains('special')) {
      const exp = equationInput ** equationInput
      inputArea.textContent = exp
    }

    if (button.id === 'evaluate') {
      const answer = eval(equationInput)
      inputArea.textContent = answer
    }

    if (button.id === 'back') {
      displayArea.pop()
      let backup = displayArea.join('')
      inputArea.textContent = backup
      

    }
  })
})
