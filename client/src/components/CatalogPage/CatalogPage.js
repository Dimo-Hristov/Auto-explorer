import { useContext } from "react";
import { CarContext } from "../../contexts/CarContext";
import { CatalogItem } from "./CatalogItem/CatalogItem";
import catalogStyles from './catalogPage.module.css';

export const CatalogPage = () => {
    const { cars } = useContext(CarContext);

    return (


        <section className={catalogStyles.catalog}>
            <h1>Cars catalog</h1>
            {cars === undefined || cars.length < 1 ?
                (<h2>Sorry, we dont have available cars for sale</h2>)
                : (
                    <ul>
                        {cars.map(car => (
                            <CatalogItem key={car._id} car={car} />
                        ))}
                    </ul>
                )}


        </section>
    )
}