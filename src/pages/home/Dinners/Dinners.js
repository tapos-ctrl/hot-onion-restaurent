import React, { useEffect, useState } from 'react';
import Dinner from './Dinner/Dinner';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Home from './../Home/Home';
import Services from './../Services/Services';
import Footer from './../Footer/Footer';


const Dinners = () => {
    const [dinner, setDinner] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/tapos-ctrl/hot-onion-restaurent/main/src/fakeData/dinner.json')
            .then(res => res.json())
            .then(data => setDinner(data))
    }, [])

    return (
        <>
            <Home />
            <Container maxWidth="md">
                <Grid container spacing={4}>
                    {
                        dinner.map(dinner => <Dinner dinner={dinner} key={dinner.id} />)
                    }
                </Grid>
            </Container>
            <Services/>
        </>
    );
};

export default Dinners;