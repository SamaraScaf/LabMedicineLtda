import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import "./styles.css"


const Sidebar = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext)

  return (
    <div className="sidebar">
      <h4 className="texto">Geral</h4>
      {/* <button type="button" className="btn btn-primary" onClick={() => navigate('/login')}>Login</button> */}
      <button onClick={() => navigate('/')}>Início</button>
      <button type="button" className="btn btn-primary" onClick={logout}>Sair</button>
      <h4 className="texto">Pacientes</h4>
      <button onClick={() => navigate('/cadastro-paciente')}>Cadastrar Paciente</button>
      {/* <button onClick={() => navigate('/listar-prontuario')}>Listar Prontuario</button> */}
      <button onClick={() => navigate('/prontuario')}>
        Lista Prontuários</button>
      <h4 className="texto">Exames</h4>
      <button onClick={() => navigate('/cadastro-exame')}>
        Cadastro de Exame</button>
        <button onClick={() => navigate('/cadastro-consulta')}>
        Cadastro de Consulta</button>
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