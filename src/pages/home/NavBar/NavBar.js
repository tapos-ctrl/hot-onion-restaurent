import { Container } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Image/logo2.png';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';





const NavBar = () => {
    return (
        <div >
            <div className='navBarBg' >
                <Container maxWidth="lg" >
                    <nav className="navBar" >
                        <div className="logo" >
                            <img src={logo} alt="" />
                        </div>
                        <div className="manu" >
                            <li> <Link to="/"><FontAwesomeIcon className='shopIcon' icon={faCartShopping}/></Link></li>
                            <li className='' ><Link to="/">Login</Link></li>
                            <li className='signUpBtn' > <Link to="/" > Sign Up </Link></li>
                        </div>
                    </nav >
                </Container>
            </div>
        </div>
    );
};

export default NavBar;