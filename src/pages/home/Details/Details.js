import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import  Grid from '@material-ui/core/Grid';



const Details = () => {
    let { ProductId } = useParams()

    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/tapos-ctrl/hot-onion-restaurent/main/src/fakeData/allFoot.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const result = (product && product.find(pd => pd.id === parseInt(ProductId)));


    return (
        <Container maxWidth="md">
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <h1>Details now{ProductId}....{result && result.name}</h1>
                    <p>{result && result.dis}</p>
                </Grid>
                <Grid item xs={6}>
                    <img style={{width:"100%"}} src={result && result.url} alt="" />
                </Grid>


            </Grid>
        </Container>
    );
};

export default Details;