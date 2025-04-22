'use strict'
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('nextButton').addEventListener('click', async () => {

const digiteSenhaInput = document.getElementById('digiteSenha').value || ""
const confirmarSenhaInput = document.getElementById('confirmarSenha').value || ""
const nextButton = document.getElementById('nextButton')

async function putPassword(senha, idUser) {
  const dados = {
    senha: senha,
    idUser: idUser
  }
  try {
    const response = await fetch(`https://back-spider.vercel.app/user/newPassword/${3}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dados)
    })

    if (!response.ok) {
      throw new Error('Erro ao encontrar o usuário')
    }

    return await response.json()
  } catch (error) {
    console.error(error)
    return null
  }
}

nextButton.addEventListener('click', async function () {
  const id = localStorage.getItem('idUser') 

  const senha = digiteSenhaInput.value
  const confirmar = confirmarSenhaInput.value

  if (senha === confirmar) {
    const resposta = await putPassword(senha, id)
    if (resposta) {
      window.location.href = './index.html'
    } else {
      alert('Erro ao atualizar a senha.')
    }
  } else {
    alert('Senhas precisam ser iguais.')
  }
})
  })
