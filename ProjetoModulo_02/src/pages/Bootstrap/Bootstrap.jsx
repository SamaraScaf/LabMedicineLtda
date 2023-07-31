import styled from 'styled-components'

const CustomButton = styled.button`
    background-color: ${props => props.primary ? '#007bff' : '#ccc'};
    color: ${props => props.primary ? '#fff' : '#000' }
`

function Bootstrap() {
    return (
        <div className="container">

            <CustomButton>Custom Button</CustomButton>
            <CustomButton primary>Custom Button (Primary)</CustomButton>
            <div className="row">
                <h4>Informações Rápidas de Pacientes</h4>


                <div className="col-10">
                    <input className="w-100" placeholder="Digite o nome do paciente" />
                </div>

                <div className="col-2">
                    <button className="btn btn-outline-secondary w-100">Buscar</button>
                </div>
            </div>


        </div>
    )
}

export default Bootstrap