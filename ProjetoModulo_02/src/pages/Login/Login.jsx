import React, { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginApi } from '../../services/web'
import { AuthContext } from '../../context/AuthContext'
import './styles.css'
import { criarUsuario } from '../../services/usuarios'

function Login() {
    const { login } = useContext(AuthContext)

    const inputRefs = useRef({});

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [errorForm, setErrorForm] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        setErrorForm(false)
    }, [password])

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const response = await LoginApi(email, password)
        console.log(response)
        if (!response) {
            setErrorForm(true)
            inputRefs.current.email.style.borderColor = 'red'
            inputRefs.current.password.style.borderColor = 'red'
            return;

        }
        login(response)
        navigate('/')
    }

    // 1
    const esqueciSenha = async () => {
        alert('Funcionalidade em desenvolvimento.')
    }

    return (

        <div className="d-flex login">
            <div className='image-area'>
                <img src="src/assets/inicio.jpg" alt="inicio" className="mb-3" style={{ height: 'auto', maxWidth: '400px' }}
/>
            </div>

            <form style={{ 'maxWidth': '320px' }} onSubmit={handleSubmit}>
                <div className='form-area'>
                    <h4>Não possui conta?</h4>
                    <Link className="btn btn-lg btn-primary btn-block mx-2 mt-1 mb-4" to="/cadastro" type="submit"><button>Criar Conta</button></Link>
                </div>

                <h2>Login</h2>

                <input required type="email" value={email} ref={(el) => (inputRefs.current.email = el)}
                    placeholder="Digite seu e-mail" onChange={handleEmailChange} />

                <input required type="password" minLength="6" ref={(el) => (inputRefs.current.password = el)} value={password}
                    placeholder="Digite sua senha" onChange={handlePasswordChange} />

                {errorForm && <span>E-mail e/ou senha inválidos</span>}

                <button type="submit">Entrar</button>

                <div>
                    <a onClick={esqueciSenha} className="btn btn-link" data-toggle="tooltip" data-placement="top" title="Efeito ao Clicar">
                        Esqueci a senha
                    </a>
                </div>

            </form>
        </div>
    )
}

export default Login