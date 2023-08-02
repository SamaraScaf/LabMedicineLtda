import { useEffect, useState } from "react"
import LinhaProntuario from "../../Components/HomeComponents/LinhaProntuarioComponent/LinhaProntuarioComponent"
import { getProntuarios } from "../../services/prontuario"

function ListagemProntuarios() {

    const [prontuarios, setProntuarios] = useState([])

    const [prontuariosFiltrados, setProntuariosFiltrados] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        async function getData() {
            const response = await getProntuarios()
            console.log('-- response --')
            console.log(response)
            setProntuarios(response)
            setProntuariosFiltrados(response)
        }

        getData()
    }, [])

    const handleSearch = (event) => {
        setSearchTerm(event.target.value)
    }

    const buscarPacientes = () => {
        const termo = searchTerm.toLocaleLowerCase().trim()
        const resultado = prontuarios.filter(item => item.nomeCompleto.toLocaleLowerCase().includes(termo) || item.convenio.toLocaleLowerCase().includes(termo))

        setProntuariosFiltrados(resultado)
    }


    return (
        <div>
            <div className="row text-start">
                <h4>Utilize a barra de pesquisa para buscar</h4>
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
                <div className="col-2">REGISTRO</div>
                <div className="col-6">NOME</div>
                <div className="col-4">PLANO</div>
            </div>

            <div className="row">
                {prontuariosFiltrados.map(ListagemProntuario => {
                    return <LinhaProntuario key={ListagemProntuario.id} registro={ListagemProntuario.id} nome={ListagemProntuario.nomeCompleto} plano={ListagemProntuario.convenio} />
                })}
            </div>


        </div>
    )
}

export default ListagemProntuarios