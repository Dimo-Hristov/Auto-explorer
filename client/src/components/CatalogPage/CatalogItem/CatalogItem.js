import { Link } from 'react-router-dom'
import catalogItemStyles from './catalogItem.module.css'

export const CatalogItem = ({
    car
}) => {
    return (
        <li className={catalogItemStyles.catalogItem} navi>
            <Link to={`/catalog/${car._id}`}>
                <img src={car.imageUrl} alt={car.brand} />
                <h2>{car.brand} - {car.model}</h2>
                <p>Engine: {car.engine}</p>
            </Link>
        </li>
    )
}