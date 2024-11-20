import '../styles/header.css'
import { Link } from 'react-router-dom'

function Header() {
    return(
        <div className='header_div'>
            <ul className='header_ul'>
                <li><Link className='link' to="/">Home</Link></li>
                <li><Link className='link' to="/about">Sobre</Link></li>
                <li><Link className='link' to="/references">Referências</Link></li>
                <li><Link className='link' to="/participants">Participantes</Link></li>
            </ul>
        </div>
    );
}

export default Header;