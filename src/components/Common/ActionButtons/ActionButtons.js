import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CarContext } from "../../../contexts/CarContext";
import { AuthContext } from "../../../contexts/AuthContext";
import actionButtonsStyles from './actionButtons.module.css'


export const ActionButtons = ({
    selectedCar
}) => {
    const { userId } = useContext(AuthContext);
    const carId = selectedCar._id;
    const { onLikeSubmit, onDeleteCarSubmit } = useContext(CarContext);


    const [isDeleteClicked, setIsDeleteClicked] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    const likeCarHandler = () => {
        onLikeSubmit(carId)
        setIsLiked(true)
        selectedCar.likes.push(userId)
    }


    const unLikeCarHandler = () => {
        setIsLiked(false)
        onLikeSubmit(carId)
        selectedCar.likes = selectedCar.likes.filter((like) => like !== userId)
    }


    useEffect(() => {
        const isLiked = selectedCar.likes?.some((like) => like === userId)
        setIsLiked(isLiked);
    }, [selectedCar, userId]);



    return (

        <div className={actionButtonsStyles.actionButtons}>

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
                        {userId !== undefined && (
                            <>
                                {isLiked
                                    ? (<button onClick={unLikeCarHandler}>Unlike</button>)
                                    : (<button onClick={likeCarHandler}>Like</button>)
                                }


                                {userId === selectedCar._ownerId && (
                                    <>
                                        <Link className="submitButton" to={`/catalog/${selectedCar._id}/edit`}>Edit</Link>
                                        <button onClick={() => setIsDeleteClicked(true)}>Delete</button>
                                    </>
                                )}
                            </>
                        )}

                    </div>
                )}

        </div>
    )
}
