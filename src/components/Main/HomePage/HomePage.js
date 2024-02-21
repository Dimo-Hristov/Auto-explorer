import { CarContext } from '../../../contexts/CarContext';
import { CatalogItem } from '../CatalogItem/CatalogItem';
import homeStyles from './homePage.module.css';
import { useContext } from 'react';


export const HomePage = () => {

    const { cars } = useContext(CarContext);
    const sortedCars = cars.sort((a, b) => b.likes.length - a.likes.length).slice(0, 3);

    return (
        <section className={homeStyles.home}>
            <h1>Welcome to auto explorer</h1>
            <p>In the list below you can see the most liked cars </p>

            <ul>
                {sortedCars.map((x) => <CatalogItem car={x} key={x._id} />)}
            </ul>

        </section>
    )
}