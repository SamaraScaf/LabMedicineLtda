// Este projet foi criado por mim, mas teve a contribuição, colaboração, correção de professores, 
// ex-professores, monitores, colegas de sala que estavam 
// dispostos a contribuir com a resolução do projeto proposto.

import './styles.css'

function CardInfo({ titulo, valor }) {
    return (
        <div className="card-info">
            {/* <div className="card-body">                 */}
                {/* <div className="d-flex"> */}
                    <img src="src/assets/paciente.png"/>
                    <p className="valor-text" style={{ 'margin': '0px'}}>{valor}</p>
                {/* </div>                 */}

                <h5 className="card-title mt-3">{titulo}</h5>
            </div>
        // </div>
    )
}

export default CardInfo