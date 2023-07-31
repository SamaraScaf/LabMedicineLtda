import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import LinhaProntuarioComponent from "../../components/HomeComponents/LinhaProntuarioComponent/LinhaProntuarioComponent"

function ListagemProntuarios() {

    const [prontuarios, setProntuarios] = useState([
        {
            id: 1,
            paciente: 'Cesar',
            plano: 'Plamhuv'
        },
        {
            id: 2,
            paciente: 'João',
            plano: 'SUS'
        },
        {
            id: 3,
            paciente: 'Maria',
            plano: 'Unimed'
        }

    ])

    const [prontuariosFiltrados, setProntuariosFiltrados] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        setProntuariosFiltrados(prontuarios)
    }, [])

    const handleSearch = (event) => {
        setSearchTerm(event.target.value)
    }

    const buscarPacientes = () => {
        const termo = searchTerm.toLocaleLowerCase().trim()
        const resultado = prontuarios.filter(item => item.paciente.toLocaleLowerCase().includes(termo) || item.plano.toLocaleLowerCase().includes(termo))
        setProntuariosFiltrados(resultado)
    }

    return (
        <div>
            <div className="row text-start">
                <h4>Pesquisar</h4>
            </div>
            <div className='row mt-3'>
                <div className='col-10'>
                    <input value={searchTerm} onChange={handleSearch} className='form-control w-100' type='text' placeholder='Digite o nome do paciente' />
                </div>
                <div className='col-2'>
                    <button className='btn btn-secondary w-100' onClick={buscarPacientes}>Buscar</button>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-2">Registro</div>
                <div className="col-6">Nome</div>
                <div className="col-4">Plano</div>
            </div>

            <div className="row">
            {/* {prontuariosFiltrados.map(prontuario => {
                            return <tr key={prontuario.id}>
                                <td>
                                    <Link to='/prontuario'>
                                        {prontuario.id}
                                    </Link>
                                </td>
                                <td>{prontuario.paciente}</td>
                                <td>{prontuario.plano}</td>
                            </tr>
                        })} */}
                    {prontuariosFiltrados.map(prontuario => {
                    return <LinhaProntuarioComponent key={prontuario.id} registro={prontuario.id} nome={prontuario.paciente} plano={prontuario.plano}/>
                })}                
            </div>

            
        </div>
    )
}

export default ListagemProntuarios