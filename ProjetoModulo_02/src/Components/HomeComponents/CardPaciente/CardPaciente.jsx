import './styles.css'

const calculaIdade = (data) => {
    return 2023 - Number(data.split("/")[2])
  }

function CardPaciente({paciente}) {
    const { nomeCompleto, dataNascimento, telefone, convenio } = paciente
    return (
        <div className="card-paciente">           
            <img src="src/assets/paciente.png"/>
            <span className="nome_paciente">{nomeCompleto}</span>
            <span className="idade_paciente">{calculaIdade(dataNascimento)} anos</span>
            <span className="tel_paciente">{telefone}</span>
            {convenio === 'Sem Plano' ? 
                (<span className="plano_paciente sem_plano">{convenio}</span>) : 
                (<span className="plano_paciente">{convenio}</span>)
            }
            
            <span className="ver_mais">Ver Mais</span>
        </div>
    )   
}

export default CardPaciente

