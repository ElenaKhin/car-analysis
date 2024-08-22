import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import { Pie, Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const Dashboard = ({ cars, MMList }) => {
    const [brandData, setBrandData] = useState({});
    const [modelData, setModelData] = useState([]);
    const [showAll, setShowAll] = useState(false); // State to manage the collapse/expand

    useEffect(() => {
        const brandMapping = {}; // To store the mapping between MkID and brand names
        MMList.forEach((item) => {
            brandMapping[item.mkID] = item.Name;
        });
    
        const brandCount = {};
        const modelCount = {};
    
        cars.forEach((car) => {
            // Get the brand name using the MkID
            const brandName = brandMapping[car.MkID] || `Unknown Brand (${car.MkID})`;
    
            // Count by brand
            if (!brandCount[brandName]) {
                brandCount[brandName] = { count: 0, value: 0 };
            }
            brandCount[brandName].count += 1;
            brandCount[brandName].value += parseInt(car.Prc.replace(/,/g, ''));
    
            // Count by model under each brand
            if (!modelCount[brandName]) {
                modelCount[brandName] = {};
            }
            if (!modelCount[brandName][car.Model]) {
                modelCount[brandName][car.Model] = { count: 0, value: 0 };
            }
            modelCount[brandName][car.Model].count += 1;
            modelCount[brandName][car.Model].value += parseInt(car.Prc.replace(/,/g, ''));
        });
    
        setBrandData(brandCount);
        setModelData(modelCount);
    }, [cars, MMList]);

    // Pie Chart Data: Display Brand Names
    const pieData = {
        labels: Object.keys(brandData), // Use the brand names as labels
        datasets: [
            {
                label: '# of Cars',
                data: Object.values(brandData).map((data) => data.count),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
            },
        ],
    };

    // Enhanced Bar Chart Data for Brand Count
    const barData = {
        labels: Object.keys(brandData),
        datasets: [
            {
                label: 'Number of Cars',
                data: Object.values(brandData).map((data) => data.count),
                backgroundColor: 'rgba(54, 162, 235, 0.7)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    };

    const barOptions = {
        scales: {
            x: { grid: { display: false } },
            y: { grid: { color: 'rgba(200,200,200,0.3)' } },
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw} cars`,
                },
            },
            legend: {
                position: 'top',
                align: 'end',
                labels: {
                    padding: 20,
                    boxWidth: 15,
                },
            },
        },
        maintainAspectRatio: false,
        responsive: true,
    };

    // Determine the number of rows to show based on the collapsed state
    const rowsToShow = showAll ? Object.keys(brandData).length : 3;

    return (
        <Container maxWidth="xl" style={{ marginTop: '20px' }}>
            <Typography variant="h4" gutterBottom>
                Dashboard
            </Typography>
            <Grid container spacing={3}>
                {/* Pie Chart Section */}
                <Grid item xs={12} md={6}>
                    <Paper style={{ padding: '20px' }}>
                        <Typography variant="h6">Portion of Cars by Brand</Typography>
                        <Pie data={pieData} />
                    </Paper>
                </Grid>

                {/* Bar Chart Section */}
                <Grid item xs={12} md={6}>
                    <Paper style={{ padding: '20px', height: '400px' }}>
                        <Typography variant="h6">Number of Cars by Brand</Typography>
                        <Bar data={barData} options={barOptions} />
                    </Paper>
                </Grid>
                {/* Table Section */}
                <Grid item xs={12} md={12}>
                    <Paper style={{ padding: '20px' }}>
                        <Typography variant="h6" gutterBottom>
                            Number of Cars and Values by Brands and Models
                        </Typography>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Brand</TableCell>
                                        <TableCell align="right">Number of Cars</TableCell>
                                        <TableCell align="right">Total Value (Baht)</TableCell>
                                        <TableCell align="left">Models</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {Object.keys(brandData)
                                        .slice(0, rowsToShow)
                                        .map((brand) => (
                                            <TableRow key={brand}>
                                                <TableCell>{brand}</TableCell>
                                                <TableCell align="right">{brandData[brand].count}</TableCell>
                                                <TableCell align="right">{brandData[brand].value.toLocaleString()}</TableCell>
                                                <TableCell>
                                                    <Table size="small">
                                                        <TableBody>
                                                            {Object.keys(modelData[brand] || {}).map((model) => (
                                                                <TableRow key={model}>
                                                                    <TableCell>{model}</TableCell>
                                                                    <TableCell align="right">{modelData[brand][model].count}</TableCell>
                                                                    <TableCell align="right">{modelData[brand][model].value.toLocaleString()}</TableCell>
                                                                </TableRow>
                                                            ))}
                                                        </TableBody>
                                                    </Table>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => setShowAll(!showAll)}
                            style={{ marginTop: '10px' }}
                        >
                            {showAll ? 'Collapse' : 'See More'}
                        </Button>
                    </Paper>
                </Grid>

                
            </Grid>
        </Container>
    );
};

export default Dashboard;
