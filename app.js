document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio do formulário
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert('Por favor, preencha todos os campos.');
    } else {
        alert('Login realizado com sucesso!');
        // Aqui você pode adicionar a lógica para enviar os dados ou navegar para outra página
    }
});
