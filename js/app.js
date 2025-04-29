'use strict';

const login = async () => {
    const email = document.getElementById('username').value;
    const senha = document.getElementById('password').value;

    const data = { email, senha };
    const url = "https://back-spider.vercel.app/login";

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        console.log("Resposta da API:", result);

        if (result.success) {
            localStorage.setItem("user", data)
            window.location.href = "./indexs/home.html";
        } else {
            alert("Erro: " + (result.message || "Login inválido"));
        }

    } catch (error) {
        console.error("Erro ao fazer login:", error);
        alert("Erro de rede ou servidor. Tente novamente mais tarde.");
    }
};



    //await fetch(url)
    //get