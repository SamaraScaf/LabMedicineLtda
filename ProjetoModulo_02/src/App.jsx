import { useContext } from 'react';

import {
  Routes,
  Route,
  useNavigate,
  Navigate
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
import CadastroPaciente from './pages/CadastroPaciente/CadastroPaciente';
import ListagemProntuarios from './pages/ListagemProntuarios/ListagemProntuarios';
import CadastroConsulta from './pages/CadastroConsulta/CadastroConsulta';

import Sidebar from './Components/OtherComponents/Sidebar/Sidebar';
import Toolbar from './Components/OtherComponents/Toolbar/Toolbar';

function App() {
  const { theme } = useContext(ThemeContext)
  const { isLoggedIn } = useContext(AuthContext)
  // const isLoggedIn = false;

  return (
    <div
      className="container"
      style={{
        display: 'grid',
        gridTemplateRows: 'auto 1fr',
        height: '100vh',
      }}
    >
      
      {isLoggedIn && <Toolbar />}        

      <div
        className="body"
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          overflow: 'hidden'
        }}
      >

        {isLoggedIn && <Sidebar />}        

        <main style={{ padding: '20px 100px', overflow: 'auto' }}>
          <Routes>           
          <Route path="/login" element={!isLoggedIn ? <Login /> : <Navigate to="/" />} />              
          <Route path="cadastro" element={!isLoggedIn ? <Cadastro /> : <Navigate to="/" />} />
          <Route path='/' exact element={isLoggedIn ? <Home /> :  <Navigate to="/login" />} />
          <Route path="prontuario/:id" element={isLoggedIn ? <Prontuario /> : <Navigate to="/login"/>} />
          <Route path="cadastro-exame" element={isLoggedIn ? <CadastroExame /> : <Navigate to="/login"/>} />
          <Route path="cadastro-paciente" element={isLoggedIn ? <CadastroPaciente /> : <Navigate to="/login"/>} />
          <Route path="cadastro-consulta" element={isLoggedIn ? <CadastroConsulta /> : <Navigate to="/login"/>} />
          <Route path="prontuario" element={isLoggedIn ? <ListagemProntuarios /> : <Navigate to="/login"/>} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;