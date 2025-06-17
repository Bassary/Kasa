import { NavLink } from "react-router-dom";
import '../style/NotFoundPage.scss'

function NotFoundPage () {
    return (
        <div className="not-found-page">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to="/">Retrouner sur la page d'accueil</NavLink>
        </div>
    )
}

export default NotFoundPage