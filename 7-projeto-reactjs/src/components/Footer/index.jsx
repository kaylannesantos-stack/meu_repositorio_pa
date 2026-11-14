import './styles.css'

const currentYear = new Date().getFullYear()

export default function Footer () {
    return (
        <footer className="footer">
            <p>&copy; {currentYear} - Todos os direitos</p>
            <p>SENAI - Bahia</p>
        </footer>
    )
}