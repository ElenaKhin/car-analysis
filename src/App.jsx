import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import HighlightedCars from './pages/HighlightedCars';
import Navbar from './components/Navbar';
import Browse from './pages/Browse';

const App = () => {
    const [cars, setCars] = useState([]);
    const [highlightedCars, setHighlightedCars] = useState([]);
    const [MMList, setMMList] = useState([]);

    useEffect(() => {
        import('./data/taladrod-cars.min.json').then((module) => {
            const data = module.default;
            setCars(data.Cars);
            setMMList(data.MMList);
            const storedHighlights = JSON.parse(localStorage.getItem('highlightedCars')) || [];
            setHighlightedCars(storedHighlights);
        }).catch((error) => {
            console.error("Error loading JSON data:", error);
        });
    }, []);

    const handleHighlightToggle = (car) => {
        const isHighlighted = highlightedCars.some((c) => c.Cid === car.Cid);
        const newHighlights = isHighlighted
            ? highlightedCars.filter((c) => c.Cid !== car.Cid)
            : [...highlightedCars, car];

        setHighlightedCars(newHighlights);
        localStorage.setItem('highlightedCars', JSON.stringify(newHighlights));
    };

    return (
        <>
            <Navbar />
            <div style={{ paddingTop: '64px' }}>
                <Routes>
                    <Route
                        path="/"
                        element={<Dashboard cars={cars} MMList={MMList} />}
                    />
                    <Route
                        path="/browse"
                        element={
                            <Browse
                                cars={cars}
                                MMList={MMList}
                                onHighlightToggle={handleHighlightToggle}
                                highlightedCars={highlightedCars}
                            />
                        }
                    />
                    <Route
                        path="/highlighted"
                        element={
                            <HighlightedCars
                                cars={highlightedCars}
                                onHighlightToggle={handleHighlightToggle}
                            />
                        }
                    />
                </Routes>
            </div>
        </>
    );
};

export default App;
