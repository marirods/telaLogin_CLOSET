 async function getUsersbyId (id){
    const url = `https://back-spider.vercel.app/user/pesquisarUser/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

