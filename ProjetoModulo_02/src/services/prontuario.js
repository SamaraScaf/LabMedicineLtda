const URL_API = 'http://localhost:3000'

export async function getProntuarios() {
    const res = await fetch(`${URL_API}/pacientes`)
    const prontuarios = await res.json()

    return prontuarios
}

export async function prontuarios() {
    const res = await fetch(`${URL_API}/prontuarios`)
    const res2 = await fetch(`${URL_API}/pacientes`)

    const prontuarios = await res.json()
    const pacientes = await res2.json()

    let data = [];

    for (let i = 0; i < prontuarios.length; i++) {
        const pacienteEncontrado = pacientes.find(item => item.id === prontuarios[i].paciente)
        data.push({
            ...prontuarios[i],
            paciente: pacienteEncontrado
        })    
    }  
}

export async function getProntuario(id) {
    const pacienteFetch = await fetch(`${URL_API}/pacientes/${id}`)
    const paciente = await pacienteFetch.json()

    const examesFetch = await fetch(`${URL_API}/exames/?paciente=${id}`)
    const exames = await examesFetch.json()

    const consultasFetch = await fetch(`${URL_API}/consultas/?paciente=${id}`)
    const consultas = await consultasFetch.json()    

    let data = {
        paciente,
        exames,
        consultas
    }
    // console.log('INFORMAÇÕES DO PRONTUÁRIO: ', data)
    return data
}