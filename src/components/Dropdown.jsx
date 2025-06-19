
import { useState } from 'react'
import './style/Dropdown.scss'

function Dropdown({title, children}) { //component avec title et son enfant en props (props destructuré)
// mise en place d'un State, cad d'une fonction qui prend en compte diffrente étape. Non lui ajoutons une valeur isOpen et un compteur setIsOpen qui changera la valeur.
// Valeur établie à false qui se trouve dans le useState 
    const [isOpen, setIsOpen] = useState(false)     

    // création d'une fonction qui prend en valeur setIsOpen(!isOpen), cad que le compteur prend en valuer l'oposer de isOpen, donc true.
    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="dropdown-container">
            {/* // création d'un event au click qui appel la foction qui rend la valeur isOpen en true */}
            <div className="dropdown" onClick={toggleDropdown}> 
                <h3>{title}</h3>
                {/* //condition qui change l'état du logo arrow sellon sa class CSS */}
                <img className={`dropdown__img ${isOpen ? "dropdown__img--open" : ""}`} src="./src/assets/arrow.svg"/> 
            </div>
            <p className={`dropdown__title ${isOpen ? "dropdown__title--open" : "" }`}>{children}</p>
            {/* //Idem : la class "dopdown__title" est part defaut, puis on ajout une condition si isOpen est true alors on revois la class "dropdown__title--open"  */}
        </div>
    )
}

export default Dropdown