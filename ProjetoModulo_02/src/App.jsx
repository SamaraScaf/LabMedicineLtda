import { useContext } from 'react';
import {
  Routes,
  Route,
  useNavigate,
  Outlet,
  Navigate,
} from 'react-router-dom';

import './App.css';

import { ThemeContext } from './context/ThemeContext';
import { AuthContext } from './context/AuthContext';
import Bootstrap from './pages/Bootstrap/Bootstrap';

import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import Cadastro from './pages/Cadastro/Cadastro';
import Prontuario from './pages/Prontuario/Prontuario';
import CadastroExame from './pages/CadastroExame/CadastroExame';
import CadastroConsulta from './pages/CadastroConsulta/CadastroConsulta';
//import ProntuarioPaciente from './pages/ProntuarioPaciente/ProntuarioPaciente';
//import CadastroPaciente from './pages/CadastroPaciente/CadastroPaciente'
import Sidebar from './Components/OtherComponents/Sidebar/Sidebar';
import CadastroPaciente from './pages/CadastroPaciente/CadastroPaciente';
import ListagemProntuarios from './pages/ListagemProntuarios/ListagemProntuarios';



const Toolbar = () => {
  return <div style={{
    flexDirection: 'row'


  }}>
    <h4>Toolbar</h4>
  </div>

};


const RotaSegura = () => {
  console.log("RotaSegura")
  const { isLoggedIn } = useContext(AuthContext)
  if (!isLoggedIn) {
    return <Navigate to="/login"></Navigate>
  }
  return (
        <Outlet />

  )
}

const Main = () => {
  return (           
      
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<RotaSegura />} >
        <Route index element={<Home />} />
        <Route path="cadastro" element={<Cadastro />} />
        <Route path="prontuario" element={<Prontuario />} />
        <Route path="cadastro-exame" element={<CadastroExame />} />
        <Route path="cadastro-paciente" element={<CadastroPaciente />} />
        <Route path="cadastro-consulta" element={<CadastroConsulta/>} />
        <Route path="listar-prontuario" element={<ListagemProntuarios/>} />
      </Route>
    </Routes>
  );
};

function App() {
   const { theme } = useContext(ThemeContext)
   const {isLoggedIn} = useContext(AuthContext)

  return (
    <div
      className="container"
      style={{
        display: 'grid',
        gridTemplateRows: 'auto 1fr',
        height: '100vh',
      }}

    >
      <Toolbar />

      <div
        className="body"
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
        }}
      >
        <Sidebar />

        <main style={{ padding: '20px 100px', overflow: 'auto' }}>
          <Main />
        </main>
      </div>
    </div>
  );
}

export default App;