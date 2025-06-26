import { forwardRef } from 'react'
import './style/Carousel.scss'


const Carousel = forwardRef ((props, ref) => {
    const {nextImage, prewImage, imageSrc, index, totalIndex} = props

    return (
         <div className='carousel'>
            <img className="carousel__img" src={imageSrc} alt="image logement"/>
            <div className="arrow" ref={ref}>
                <img className="arrow__left" src="../src/assets/arrow-left.svg" onClick={prewImage} alt="Previous"/>
            <div className='slide-number'>
                <p>{index} / {totalIndex}</p>
            </div>
                <img className="arrow__right" src="../src/assets/arrow-right.svg" onClick={nextImage} alt="Next"/>
            </div>
        </div>

    )
})

export default Carousel