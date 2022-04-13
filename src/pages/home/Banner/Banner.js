import React from 'react';
import './Banner.css';


const Banner = () => {
    return (
        <>
            <div className='banner'>
            <h1 className='title'>Best food waiting for your belly</h1>
                <div className="input-box">
                    <input type="text" placeholder='search foot items' />
                    <button className='search-btn'>Search</button>
                </div>
            </div>


        </>
    );
};

export default Banner;