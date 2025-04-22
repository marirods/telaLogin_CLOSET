'use strict';


    document.getElementById('Inscreva-se').addEventListener('click', async () => {
   
        const nome = document.getElementById('username').value
        // const userName = document.getElementById('user')?.value || ""
        const email = document.getElementById('emailuser').value
        const senha = document.getElementById('senhauser').value
        const palavraChave = document.getElementById('palavra-chave').value

        console.log(nome, email, senha, palavraChave);
        

        const resultado = await criarDados(nome, email, senha, palavraChave)
        console.log(resultado);
    })

const criarDados = async (nome, email, senha, palavraChave) => {
    const url = `https://back-spider.vercel.app/user/cadastrarUser`
    const dados = {
        nome: nome,
        email: email,
        senha: senha,
        premium : "0",
        imagemPerfil: "https://img.freepik.com/vetores-premium/icones-de-usuarios-inclui-icones-de-usuario-icones-do-pessoal-simbolos-e-elementos-de-design-grafico-de-qualidade-premium_981536-526.jpg?semt=ais_hybrid",
        senhaRecuperacao: palavraChave
    }

    // {
    //     "nome":"Vitor Amato",
    //     "email": "vitor@jesus.com",
    //     "senha":"Amato",
    //     "premium":"1",
    //     "imagemPerfil":"https://assets.propmark.com.br/uploads/2022/02/WhatsApp-Image-2022-02-18-at-08.52.06.jpeg",
    //     "senhaRecuperacao": "Gato12"
    // }


    console.log(dados)

    try {
        if (!nome || !email || !senha || !palavraChave) {
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

        // console.log(response);
        

        if (!response.ok) {
            return "Erro ao cadastrar usuário!"
        }else{

            const result = await response.json()
            window.location.href = "../index.html"
            return result ('cadastro concluido') 
        }

    } catch (error) {
        console.log("Erro:", error)
        return "Erro na requisição"
    }
}