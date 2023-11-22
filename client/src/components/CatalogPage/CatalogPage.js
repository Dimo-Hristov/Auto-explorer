import { useContext } from "react";
import { CarContext } from "../../contexts/CarContext";

export const CatalogPage = () => {
    const { cars } = useContext(CarContext);

    return (
        <section>
            <ul>
                {cars.map(car => (
                    <li key={car._id}>{car.brand}</li>
                ))}
            </ul>
        </section>
    )
}