const login = async () => {
    const email = document.getElementById('username').value;
    const senha = document.getElementById('password').value
    
    const data = {
        email: email,
        senha: senha
    };

    const url = "https://back-spider.vercel.app/login";

    // Informações importantes para enviar na requisição
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    
    try {
        const response = await fetch(url, options)
        const result = await response.json()
        console.log("Resposta da API:", result)
    } catch (error) {
        console.error("Erro ao fazer login:", error)
    }
}

    //await fetch(url)
    //get

