import React, { useContext, useState } from "react";
import { CarContext } from "../../../contexts/CarContext";
import { CatalogItem } from "../CatalogItem/CatalogItem";
import catalogStyles from "./catalogPage.module.css";

export const CatalogPage = () => {
    const { cars } = useContext(CarContext);

    const [filters, setFilters] = useState({
        brand: "",
        minPrice: "",
        maxPrice: "",
        minYear: "",
        maxYear: "",
    });

    const applyFilters = () => {
        // Apply filters to the cars array based on the filter values
        let filteredCars = [...cars];

        if (filters.brand) {
            filteredCars = filteredCars.filter((car) => car.brand === filters.brand);
        }

        if (filters.minPrice) {
            filteredCars = filteredCars.filter(
                (car) => parseFloat(car.price) >= parseFloat(filters.minPrice)
            );
        }

        if (filters.maxPrice) {
            filteredCars = filteredCars.filter(
                (car) => parseFloat(car.price) <= parseFloat(filters.maxPrice)
            );
        }

        if (filters.minYear) {
            filteredCars = filteredCars.filter(
                (car) => parseInt(car.year) >= parseInt(filters.minYear)
            );
        }

        if (filters.maxYear) {
            filteredCars = filteredCars.filter(
                (car) => parseInt(car.year) <= parseInt(filters.maxYear)
            );
        }

        return filteredCars;
    };

    const handleFilterChange = (filterType, value) => {
        setFilters({
            ...filters,
            [filterType]: value,
        });
    };

    const filteredCars = applyFilters();

    return (
        <section className={catalogStyles.catalog}>
            <h1>Cars Catalog</h1>
            <div className={catalogStyles.filters}>
                <label>
                    Brand:
                    <select
                        value={filters.brand}
                        onChange={(e) => handleFilterChange("brand", e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="BMW">BMW</option>
                        <option value="Mercedes">Mercedes</option>
                        <option value="Audi">Audi</option>
                    </select>
                </label>

                <label>
                    Min Price:
                    <input
                        type="number"
                        value={filters.minPrice}
                        onChange={(e) => handleFilterChange("minPrice", e.target.value)}
                    />
                </label>
                <label>
                    Max Price:
                    <input
                        type="number"
                        value={filters.maxPrice}
                        onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
                    />
                </label>

                <label>
                    Min Year:
                    <input
                        type="number"
                        value={filters.minYear}
                        onChange={(e) => handleFilterChange("minYear", e.target.value)}
                    />
                </label>
                <label>
                    Max Year:
                    <input
                        type="number"
                        value={filters.maxYear}
                        onChange={(e) => handleFilterChange("maxYear", e.target.value)}
                    />
                </label>
            </div>

            <ul>
                {filteredCars.length === 0 ? (
                    <h2>No cars match the selected filters</h2>
                ) : (
                    filteredCars.map((car) => <CatalogItem key={car._id} car={car} />)
                )}
            </ul>

        </section>
    );
};
