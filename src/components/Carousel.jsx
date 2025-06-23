import './style/Carousel.scss'

function Carousel ({nextImage, prewImage, imageSrc, index, totalIndex}) {
    return (
        <div className='carousel'>
            <img className="carousel__img" src={imageSrc} alt="image logement"/>
            <div className="arrow">
                <img className="arrow__left" src="../src/assets/arrow-left.svg" onClick={prewImage} alt="Previous"/>
            <div className='slide-number'>
                <p>{index} / {totalIndex}</p>
            </div>
                <img className="arrow__right" src="../src/assets/arrow-right.svg" onClick={nextImage} alt="Next"/>
            </div>
        </div>
    )
}

export default Carousel