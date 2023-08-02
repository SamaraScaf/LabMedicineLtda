
import { useEffect, useState } from "react"
import './styles.css'
import CardPaciente from "../../Components/HomeComponents/CardPaciente/CardPaciente"
import CardInfo from "../../Components/HomeComponents/CardInfo/CardInfo"
import { contarPacientes } from "../../services/web"

const getPacientes = async () => {
    const data = await fetch ("http://localhost:3000/pacientes")
    const pacientes = await data.json ()
    return pacientes
}

const getConsultas = async () => {
    const data = await fetch ("http://localhost:3000/consultas")
    const consultas = await data.json ()
    return consultas

}

const getExames = async () => {
    const data = await fetch ("http://localhost:3000/exames")
    const exames = await data.json()
    return exames
}

function Home() {

    const [pacientes, setPacientes] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const pacientesFiltrados = pacientes.filter((paciente) => {
        return paciente.nomeCompleto.toLowerCase().includes(searchTerm.toLowerCase()) 
    })
    const [produtos, setProdutos] = useState([])
    const [consultas, setConsultas] = useState([])
    const [exames, setExames] = useState([])
    const [valorTotal, setValorTotal] = useState(0)
    const [precoMedio, setPrecoMedio] = useState(0)

    
    useEffect(() => {
        async function getData() {
            const data = await getPacientes()
            console.log(data)
            setPacientes (data)
      }

        getData()

         
    }, [])

    useEffect(() => {
        async function getData2() {
            const data = await getConsultas()
            console.log(data)
            setConsultas (data)
        }

        getData2()

         
    }, [])

    useEffect(() => {
        async function getData3() {
            const data3 = await getExames()
            console.log(data3)
            setExames (data3)
        }

        getData3()
    }, [])

    const handleSearch = (event) => {
        setSearchTerm(event.target.value)
    }

    const buscarPacientes = () => {
        const termo = searchTerm.toLocaleLowerCase().trim()
        const resultado = pacientes.filter(item => item.nome.toLocaleLowerCase().includes(termo))
        setPacientesFiltrados(resultado)
    }

    return (
        <>
            <div className="row">
                <h4>Estatísticas do Sistema</h4>
            </div>
            <div className="home_quadro-resumo">
                    <CardInfo titulo={'Pacientes'} valor={pacientes.length} />
                    <CardInfo titulo={'Consultas'} valor={consultas.length} />
                    <CardInfo titulo={'Exames'} valor={exames.length} />
            </div>

            <div className="row">
                <h4>Informações rápidas dos pacientes</h4>
            </div>
            <div className='row mt-3'>
                <div className='col-10'>
                    <input value={searchTerm} onChange={handleSearch} className='form-control w-100' type='text' placeholder='Digite o nome do paciente'/>
                </div>
                <div className='col-2'>
                    <button className='btn btn-primary w-100' onClick={buscarPacientes}>Buscar</button>
                </div>
            </div>

            <div className="lista-pacientes">
                {pacientesFiltrados.map(paciente => {
                    return <CardPaciente key={paciente.id} paciente={paciente}/>
                })}
            </div>
        </>
    )
}

export default Home