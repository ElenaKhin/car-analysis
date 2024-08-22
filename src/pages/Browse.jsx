import React, { useState } from 'react';
import CarCard from '../components/CarCard';
import BrandFilter from '../components/BrandFilter';
import { Grid, Container, Pagination } from '@mui/material';

const Browse = ({ cars, MMList, onHighlightToggle, highlightedCars }) => {
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [page, setPage] = useState(1);
    const carsPerPage = 12; // Number of cars to display per page

    const filteredCars = selectedBrand
        ? cars.filter((car) => car.MkID === selectedBrand)
        : cars;

    // Calculate the current page's cars
    const paginatedCars = filteredCars.slice((page - 1) * carsPerPage, page * carsPerPage);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    return (
        <Container maxWidth="xl" style={{ marginTop: '20px' }}>
            <BrandFilter
                brands={MMList}
                onSelectBrand={(brand) => {
                    setSelectedBrand(brand);
                    setPage(1); // Reset to page 1 when filtering
                }}
                selectedBrand={selectedBrand}
            />
            <Grid container spacing={3}>
                {paginatedCars.map((car) => (
                    <Grid item xs={12} sm={6} md={3} key={car.Cid}>
                        <CarCard
                            car={car}
                            onHighlightToggle={onHighlightToggle}
                            isHighlighted={highlightedCars.some(c => c.Cid === car.Cid)}
                        />
                    </Grid>
                ))}
            </Grid>
            <Pagination
                count={Math.ceil(filteredCars.length / carsPerPage)}
                page={page}
                onChange={handlePageChange}
                color="primary"
                style={{ marginTop: '20px', marginBottom: 30, display: 'flex', justifyContent: 'center' }}
            />
        </Container>
    );
};

export default Browse;
