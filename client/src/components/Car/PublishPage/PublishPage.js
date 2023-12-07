import { useForm } from "../../../hooks/useForm";
import { useContext } from "react";
import { CarContext } from "../../../contexts/CarContext";
import { useFormValidate } from "../../../hooks/useFormValidate";

export const PublishPage = () => {
    const { onCreateCarSubmit } = useContext(CarContext);

    const { formValues, onChange, onSubmit } = useForm(
        {
            brand: "",
            model: "",
            year: "",
            imageUrl: "",
            color: "",
            engine: "",
            hp: "",
            likes: [],
        },
        onCreateCarSubmit
    );

    const formType = "publish-car";
    const { validatorsHandler, errors, isFormValid } = useFormValidate(formValues, formType);


    return (
        <section>
            <h1>Publish your car for sale</h1>

            <form onSubmit={onSubmit}>
                <label htmlFor="brand">Brand</label>
                {errors.brand && <p>{errors.brand}</p>}
                <select
                    id="brand"
                    name="brand"
                    value={formValues.brand}
                    onChange={onChange}
                    onBlur={validatorsHandler("brand")}
                >
                    <option value="">Select a brand</option>
                    <option value="BMW">BMW</option>
                    <option value="Mercedes">Mercedes</option>
                    <option value="Audi">Audi</option>
                </select>

                <label htmlFor="model">Model</label>
                {errors.model && <p>{errors.model}</p>}
                <input
                    type="text"
                    name="model"
                    id="model"
                    value={formValues.model}
                    onChange={onChange}
                    onBlur={validatorsHandler("model")}
                />
                <label htmlFor="price">Price</label>
                {errors.price && <p>{errors.price}</p>}
                <input
                    type="number"
                    name="price"
                    id="price"
                    value={formValues.price}
                    onChange={onChange}
                    onBlur={validatorsHandler("price")}
                />

                <label htmlFor="year">Production year</label>
                {errors.year && <p>{errors.year}</p>}
                <input
                    type="number"
                    name="year"
                    id="year"
                    value={formValues.year}
                    onChange={onChange}
                    onBlur={validatorsHandler("year")}
                />

                <label htmlFor="color">Color</label>
                {errors.color && <p>{errors.color}</p>}
                <input
                    type="text"
                    name="color"
                    id="color"
                    value={formValues.color}
                    onChange={onChange}
                    onBlur={validatorsHandler("color")}
                />

                <label htmlFor="engine">Engine</label>
                {errors.engine && <p>{errors.engine}</p>}
                <input
                    type="number"
                    name="engine"
                    id="engine"
                    value={formValues.engine}
                    onChange={onChange}
                    onBlur={validatorsHandler("engine")}
                />

                <label htmlFor="hp">Horse power</label>
                {errors.hp && <p>{errors.hp}</p>}
                <input
                    type="number"
                    name="hp"
                    id="hp"
                    value={formValues.hp}
                    onChange={onChange}
                    onBlur={validatorsHandler("hp")}
                />

                <label htmlFor="imageUrl">Image url</label>
                {errors.imageUrl && <p>{errors.imageUrl}</p>}
                <input
                    type="text"
                    name="imageUrl"
                    id="imageUrl"
                    value={formValues.imageUrl}
                    onChange={onChange}
                    onBlur={validatorsHandler("imageUrl")}
                    maxLength={200}
                />

                <input
                    type="submit"
                    value="Submit"
                    disabled={!isFormValid}
                    className={isFormValid ? "submitButton activeButton" : " submitButton disabledButton"}
                />
            </form>
        </section>
    );
};
