import { useParams } from "react-router-dom";
import { CarContext } from "../../../contexts/CarContext";
import { useContext } from "react";
import detailsPageStyles from './detailsPage.module.css'

export const DetailsPage = () => {
    const { carId } = useParams();
    const { cars } = useContext(CarContext);

    const selectedCar = cars.find(x => x._id === carId);

    if (!selectedCar) {
        // TODO: add loader
        return <p>Loading...</p>;
    }

    return (
        <section className={detailsPageStyles.detailsPage}>
            <h1>Technical details</h1>
            {/* TODO: add likes */}

            <img src={selectedCar.imageUrl} alt={selectedCar.brand} />
            <table>
                <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Production year</th>
                        <th>Colror</th>
                        <th>Engine</th>
                        <th>Horse power</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{selectedCar.brand}</td>
                        <td>{selectedCar.model}</td>
                        <td>{selectedCar.year}</td>
                        <td>{selectedCar.color}</td>
                        <td>{selectedCar.engine}</td>
                        <td>{selectedCar.hp}</td>
                    </tr>
                </tbody>
            </table>

            <div className="buttons">
                <button className="submitButton">Like</button>
                <button className="submitButton" >Edit</button>
                <button className="submitButton" >Delete</button>
            </div>
        </section>
    )
}