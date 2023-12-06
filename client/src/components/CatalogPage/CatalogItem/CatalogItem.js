import { Link } from 'react-router-dom'
import catalogItemStyles from './catalogItem.module.css'
import { ActionButtons } from '../../ActionButtons/ActionButtons'

export const CatalogItem = ({
    car
}) => {
    return (
        <li className={catalogItemStyles.catalogItem}>
            <Link to={`/catalog/${car._id}`}>
                <img src={car.imageUrl} alt={car.brand} />
                <span>Likes: {car.likes?.length || 0}</span>
                <h2>{car.brand} - {car.model}</h2>
                <p>Price: {car.price} $</p>
            </Link>

            <ActionButtons selectedCar={car} />
        </li>
    )
}