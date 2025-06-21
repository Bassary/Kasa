import { useParams } from 'react-router-dom';
import Data from '../../back-end-data.json';
import Carousel from '../Carousel';
import '../style/Carousel.scss';
import { useState } from 'react';
import Dropdown from '../Dropdown';

function Logements() {
    const { id } = useParams();
    const logement = Data.find((logement) => logement.id === id);
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide((prevSlide) => (prevSlide + 1) % logement.pictures.length);
    };

    const prevSlide = () => {
        setSlide((prevSlide) => (prevSlide - 1 + logement.pictures.length) % logement.pictures.length);
    };

    return (
        <main className='content'>
            <div className='carousel'>
                <Carousel slide={logement.pictures[slide]} key={logement.pictures[slide]} />
                <div className="arrow">
                    <img
                        className="arrow__left" src="../src/assets/arrow-left.svg" onClick={prevSlide} alt="Previous"/>
                    <div className='slide-number'>
                        <p>{slide + 1} / {logement.pictures.length}</p>
                    </div>
                    <img
                        className="arrow__right" src="../src/assets/arrow-right.svg" onClick={nextSlide} alt="Next"/>
                </div>
            </div>
            <section className='information'>
                <div>
                    <h2>{logement.title}</h2>
                    <p>{logement.location}</p>
                </div>
                <div className='section-dropdown'>
                    <Dropdown title="Description">{logement.description}</Dropdown>
                    <Dropdown title="Équipements">
                        <ul>
                            <li>{logement.equipments}</li>
                        </ul>
                    </Dropdown>
                </div>
            </section>
            
        </main>
    );
}

export default Logements;










// import { useParams } from 'react-router-dom';
// import Data from '../../back-end-data.json'
// import Carousel from '../Carousel';
// import '../style/Carousel.scss'
// import { useState } from 'react';

// function Logements() {
//     // Utilisation du hook "useParams" pour extraire les paramètres de l'URL.
//     // En locurance il va extraire le paramètre id
//     const { id } = useParams();
//     // Création d'une variable logement qui cherche dans notre talbeaux "Data"
//     // un id qui est égale à celui de l'URL
//     const logement = Data.find((logement) => logement.id === id)
//     const [slide, setSlide] = useState(0)

//     const nextSlide = () => {
//         setSlide(slide + 1)
//     }
//     return (

//        <div className='carousel'> {logement.pictures.map(picture => {
        
//         return (
//             <Carousel slide={picture} key={picture} />  
//         )
        
//        })}
//        <div className="arrow">
//             <img className="arrow__left" src="../src/assets/arrow-left.svg"></img>
//             <img className="arrow__right" src="../src/assets/arrow-right.svg" onClick={nextSlide}></img>
//         </div>
//        </div>
//     )
// }

// export default Logements;