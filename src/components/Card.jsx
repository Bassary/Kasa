import { Link } from 'react-router-dom'
import Data from '../back-end-data.json'
import './style/Card.scss'

function Card () {
    return (
        <div className='card-grid'>
            {Data && Data.map( data => {
                return (
                    <Link to={`/logement/${data.id}`} key={data.id}>
                    <div className='card' id={data.id}>
                        <img className='card__img' src={data.cover} alt='location'/>
                        <h3 className='card__shadow--title'>{data.title}</h3>
                    </div>
                    </Link>
                    
                )
            })
            }
        </div>
    )
}

export default Card

