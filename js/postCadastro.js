const criarDados = async (nome, email, senha, palavraChave) => {
    const url = `https://back-spider.vercel.app/user/cadastrarUser`
    const dados = {
        nome: nome,
        email: email,
        senha: senha,
        premium : "0",
        imagemPerfil: "https://img.freepik.com/vetores-premium/icones-de-usuarios-inclui-icones-de-usuario-icones-do-pessoal-simbolos-e-elementos-de-design-grafico-de-qualidade-premium_981536-526.jpg?semt=ais_hybrid",
        palavraChave: palavraChave
    }
    console.log(dados)

    try {
        if (!nome || !userName || !email || !senha || !palavraChave) {
            return "Preencha todos os campos!"
        }
        
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dados)
        };

        const response = await fetch(url, options)

        if (!response.ok) {
            return "Erro ao cadastrar usuário!"
        }

        const result = await response.json()

        if (result) {
            window.location.href = "./indexs/palavraChave.html"
            return;  
        }

    } catch (error) {
        console.log("Erro:", error)
        return "Erro na requisição"
    }
}


export default criarDados