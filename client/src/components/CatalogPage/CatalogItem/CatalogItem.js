import catalogItemStyles from './catalogItem.module.css'

export const CatalogItem = ({
    car
}) => {
    return (
        <li className={catalogItemStyles.catalogItem}>
            <img src={car.imageUrl} alt={car.brand} />
            <h2>{car.brand} - {car.model}</h2>
            <p>Engine: {car.engine}</p>
        </li>
    )
}