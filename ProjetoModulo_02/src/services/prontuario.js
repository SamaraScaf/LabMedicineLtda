const URL_API = 'http://localhost:3000'

export async function prontuarios() {
    const res = await fetch(`${URL_API}/prontuarios`)
    const res2 = await fetch(`${URL_API}/pacientes`)

    const prontuarios = await res.json()
    const pacientes = await res2.json()

    let data = [];

    for (let i = 0; i < prontuarios.length; i++) {
        // prontuarios[i].paciente
        const pacienteEncontrado = pacientes.find(item => item.id === prontuarios[i].paciente)
        data.push({
            ...prontuarios[i],
            paciente: pacienteEncontrado
        })    
    }
    
    // [
    //     {
    //         "id": 1,
    //         "paciente":  {
    //             "id": 1,
    //             "nome": "Cesar Abascal",
    //             "plano": "Unimed",
    //             "idade": 30
    //           }
    //       }
    // ]

    
}

export async function getProntuario(id) {
    const res = await fetch(`${URL_API}/prontuarios/${id}`)
    const res2 = await fetch(`${URL_API}/exames`)
    const res3 = await fetch(`${URL_API}/consultas`)
    const res4 = await fetch(`${URL_API}/pacientes`)

    const prontuario = await res.json()
    const exames = await res2.json()
    const consultas = await res3.json()
    const pacientes = await res4.json()

    console.log('prontuario: ', prontuario)
    console.log('exames: ', exames)
    console.log('consultas: ', consultas)
    console.log('pacientes: ', pacientes)
    const pacienteEncontrado = pacientes.find(item => item.id === prontuario.paciente)
    const exameEncontrado = exames.find(item => item.prontuario === prontuario.id)
    const consultaEncontrada = consultas.find(item => item.prontuario === prontuario.id)
    let data = {
        ...prontuario,
        paciente: pacienteEncontrado,
        exame: exameEncontrado,
        consulta: consultaEncontrada
    }
    console.log('DADO PRONTUÁRIO: ', data)
    return data
}