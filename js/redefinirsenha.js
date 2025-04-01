const emailInput = document.getElementById('email')
const nextButton = document.getElementById('nextButton')

nextButton.addEventListener('click', function() {
  
  const email = emailInput.value

  
  if (email) {
    
    window.location.href = './indexs/palavraChave.html'
  } else {
    alert('Por favor, insira um email válido.')
  }
})

