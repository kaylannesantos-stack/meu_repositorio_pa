import { Link, NavLink } from 'react-router-dom'
import './styles.css'

export default function Cabecalho(){
    return (
        <header>
            <Link to='/'>Contabilidade Simples</Link>
            <nav>
                 <NavLink to='/servicos'>Serviços</NavLink><br />
                 <NavLink to='/sobre-nos'>Sobre Nos</NavLink> <br />
                 <NavLink to='/pagina3'>pagina3</NavLink> <br />
                 <NavLink to='/pagina4'>pagina4</NavLink> <br />
            </nav>
        </header>
    )
}