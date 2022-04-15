import React, { useEffect, useState } from 'react';
import BreakFastCard from './BreakFastCard/BreakFastCard';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Home from './../Home/Home';
import Services from '../Services/Services';
import Footer from '../Footer/Footer';

const BreakFasts = () => {
    const [breakFast, setBreakFast] = useState([])
   
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/tapos-ctrl/hot-onion-restaurent/main/src/fakeData/breakFest.json')
            .then(res => res.json())
            .then(data => setBreakFast(data))
    }, [])



    return (
        <>
        <Home/>
            <Container maxWidth="md">
                <Grid container spacing={4}>
                    {
                        breakFast.map(breakFast => <BreakFastCard breakFast={breakFast} key={breakFast.id} />)
                    }
                </Grid>
            </Container>
            <Services/>
            
        </>
    );
};

export default BreakFasts;