import './style/Carousel.scss'

function Carousel ({slide, index}) {
    return (
        <img className="carousel__img" src={slide} alt="image logement" key={index}/>
    )
  
}

export default Carousel