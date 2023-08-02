import React, { useState } from 'react';
import { CadastrarPaciente } from '../../services/pacientes';
import './styles.css'

function CadastroPaciente ()  {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    genero: '',
    dataNascimento: '',
    cpf: '',
    rg: '',
    estadoCivil: '',
    telefone: '',
    email: '',
    naturalidade: '',
    telefoneEmergencia: '',
    alergias: '',
    cuidadosEspecificos: '',
    convenio: '',
    numeroConvenio: '',
    validadeConvenio: '',
    endereco: '',
    
  });

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
    alert ("Cadastro salvo com sucesso!")
  };
    
  return (
    <div className='texto'>
      <h4>Cadastro de Paciente</h4>
      <form className='box' onSubmit={handleSubmit}>
        <div>
          <label>Nome Completo:</label>
          <input type="text" name="nome" value={formData.nomeCompleto} onChange={handleChange} required />
        </div>
        <div>
          <label>Gênero:</label>
          <input type="text" name="genero" value={formData.genero} onChange={handleChange} />
        </div>
        <div>
          <label>Data de Nascimento:</label>
          <input
            type="date"
            name="dataNascimento"
            value={formData.dataNascimento}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>CPF:</label>
          <input type="text" name="CPF" value={formData.CPG} onChange={handleChange} /></div>

          <div>
          <label>RG:</label>
          <input type="text" name="RG" value={formData.RG} onChange={handleChange} /></div>

          <div>
          <label>Estado Civil</label>
          <input type="text" name="Estado Civil" value={formData.estadoCivil} onChange={handleChange} /></div>

          <div>
          <label>Telefone</label>
          <input type="text" name="Telefone" value={formData.telefoneContato} onChange={handleChange} /></div>

          <div>
          <label>Email</label>
          <input type="text" name="Email" value={formData.email} onChange={handleChange} /></div>

          <div>
          <label>Naturalidade</label>
          <input type="text" name="Naturalidade" value={formData.naturalidade} onChange={handleChange} /></div>

          <div>
          <label>Telefone de emergência</label>
          <input type="text" name="Telefone de emergencia" value={formData.telefoneEmergencia} onChange={handleChange} /></div>

          <div>
          <label>Alergia</label>
          <input type="text" name="Alergia" value={formData.alergias} onChange={handleChange} /></div>
          
          <div>
          <label>Cuidados Específicos</label>
          <input type="text" name="Cuidados Especificos" value={formData.cuidadosEspecificos} onChange={handleChange} /></div>

          <h4 className='texto'>Convenio</h4>
          <div>
          <label>Convenio</label>
          <input type="text" name="Convenio" value={formData.convenio} onChange={handleChange} /></div>

          <div>
          <label>Número da Carteira</label>
          <input type="text" name="Numero do convenio" value={formData.numeroConvenio} onChange={handleChange} /></div>

          <div>
          <label>Validade</label>
          <input type="text" name="Validade" value={formData.validadeConvenio} onChange={handleChange} /></div>

          <h4>Endereço</h4>

          <div>
          <label>CEP</label>
          <input type="text" name="CEP" value={formData.CEP} onChange={handleChange} /></div>

          <div>
          <label>Cidade</label>
          <input type="text" name="Cidade" value={formData.cidade} onChange={handleChange} /></div>

          <div>
          <label>Estado</label>
          <input type="text" name="Estado" value={formData.estado} onChange={handleChange} /></div>

          <div>
          <label>Logradouro</label>
          <input type="text" name="Logradouro" value={formData.logradouro} onChange={handleChange} /></div>

          <div>
          <label>Número</label>
          <input type="text" name="Número" value={formData.numero} onChange={handleChange} /></div>

          <div>
          <label>Complemento</label>
          <input type="text" name="Complemento" value={formData.complemento} onChange={handleChange} /></div>

          <div>
          <label>Bairro</label>
          <input type="text" name="Bairro" value={formData.bairro} onChange={handleChange} /></div>

          <div>
          <label>Ponto de Referência</label>
          <input type="text" name="Ponto de Referência" value={formData.pontoReferencia} onChange={handleChange} /></div>

        
        <div>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  );
};

export default CadastroPaciente;