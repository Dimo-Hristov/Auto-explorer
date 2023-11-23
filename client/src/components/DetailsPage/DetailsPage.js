import { useParams } from "react-router-dom";
import { CarContext } from "../../contexts/CarContext";
import { useContext, useEffect, useState } from "react";
import detailsPageStyles from './detailsPage.module.css';
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export const DetailsPage = () => {
    const { userId } = useContext(AuthContext)
    const { carId } = useParams();
    const { cars, onDeleteCarSubmit, onLikeSubmit, onUnlikeSubmit } = useContext(CarContext);
    const [isDeleteClicked, setIsDeleteClicked] = useState(false);


    const [isLiked, setIsLiked] = useState(false);

    const likeCarHandler = () => {
        onLikeSubmit({ likedCar: carId })
        setIsLiked(true)
    }

    const unLikeCarHandler = () => {
        setIsLiked(false)
        onUnlikeSubmit(carId)
    }

    const selectedCar = cars.find(x => x._id === carId);


    const likedByCurrentUser = selectedCar?.likes?.some((like) => like._ownerId === userId);
    useEffect(() => {
        setIsLiked(likedByCurrentUser);
    }, [likedByCurrentUser]);

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
            <p>{selectedCar.likes.length}</p>

            {isDeleteClicked
                ? (
                    <div className="deleteMessage">
                        <p>Are you sure that you want to delete this offer ?</p>
                        <button onClick={() => onDeleteCarSubmit(carId)}>Yes</button>
                        <button onClick={(e) => setIsDeleteClicked()}>No</button>
                    </div>
                )
                : (
                    <div className="buttons">
                        {isLiked
                            ? (<button onClick={unLikeCarHandler}>Unlike</button>)
                            : (<button onClick={likeCarHandler}>Like</button>)
                        }



                        <Link className="submitButton" to={`/catalog/${selectedCar._id}/edit`}>Edit</Link>
                        <button onClick={() => setIsDeleteClicked(true)}>Delete</button>
                    </div>
                )}

        </section>
    )
}