import React, { useEffect, useState } from 'react';
import Lunch from './Lunch/Lunch';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Home from '../Home/Home';
import Services from '../Services/Services';
import Footer from './../Footer/Footer';

const Lunchs = () => {
    const [lunchs, setLunchs] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/tapos-ctrl/hot-onion-restaurent/main/src/fakeData/lunch.json')
            .then(res => res.json())
            .then(data => setLunchs(data))
    }, [])
    return (
        <>
            <Home />
            <Container maxWidth="md">
                <Grid container spacing={4}>
                    {
                        lunchs.map(lunch => <Lunch lunch={lunch} key={lunch.id} />)
                    }
                </Grid>
            </Container>
            <Services/>
            
        </>
    );
};

export default Lunchs;