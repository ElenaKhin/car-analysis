import React from 'react';
import CarCard from '../components/CarCard';
import { CardContent, Typography, Grid, Container, Box } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff'; // Import an icon to enhance the message

const HighlightedCars = ({ cars, onHighlightToggle }) => {
    return (
        <Container maxWidth="xl" style={{ marginTop: '20px' }}>
            <Grid container spacing={3}>
                {cars.map((car) => (
                    <Grid item xs={12} sm={6} md={3} key={car.Cid}>
                        <CarCard
                            car={car}
                            onHighlightToggle={onHighlightToggle}
                            isHighlighted={true}  // These are the highlighted cars
                        />
                    </Grid>
                ))}
                {/* Render placeholder if no cars are highlighted */}
                {cars.length === 0 && (
                    <Grid item xs={12}>
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                            height="300px"  // Adjust height as needed
                            textAlign="center"
                        >
                            <HighlightOffIcon style={{ fontSize: '80px', color: '#ccc' }} />
                            <Typography variant="h5" color="text.secondary" style={{ marginTop: '20px' }}>
                                You haven't highlighted any cars.
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                You can add cars to your highlights by selecting them in the dashboard.
                            </Typography>
                        </Box>
                    </Grid>
                )}
            </Grid>
        </Container>
    );
};

export default HighlightedCars;
