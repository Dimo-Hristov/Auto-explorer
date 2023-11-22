import { useContext } from "react";
import { CarContext } from "../../contexts/CarContext";
import { CatalogItem } from "./CatalogItem/CatalogItem";

export const CatalogPage = () => {
    const { cars } = useContext(CarContext);

    return (
        <section>
            <h1>Cars catalog</h1>
            <ul>
                {cars.map(car => (
                    <CatalogItem key={car._id} car={car} />
                ))}
            </ul>
        </section>
    )
}