const URL_API = 'http://localhost:3000'

export async function criarUsuario(formData) {
    console.log(formData)
    fetch(`${URL_API}/usuarios`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    }).then((response) => response.json())
        .then(result => {
            console.log('Informação salva.', result)
        }).catch(err => {
            console.log('Erro ao salvar informação.')
            console.log(err)
        })
}