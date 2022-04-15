import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



const Details = () => {
    let { ProductId } = useParams()

    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/tapos-ctrl/hot-onion-restaurent/main/src/fakeData/breakFest.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const result = (product && product.find(pd => pd.id === parseInt(ProductId)));



    return (
        <div>
            <h1>Details now{ProductId}....{result && result.name}</h1>
            <img src={result && result.url} alt="" />
        </div>
    );
};

export default Details;