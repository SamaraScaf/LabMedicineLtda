const URL_API = 'http://localhost:3000'

export async function getAll() {
    const response = await fetch(`${URL_API}/home`)
    const formatado = await response.json()
    return formatado
}

export async function LoginApi(email, password) {
    const response = await fetch(`${URL_API}/usuarios`)
    const usuarios = await response.json()
    console.log (usuarios)
    const usuario = usuarios.find(usuario => 
                                    usuario.email === email 
                                    && usuario.senha === password)
    
    return usuario
}

 export async function contarPacientes() {
    const response = await fetch(`${URL_API}/pacientes`)
   const pacientes = await response.json()  
   return pacientes.length
}