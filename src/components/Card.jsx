import Data from '../back-end-data.json'
import './style/Card.scss'

function Card () {
    return (
        <div className='card-grid'>
            {Data && Data.map( data => {
                return (
                    <div className='card' id={data.id} key={data.id}>
                        <img className='card__img' src={data.cover} alt='location'/>
                        <h3 className='card__shadow--title'>{data.title}</h3>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Card