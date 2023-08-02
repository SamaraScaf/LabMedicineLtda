const URL_API = 'http://localhost:3000'

 export async function CadastrarPaciente (formData) {
     console.log(formData)
     fetch(`${URL_API}/pacientes`, {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(formData)
    }).then((response) => response.json())
         .then(result => {
             console.log('Informação salva. ', result)
         }).catch(err => {
             console.log('Erro ao salvar informação.')
             console.log(err)
         })
 }


export async function buscarPorNome2(searchString) {
    const res = await fetch(`${URL_API}/pacientes`)
    const pacientes = await res.json()
    return pacientes.filter(item => item.nome.includes(searchString) || item.cpf.includes(searchString))
}

export async function buscaPorNome(nome) {
    const res = await fetch(`${URL_API}/pacientes?nome=${nome}`)
    const response = await res.json()
    return response
}