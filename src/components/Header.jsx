import Navbar from "./Navbar"
import './style/Header.scss'

function Header() {
    return (
        <header className="header">
            <img src="src/assets/.LOGO.png" alt="Logo Kasa"/>
            <Navbar />
        </header>
    )
}

export default Header