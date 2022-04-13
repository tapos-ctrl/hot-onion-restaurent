import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import imageOne from '../../../Image/service-1.png';
import imageTwo from '../../../../src/Image/service-2.png';
import imageThree from '../../../../src/Image/service-3.png'
import './Services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faArrowRight, faBaseball, faBus, faTruck } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


const Services = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="lg">
            <div className={classes.root}>
                <Typography gutterBottom variant="h4" component="h4">
                    Why you choose us
                </Typography>
                <Typography gutterBottom variant="p" className='service-title' component="p">
                    Barton waited twenty always repair in withir we do. An delighted offending <br /> curiosity my is dashwoods at . Boy prosperous increasing surrounded.
                </Typography>
                <Grid container spacing={3}>

                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Card elevation={0} className={classes.root}>
                            <CardActionArea>
                                <img src={imageOne} className="service-img service-img-one" alt="" />
                                <CardContent className='service-text'>
                                    <Typography gutterBottom variant="h6" component="h6">
                                    <FontAwesomeIcon className='service-icon' icon={faBus} /> Fast Delevery
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Keep your systems in syne with automated web hook based notifications each time link is paid and how we dream about our future
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                       <Link to="/paiojoijo"> See more <FontAwesomeIcon icon={faArrowRight} className="right-arrow" /></Link>
                                    </Typography>
                                    
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Card elevation={0} className={classes.root}>
                            <CardActionArea>
                                <img src={imageTwo} className="service-img service-img-two" alt="" />
                                <CardContent className='service-text'>
                                    <Typography gutterBottom variant="h6" component="h6">
                                    <FontAwesomeIcon icon={faBell} className='service-icon' /> A Good Auto Responden
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Keep your systems in syne with automated web hook based notifications each time link is paid and how we dream about our future
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    <Link to="/paiojoijo"> See more <FontAwesomeIcon icon={faArrowRight} /></Link>
                                    </Typography>
                                   
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Card elevation={0} className={classes.root}>
                            <CardActionArea>
                                <img src={imageThree} className="service-img service-img-three" alt="" />
                                <CardContent className='service-text'>
                                    <Typography gutterBottom variant="h6" component="h6">
                                    <FontAwesomeIcon icon={faTruck}  className='service-icon-three'/> Home Delivery
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Keep your systems in syne with automated web hook based notifications each time link is paid and how we dream about our future
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    <Link to="/paiojoijo"> See more <FontAwesomeIcon icon={faArrowRight} /></Link>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
};

export default Services;