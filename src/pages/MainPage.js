import React from 'react';
import BeerList from '../components/BeerList/BeerList'
import { Container } from '@mui/material';

const MainPage = () => {
    return (
        <Container maxWidth="xl">
            <BeerList/>
        </Container>
    )
}

export default MainPage;