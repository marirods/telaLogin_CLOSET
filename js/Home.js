'use strict'
// import { getPosts } from "./getPublicacao"
// import { dadosPublicacao } from "./mostrarPublicacao"

async function navegarSite() {
    const listaPublicacao = await getPosts()
    const postagensContainer = document.getElementById('postagens')

    listaPublicacao.forEach( async (post) => {
        const publicacaoElemento = await dadosPublicacao(post)
        if (publicacaoElemento) {
            postagensContainer.appendChild(publicacaoElemento)
        }
    })
}

async function getPosts (){
    const url = 'https://back-spider.vercel.app/publicacoes/listarPublicacoes'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}



async function dadosPublicacao(publicacao){

    const user = await getUsersbyId(publicacao.idUsuario)
    const localPublicacao = document.getElementById('publicacao')

    const divPublicacao = document.createElement('div')
    divPublicacao.className =  "postagem-card"

    const divTop =  document.createElement('div')
    const spanData =  document.createElement('span')
    const divImgName =  document.createElement('div')
    const divBaixo = document.createElement('div')
    const divIcons = document.createElement('div')
    const divComentarios =  document.createElement('div')
    const divLikes =  document.createElement('div')

    const botaoLikes = document.createElement('button')
    const botaoComentarios = document.createElement('button')
    const spanComentarios =  document.createElement('span')
    const spanLikes =  document.createElement('span')

    const h4 = document.createElement('h4')
    const img = document.createElement('img')

    const divConteudo = document.createElement('div')
    const p = document.createElement('p')
    const divImg = document.createElement('div')
    const imgPublicacao = document.createElement('img')



    p.textContent = publicacao.descricao
    spanData.textContent = publicacao.dataPublicacao
    h4.textContent = user.nome 
    img.src = user.imagemPerfil
    spanComentarios.textContent = publicacao.comentarios
    spanLikes.textContent = publicacao.likes
    imgPublicacao.src = publicacao.imagem


    
    divTop.appendChild(divImgName)
    divImgName.appendChild(h4)
    divImgName.appendChild(img)
    divTop.appendChild(spanData)


    divConteudo.appendChild(p)
    divImg.appendChild(imgPublicacao)
    divConteudo.appendChild(divImg)


    divBaixo.appendChild(divIcons)

    divIcons.appendChild(divComentarios)
    divComentarios.appendChild(botaoComentarios)
    divComentarios.appendChild(spanComentarios)

    divIcons.appendChild(divLikes)
    divLikes.appendChild(botaoLikes)
    divLikes.appendChild(spanLikes)

    divPublicacao.appendChild(divTop)
    divPublicacao.appendChild(divConteudo)
    divPublicacao.appendChild(divBaixo)

    localPublicacao.appendChild(divPublicacao)


    
}

//
async function getUsersbyId (id){
    const url = `https://back-spider.vercel.app/user/pesquisarUser/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}




navegarSite()
