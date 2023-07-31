import { useNavigate } from "react-router-dom";
import "./styles.css"

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      
      <h4 className="texto">Geral</h4>
      <button onClick={() => navigate('/')}>Início</button>
      <button type="button" className="btn btn-primary" onClick={() => navigate('/login')}>Sair</button>
      <h4 className="texto">Pacientes</h4>
      <button onClick={() => navigate('/cadastro-paciente')}> 🞤 Cadastrar </button>
      <button onClick={() => navigate('/listar-prontuario')}>Listar Prontuário</button>
      <button onClick={() => navigate('/prontuario')}>Prontuário</button>
      <h4 className="texto">Exames</h4>
      <button onClick={() => navigate('/cadastro-consulta')}>🞤 Cadastrar Consulta</button>
      <button onClick={() => navigate('/cadastro-exame')}>🞤 Cadastrar Exame</button>
      
      {/* <button onClick={() => navigate('/cadastro-paciente')}>Cadastro paciente</button> */}
    </div>
  );
 }

export default Sidebar



















// import {useState} from 'react'
// function Sidebar () {

//  const [minimal, setMinimal] = useState(false)

//     const handleMinimal = () => {
//         setMinimal(!minimal)
//     }
  
//  return (

//   <body>
//     <div class="area"></div><nav class="main-menu">
//             <ul>
//                 <li>
//                     <a href="https://jbfarrow.com">
//                         <i class="fa fa-home fa-2x"></i>
//                         <span class="nav-text">
//                            Community Dashboard
//                         </span>
//                     </a>
                  
//                 </li>
//                 <li class="has-subnav">
//                     <a href="#">
//                         <i class="fa fa-globe fa-2x"></i>
//                         <span class="nav-text">
//                             Global Surveyors
//                         </span>
//                     </a>
                    
//                 </li>
//                 <li class="has-subnav">
//                     <a href="#">
//                        <i class="fa fa-comments fa-2x"></i>
//                         <span class="nav-text">
//                             Group Hub Forums
//                         </span>
//                     </a>
                    
//                 </li>
//                 <li class="has-subnav">
//                     <a href="#">
//                        <i class="fa fa-camera-retro fa-2x"></i>
//                         <span class="nav-text">
//                             Survey Photos
//                         </span>
//                     </a>
                   
//                 </li>
//                 <li>
//                     <a href="#">
//                         <i class="fa fa-film fa-2x"></i>
//                         <span class="nav-text">
//                             Surveying Tutorials
//                         </span>
//                     </a>
//                 </li>
//                 <li>
//                     <a href="#">
//                         <i class="fa fa-book fa-2x"></i>
//                         <span class="nav-text">
//                            Surveying Jobs
//                         </span>
//                     </a>
//                 </li>
//                 <li>
//                    <a href="#">
//                        <i class="fa fa-cogs fa-2x"></i>
//                         <span class="nav-text">
//                             Tools & Resources
//                         </span>
//                     </a>
//                 </li>
//                 <li>
//                    <a href="#">
//                         <i class="fa fa-map-marker fa-2x"></i>
//                         <span class="nav-text">
//                             Member Map
//                         </span>
//                     </a>
//                 </li>
//                 <li>
//                     <a href="#">
//                        <i class="fa fa-info fa-2x"></i>
//                         <span class="nav-text">
//                             Documentation
//                         </span>
//                     </a>
//                 </li>
//             </ul>

//             <ul class="logout">
//                 <li>
//                    <a href="#">
//                          <i class="fa fa-power-off fa-2x"></i>
//                         <span class="nav-text">
//                             Logout
//                         </span>
//                     </a>
//                 </li>  
//             </ul>
//         </nav>
//   </body>
    
// )

// }

// export default Sidebar