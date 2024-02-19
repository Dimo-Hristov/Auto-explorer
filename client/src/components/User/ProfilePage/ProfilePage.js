import { useContext, useState } from 'react';
import { CarContext } from '../../../contexts/CarContext';

import profilePageStyles from './profilePage.module.css';
import { AuthContext } from '../../../contexts/AuthContext';
import { CatalogItem } from '../../Main/CatalogItem/CatalogItem';

export const ProfilePage = () => {
    const { cars } = useContext(CarContext);
    const { userId } = useContext(AuthContext);

    const [filteredCars, setFilteredCars] = useState([]);
    const [title, setTitle] = useState('Please select one of the options')

    const showLikedCars = () => {
        const likedCars = cars.filter((car) =>
            car.likes?.some((like) => like._ownerId === userId)
        );

        setFilteredCars(likedCars);
        setTitle('You dont have liked cars yet.')
    }

    const showUploadedCars = () => {
        const uploadedCars = cars.filter((car) => car._ownerId === userId);
        setFilteredCars(uploadedCars);
        setTitle('You dont have uploaded cars yet.')
    }



    return (
        <section className={profilePageStyles.profile}>

            <div className="buttons">
                <button onClick={showLikedCars}>Show liked cars</button>
                <button onClick={showUploadedCars}>Show uploaded cars</button>
            </div>


            {filteredCars === undefined || filteredCars.length === 0 ? (
                <h3>{title}</h3>
            ) : (
                <ul>
                    {filteredCars.map(x => <CatalogItem key={x._id} car={x} />)}
                </ul>
            )

            }


        </section>
    );
};
