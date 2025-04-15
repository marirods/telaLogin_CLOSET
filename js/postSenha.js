const emailInput = document.getElementById('userEmail')
const palavraChaveInput = document.getElementById('palavraChave')
const nextButton = document.getElementById('nextButton')


async function postPassword(email, chave){
  const dados = {
      email: email,
      wordKey: chave,
  }
  try {
      const response = await fetch(`https://back-spider.vercel.app/user/RememberPassword`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          
          body: JSON.stringify(
              dados
          )
      })

      if (!response.ok) {
          throw new Error('Erro ao encontrar do usuário')
      }

      return await response.json()
  } catch (error) {
      console.error(error)
      return null
  }
}

nextButton.addEventListener('click', async function() {
  
  const email = emailInput.value
  const palavraChave = palavraChaveInput.value

  console.log(email);
  const resposta = await postPassword(email, palavraChave)
  console.log(resposta);
  alert(resposta)
  

  if(resposta){
    localStorage.setItem('idUser', id)
    window.location.href = '../indexs/confirmar_senha.html'

  } else {
    alert('Por favor, insira um email válido.')
  }

})



