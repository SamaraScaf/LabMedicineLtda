import { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import './styles.css'

const Toolbar = () => {
  const appName = "LabMedicine"

  const { user } = useContext(AuthContext)

  return (
    <div className='toolbar'>
        <span className='app-name'>{appName}        
        {/* <img src ="src/assets/Logo.png" alt="Logo" className="mb-3"/> */}
</span>
        <div className='user-info'>
            <span className='username'>{user.nome}</span>
        </div>
    </div>
  )
}

export default Toolbar