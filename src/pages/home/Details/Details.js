import  React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



const Details = () => {
    // const [item, setItem] = useState([])
    useEffect(() => {
        fetch('breakFest.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])


   let {id} = useParams()

//    const result = item.find( (name ) => name === id );
//    console.lot(result)

    return (
        <div>
            <h1>Details now....{id}</h1>
        </div>
    );
};

export default Details;