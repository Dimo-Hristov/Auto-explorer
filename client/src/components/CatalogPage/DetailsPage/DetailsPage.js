import { useParams } from "react-router-dom";
import { CarContext } from "../../../contexts/CarContext";
import { useContext, useState } from "react";
import detailsPageStyles from './detailsPage.module.css';
import { Link } from "react-router-dom";

export const DetailsPage = () => {
    const { carId } = useParams();
    const { cars } = useContext(CarContext);
    const [isDeleteClicked, setIsDeleteClicked] = useState(false)



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

            {isDeleteClicked
                ? (
                    <div className="deleteMessage">
                        <p>Are you sure that you want to delete this offer ?</p>
                        <Link to={`/catalog/${selectedCar._id}/delete`}>Yes</Link>
                        <button onClick={() => setIsDeleteClicked(false)}>No</button>
                    </div>
                )
                : (
                    <div className="buttons">
                        <Link className="submitButton" to={`/catalog/${selectedCar._id}/like`}>Like</Link>
                        <Link className="submitButton" to={`/catalog/${selectedCar._id}/edit`}>Edit</Link>
                        <button onClick={() => setIsDeleteClicked(true)}>Delete</button>
                    </div>
                )}

        </section>
    )
}