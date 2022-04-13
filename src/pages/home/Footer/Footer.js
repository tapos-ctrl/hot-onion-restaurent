import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import logo from '../../../../src/Image/logo.png';
import './Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='footer'>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <img src={logo} className="footer-logo" alt="" />
                    </Grid>
                    <Grid item sm={12} xs={12} lg={3} md={3} >
                        <div className="footer-list">
                            <li><Link to="#">About online foot</Link></li>
                            <li><Link to="#">Read our blog</Link></li>
                            <li><Link to="#">Sign up to deliver</Link></li>
                            <li><Link to="#">Add your restaurant</Link></li>
                        </div>
                    </Grid>
                    <Grid item sm={12} xs={12} lg={3} md={3}>
                        <div className="footer-list-two">
                            <li><Link to="#">Get help</Link></li>
                            <li><Link to="#">Read FAQs</Link></li>
                            <li><Link to="#">View all cities</Link></li>
                            <li><Link to="#">Restaurants near me</Link></li>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Footer;