import React from 'react';
import { Button, Container, Grid } from '@mui/material';
import styled from 'styled-components';

// Style for the Button to show selected state
const StyledButton = styled(Button)`
    && {
        background-color: ${props => (props.selected ? '#1976d2' : 'inherit')};
        color: ${props => (props.selected ? 'white' : 'inherit')};
        border: ${props => (props.selected ? '1px solid #1976d2' : '1px solid #ccc')};
        &:hover {
            background-color: ${props => (props.selected ? '#1565c0' : '#f0f0f0')};
        }
    }
`;

const BrandFilter = ({ brands, onSelectBrand, selectedBrand }) => {
    return (
        <Container maxWidth="xl" style={{ marginBottom: '20px' }}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={6} sm={4} md={3} lg={2}>
                    <StyledButton
                        fullWidth
                        variant="contained"
                        selected={selectedBrand === null}
                        onClick={() => onSelectBrand(null)}
                    >
                        All
                    </StyledButton>
                </Grid>
                {brands.map((brand) => (
                    <Grid item xs={6} sm={4} md={3} lg={2} key={brand.mkID}>
                        <StyledButton
                            fullWidth
                            variant="contained"
                            selected={selectedBrand === brand.mkID}
                            onClick={() => onSelectBrand(brand.mkID)}
                        >
                            {brand.Name}
                        </StyledButton>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default BrandFilter;
