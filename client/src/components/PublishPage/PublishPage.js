import { useForm } from "../../hooks/useForm";
import { useContext } from "react";
import { CarContext } from "../../contexts/CarContext";


export const PublishPage = () => {

    const { onCreateCarSubmit } = useContext(CarContext);


    const { formValues, onChange, onSubmit } = useForm({
        brand: '',
        model: '',
        year: '',
        imageUrl: '',
        color: '',
        engine: '',
        hp: '',
    }, onCreateCarSubmit);

    return (
        <section>
            <h1>Publish your car for sale</h1>

            <form onSubmit={onSubmit}>
                <label htmlFor="brand">Brand</label>
                <input type="text"
                    id="brand"
                    name="brand"
                    value={formValues.brand}
                    onChange={onChange}
                />

                <label htmlFor="model">Model</label>
                <input type="text"
                    name="model"
                    id="model"
                    value={formValues.model}
                    onChange={onChange}
                />

                <label htmlFor="year">Production year</label>
                <input type="number"
                    name="year"
                    id="year"
                    value={formValues.year}
                    onChange={onChange}
                />

                <label htmlFor="color">Color</label>
                <input type="text"
                    name="color"
                    id="color"
                    value={formValues.color}
                    onChange={onChange}
                />

                <label htmlFor="engine">Engine</label>
                <input type="text"
                    name="engine"
                    id="engine"
                    value={formValues.engine}
                    onChange={onChange}
                />

                <label htmlFor="hp">Horse power</label>
                <input type="number"
                    name="hp"
                    id="hp"
                    value={formValues.hp}
                    onChange={onChange}
                />

                <label htmlFor="hp">Image url</label>
                <input type="text"
                    name="imageUrl"
                    id="imageUrl"
                    value={formValues.imageUrl}
                    onChange={onChange}
                />


                <input type="submit" value='Submit' className='submitButton' />

            </form>
        </section>
    );
};