import React from 'react';
import { CardMedia, CardContent, Typography, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StyledCard from '../components/StyledCard';

const CarCard = ({ car, onHighlightToggle, isHighlighted }) => {
    return (
        <StyledCard style={{ borderRadius: '12px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', maxWidth: '300px', margin: 'auto' }}>
            <CardMedia
                component="img"
                height="140"
                image={car.Img300}
                alt={car.Model}
                style={{ borderRadius: '12px 12px 0 0' }}
            />
            <CardContent style={{ padding: '16px' }}>
                <Typography variant="h6" component="div" style={{ fontWeight: 500, marginBottom: '8px' }}>
                    {car.NameMMT}
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ marginBottom: '8px' }}>
                    Year: {car.Yr} | Price: {car.Prc} Baht
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ marginBottom: '8px' }}>
                    Location: {car.Province} | Status: {car.Status}
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
                    <IconButton
                        aria-label="highlight"
                        onClick={() => onHighlightToggle(car)}
                        style={{
                            backgroundColor: isHighlighted ? '#F50057' : '#1976D2',
                            color: '#FFF',
                            borderRadius: '20px',
                            padding: '8px 16px',
                            fontSize: '14px',
                            fontWeight: 600,
                            width: 'auto',
                            justifyContent: 'center',
                            border: '1px solid',
                            transition: 'background-color 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = isHighlighted ? '#C51162' : '#1565C0';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = isHighlighted ? '#F50057' : '#1976D2';
                        }}
                    >
                        {isHighlighted ? (
                            <FavoriteIcon style={{ color: '#FFF', marginRight: '8px' }} />
                        ) : (
                            <FavoriteBorderIcon style={{ color: '#FFF', marginRight: '8px' }} />
                        )}
                        {isHighlighted ? 'Remove from Favorites' : 'Add to Favorites'}
                    </IconButton>
                </div>
            </CardContent>
        </StyledCard>
    );
};

export default CarCard;
