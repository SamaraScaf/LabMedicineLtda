
import './styles.css'
import { useNavigate } from 'react-router-dom'

function LinhaProntuario({ registro, nome, plano }) {
    const navigate = useNavigate()

    const navTo = () => {
        navigate(`/prontuario/${registro}`)
    }

    return (
        <div className='card-linha' onClick={navTo}>
            <div className="row w-100"  style={{'display': 'flex', 'width': '100%', 'justifyContent': 'space-around', 'textAlign': 'center'}}>
                <div className="col-2" style={{ 'width': '30px'}}>
                    <span>{registro}</span>
                </div>
                <div className="col-6" style={{ 'width': 'fit-content', 'minWidth': '200px', 'textAlign': 'right'}}>
                    <span>{nome}</span>
                </div>
                <div className="col-4" style={{ 'width': '120px'}}>
                    <span>{plano}</span>
                </div>
            </div>
        </div>
    )
}

export default LinhaProntuario