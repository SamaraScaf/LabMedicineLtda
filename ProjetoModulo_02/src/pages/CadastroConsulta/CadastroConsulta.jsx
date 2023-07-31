import React, { useState, useEffect } from 'react';

const CadastroConsulta = () => {

  const [searchTerm, setSearchTerm] = useState('')
  const [paciente, setPaciente] = useState({})

  

  const [formData, setFormData] = useState({
    motivoConsulta: '',
    dataConsulta: '',
    descricaoProblema: '',
    medicacaoReceitada: '',
    dosagemePrecaucoes: '',
 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
}

const buscarPacientes = async () => {
    const nomeDigitado = searchTerm.trim()
    const response = await buscaPorNome(nomeDigitado)
    console.log('ENCONTRADO: ', response)
    if (response.length === 0) {
        alert('Não foram encontrados pacientes com este nome digitado. Você digitou o nome completo?')
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
          <h4>Encontre o Paciente</h4>
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
                      <h4>Consulta de {paciente?.nome}</h4>
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
                          <label className="form-label">Motivo da Consulta</label>
                          <input type="text" className="form-control" placeholder="Motivo da Consulta" />
                      </div>
                  </div>
                  <div className="col">
                      <div>
                          <label className="form-label">Data</label>
                          <input type="date" className="form-control" placeholder="Data do Exame" />
                      </div>
                  </div>
                  <div className="col">
                      <div>
                          <label className="form-label">Hora</label>
                          <input type="time" className="form-control" placeholder="Hora da Consulta" />
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

export default CadastroConsulta