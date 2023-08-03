import React, { useState } from 'react';
import { CadastrarPaciente } from '../../services/pacientes';


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
    alert ("cadastro salvo")
  };

      
  return (
    <div>
      <h2>Cadastro do Paciente</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome Completo:</label>
          <input type="text" name="nomeCompleto" value={formData.nomeCompleto} onChange={handleChange} required />
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
          <input type="text" name="CPF" value={formData.CPF} onChange={handleChange} /></div>

          <div>
          <label>RG:</label>
          <input type="text" name="RG" value={formData.RG} onChange={handleChange} /></div>

          <div>
          <label>Estado Civil</label>
          <input type="text" name="estadoCivil" value={formData.estadoCivil} onChange={handleChange} /></div>

          <div>
          <label>Telefone</label>
          <input type="text" name="telefone" value={formData.telefone} onChange={handleChange} /></div>

          <div>
          <label>Email</label>
          <input type="text" name="email" value={formData.email} onChange={handleChange} /></div>

          <div>
          <label>Naturalidade</label>
          <input type="text" name="naturalidade" value={formData.naturalidade} onChange={handleChange} /></div>

          <h4>Convenio</h4>
          <div>
          <label>Convenio</label>
          <input type="text" name="convenio" value={formData.convenio} onChange={handleChange} /></div>

          <div>
          <label>Número da Carteira</label>
          <input type="text" name="numeroConvenio" value={formData.numeroConvenio} onChange={handleChange} /></div>

          <div>
          <label>Validade</label>
          <input type="text" name="validadeConvenio" value={formData.validadeConvenio} onChange={handleChange} /></div>

          <h4>Endereço</h4>
          <div>
          <label>CEP</label>
          <input type="text" name="CEP" value={formData.CEP} onChange={handleChange} /></div>

          <div>
          <label>Cidade</label>
          <input type="text" name="cidade" value={formData.cidade} onChange={handleChange} /></div>

          <div>
          <label>Estado</label>
          <input type="text" name="estado" value={formData.estado} onChange={handleChange} /></div>

          <div>
          <label>Logradouro</label>
          <input type="text" name="logradouro" value={formData.logradouro} onChange={handleChange} /></div>

          <div>
          <label>Número</label>
          <input type="text" name="numero" value={formData.numero} onChange={handleChange} /></div>

          <div>
          <label>Complemento</label>
          <input type="text" name="complemento" value={formData.complemento} onChange={handleChange} /></div>

          <div>
          <label>Bairro</label>
          <input type="text" name="bairro" value={formData.bairro} onChange={handleChange} /></div>

          <div>
          <label>Ponto de Referência</label>
          <input type="text" name="pontoReferencia" value={formData.pontoReferencia} onChange={handleChange} /></div>

        
        <div>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  );
};

export default CadastroPaciente;

