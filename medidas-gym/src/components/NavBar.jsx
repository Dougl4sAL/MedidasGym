import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../styles/Navbar.css'

export default function Navbar() {
    return (
        <header className='header'>
            <div className="logo">LOGO</div>
            <nav className='nav-links'>
                <Link to="/" className='nav-link'>Início</Link>
                <Link to="/" className='nav-link'>Metas</Link>
                <Link to="/" className='nav-link'>Perfil</Link>
                <Link to="/" className='nav-link'>Entrar</Link>
            </nav>
        </header>
    )
}

// Tipagem das props (opcional mas recomendado)
Navbar.propTypes = {
    className: PropTypes.string
}