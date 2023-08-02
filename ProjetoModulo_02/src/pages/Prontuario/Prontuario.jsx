import { useParams, useNavigate } from 'react-router-dom'
import './styles.css'
import { useEffect, useState } from 'react'
import { getProntuario } from '../../services/prontuario'

function Prontuario() {
    const { id } = useParams()
    const [prontuario, setProntuario] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        async function getData() {
                const response = await getProntuario(id)
                console.log('response: ', response)

            setProntuario(response)
        }

        if (id) {   
            getData()
        }
    }, [])

    const editarConsulta = () => {
        navigate(`/consulta/${prontuario.consulta.id}`)
    }

    const editarExame = () => {
        navigate(`/exame/${prontuario.exame.id}`)
    }

    return (
        <div>
            <div className="infos-prontuario text-start mb-4">
                <h4>Paciente: {prontuario?.paciente?.nomeCompleto}</h4>
                <h4>Convênio: {prontuario?.paciente?.convenio}</h4>
                <h4>Alergias: Exemplo</h4>
            </div>

            <div className="infos-consulta text-start mb-4">
                <h4>Consulta:</h4>
                <div className="card-consulta">
                    <div className='row'>
                        <div className='col'>
                            <span className='fw-medium'> <b>Motivo:</b> Dor de cabeça</span>
                            <span className='fw-light f-14 mb-3'>13:24 - 01/07/2023</span>
                        </div>
                        <div className='col'>
                            <button type="button" className="btn btn-outline-secondary btn-editar" onClick={editarConsulta}>Editar</button>
                        </div>
                    </div>
                    <span><b>Descrição:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsam impedit hic quisquam iste, harum totam aut minima. </span>
                    <span><b>Medicação receitada: </b>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
                    <span><b>Dosagem e Precauções:</b> Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
                </div>
            </div>

            <div className="infos-consulta text-start">
                <h4>Exame:</h4>
                <div className="card-consulta">
                    <div className='row'>
                        <div className='col'>
                            <span className='fw-medium'><b>Exame:</b> Hemograma Completo</span>
                            <span className='fw-light f-14 mb-3'>09:23 - 03/07/2023</span>
                        </div>
                        <div className='col'>
                            <button type="button" className="btn btn-outline-secondary btn-editar" onClick={editarExame}>Editar</button>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col'>
                            <span><b>Tipo do Exame:</b> Hemograma Completo</span>
                        </div>
                        <div className='col'>
                            <span><b>Laboratório:</b> LabClin</span>
                        </div>
                    </div>

                    <span><b>URL:</b> https://www.labclin.com.br</span>
                    <span><b>Resultado: </b> Normal</span>
                </div>
            </div>

        </div>
    )
}

export default Prontuario