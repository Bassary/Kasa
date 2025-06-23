import { useParams } from 'react-router-dom';
import Data from '../../back-end-data.json';
import Carousel from '../Carousel';
import '../style/Carousel.scss';
import { useState } from 'react';
import Dropdown from '../Dropdown';
import RatingStar from '../RatingStar';
import '../style/Logements.scss'
import '../style/Carousel.scss'

function Logements() {
    const { id } = useParams();
    const logement = Data.find((logement) => logement.id === id);
    const [slide, setSlide] = useState(0);
    const total = logement.pictures.length

    const nextSlide = () => {
        setSlide((prevSlide) => (prevSlide + 1) % total);
    };

    const prevSlide = () => {
        setSlide((prevSlide) => (prevSlide - 1 + total) % total);
    };

    
    return (
        <main className='content'>
            <Carousel key={total} imageSrc={logement.pictures[slide]} index={slide + 1} totalIndex={total} nextImage={nextSlide} prewImage={prevSlide}/>
            <section className='information'>
                <div className='section-info'>
                    <div className='section-title-tag'>
                        <div>
                            <h2 className='title'>{logement.title}</h2>
                            <p className='localisation'>{logement.location}</p>
                        </div> 
                        <ul className='tag'>{logement.tags.map((tag, index) => (
                            <li className='tag__style' key={index}>{tag}</li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className='section-host'>
                        <div className='host'>
                            <p className='host__name'>{logement.host.name}</p>
                            <img className='host__profile' src={logement.host.picture} alt='image profil'/>
                        </div>
                        <RatingStar note={logement.rating}/>   
                    </div>
                </div>   
                
                <div className='section-dropdown'>
                    <Dropdown title="Description">{logement.description}</Dropdown>
                    <Dropdown title="Équipements">
                        <ul className='list'>{logement.equipments.map((list, index) =>(
                            <li key={index}>{list}</li>
                        ))}</ul>
                    </Dropdown>
                </div>
            </section>
            
        </main>
    );
}

export default Logements;