'use strict';

document.addEventListener("DOMContentLoaded", () => {
  const nextButton = document.getElementById('nextButton');

  nextButton.addEventListener('click', async () => {
    const email = document.getElementById('userEmail').value.trim() || "";
    const palavraChave = document.getElementById('palavraChave').value.trim() || "";

    if (!email || !palavraChave) {
      alert('Preencha todos os campos!');
      return;
    }

    try {
      const resultadoSenha = await checarSenha(email, palavraChave);
      console.log(resultadoSenha);

      if (resultadoSenha && resultadoSenha.id) {
        localStorage.setItem('idUser', resultadoSenha.id);
        window.location.href = './confirmar_senha.html';
      } else {
        alert('Email ou palavra-chave incorretos.');
      }
    } catch (error) {
      console.error('Erro ao tentar recuperar a senha:', error);
      alert('Erro ao tentar recuperar a senha. Tente novamente mais tarde.');
    }
  });

  async function checarSenha(email, chave) {
    const url = `https://back-spider.vercel.app/user/RememberPassword`;
    const dados = {
      email: email,
      wordKey: chave,
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados),
      });

      if (!response.ok) {
        const erroTexto = await response.text();
        console.error('Status:', response.status);
        console.error('Mensagem do servidor:', erroTexto);
        throw new Error('Erro ao encontrar o usuário: ' + response.status);
      }

      return await response.json();
    } catch (error) {
      console.error('Erro capturado em checarSenha:', error);
      throw error;
    }
  }

