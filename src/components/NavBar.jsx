import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, IconButton } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
    const location = useLocation(); // Get the current location
    const [selectedTab, setSelectedTab] = useState(location.pathname); // Initialize with the current path

    useEffect(() => {
        setSelectedTab(location.pathname); // Update selected tab when location changes
    }, [location.pathname]);

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <AppBar position="fixed" style={{ backgroundColor: 'white', color: 'black', boxShadow: 'none', borderBottom: '1px solid #e0e0e0' }}>
            <Container maxWidth="xl">
                <Toolbar style={{ justifyContent: 'space-between' }}>
                    {/* Title */}
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontFamily: 'serif', fontWeight: 'bold' }}>
                        MODERN-CARS
                    </Typography>

                    {/* Navigation Links */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Button
                            color="inherit"
                            component={Link}
                            to="/"
                            style={{
                                margin: '0 15px',
                                textTransform: 'none',
                                padding: '8px 16px',
                                borderRadius: '20px',
                                backgroundColor: selectedTab === '/' ? '#1976d2' : 'transparent',
                                color: selectedTab === '/' ? 'white' : 'inherit',
                                fontWeight: selectedTab === '/' ? 'bold' : 'normal',
                                boxShadow: selectedTab === '/' ? '0px 4px 10px rgba(0, 0, 0, 0.1)' : 'none',
                                transition: 'all 0.3s ease',
                            }}
                            onClick={() => handleTabChange('/')}
                        >
                            Dashboard
                        </Button>
                        <Button
                            color="inherit"
                            component={Link}
                            to="/browse"
                            style={{
                                margin: '0 15px',
                                textTransform: 'none',
                                padding: '8px 16px',
                                borderRadius: '20px',
                                backgroundColor: selectedTab === '/browse' ? '#1976d2' : 'transparent',
                                color: selectedTab === '/browse' ? 'white' : 'inherit',
                                fontWeight: selectedTab === '/browse' ? 'bold' : 'normal',
                                boxShadow: selectedTab === '/browse' ? '0px 4px 10px rgba(0, 0, 0, 0.1)' : 'none',
                                transition: 'all 0.3s ease',
                            }}
                            onClick={() => handleTabChange('/browse')}
                        >
                            Browse
                        </Button>
                        <Button
                            color="inherit"
                            component={Link}
                            to="/highlighted"
                            style={{
                                margin: '0 15px',
                                textTransform: 'none',
                                padding: '8px 16px',
                                borderRadius: '20px',
                                backgroundColor: selectedTab === '/highlighted' ? '#1976d2' : 'transparent',
                                color: selectedTab === '/highlighted' ? 'white' : 'inherit',
                                fontWeight: selectedTab === '/highlighted' ? 'bold' : 'normal',
                                boxShadow: selectedTab === '/highlighted' ? '0px 4px 10px rgba(0, 0, 0, 0.1)' : 'none',
                                transition: 'all 0.3s ease',
                            }}
                            onClick={() => handleTabChange('/highlighted')}
                        >
                            Highlighted
                        </Button>
                        <IconButton color="inherit" style={{ marginLeft: '20px' }}>
                            <SearchIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
