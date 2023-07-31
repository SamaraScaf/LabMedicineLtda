import { useState } from "react"
import { buscaPorNome } from "../../services/pacientes"
import './styles.css'

function CadastroExame() {
    const [searchTerm, setSearchTerm] = useState('')
    const [paciente, setPaciente] = useState({})

    const [form, setForm] = useState({
        nomeExame: '',
        data: '',
        hora: '',
        tipoExame: '',
        laboratorio: '',
        urlDocumento: '',
        resultado: '',
        paciente: 0
    })

    const handleSearch = (event) => {
        setSearchTerm(event.target.value)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
            console.log(formData);    
        await CadastrarPaciente(formData)
        alert ("Cadastro salvo")
      };

    const buscarPacientes = async () => {
        const nomeDigitado = searchTerm.trim()
        const response = await buscaPorNome(nomeDigitado)
        console.log('Paciente encontrado: ', response)
        if (response.length === 0) {
            alert('Paciente não encontrado. Favor digitar novamente')
            return;
        }

        setPaciente(response[0])
        setForm(prev => ({
            ...prev,
            paciente: response[0].id
        }))
    }

    const onSubmit = () => {
        // envia form
    }
    return (
        <div className="bg-default">
            <div className='row'>
                <h4>Pesquisar Paciente</h4>
                <div className='col-10'>
                    <input value={searchTerm} onChange={handleSearch} className='form-control w-100' type='text' placeholder='Digite o nome do paciente' />
                </div>
                <div className='col-2'>
                    <button className='btn btn-primary w-100' onClick={buscarPacientes}>Buscar</button>
                </div>
            </div>

            <div className="mt-5">
                <form className="bg-white p-4 rounded-2 text-start">
                    <div className="form-header row">
                        <div className="col">
                            <h4>Exame de {paciente?.nome}</h4>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-light">Editar</button>
                            <button type="reset" className="btn btn-danger">Deletar</button>
                            <button type="submit" className="btn btn-primary">Salvar</button>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <div className="col-6">
                            <div>
                                <label className="form-label">Nome do Exame</label>
                                <input type="text" className="form-control" placeholder="Nome do Exame" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div>
                                <label className="form-label">Data</label>
                                <input type="date" className="form-control" placeholder="Data do Exame" />
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <label className="form-label">Hora</label>
                                <input type="time" className="form-control" placeholder="Hora do Exame" />
                            </div>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <div className="col">
                            <div>
                                <label className="form-label">Tipo do Exame</label>
                                <input type="text" className="form-control" placeholder="Tipo do Exame" />
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <label className="form-label">Laboratório</label>
                                <input type="text" className="form-control" placeholder="Laboratório" />
                            </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">URL do Documento do Exame</label>
                        <input type="url" className="form-control" placeholder="www.url.com/exame.pdf" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Resultado</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </form>
            </div>


        </div>
    )
}

export default CadastroExame