import './style/Banner.scss'

function Banner ({imageSrc, title}) {
    return (
            <div className='banner'>
                <img  className="banner__img" src={imageSrc} alt='banière'/>
                <h1 className='banner__shadow--title'>{title}</h1>
            </div>
    )
}

export default Banner