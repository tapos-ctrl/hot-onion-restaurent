import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import './BreakFastCard.css';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
const useStyles = makeStyles({
    root: {
        maxWidth: 345,

    },
    media: {
        height: 100,
        width: 100,
        margin: "10px 90px",
    },
});


const BreakFastCard = (props) => {
    const { name, url, dis, price, id } = props.breakFast;
    console.log(props)
    const classes = useStyles();
    let navigate = useNavigate()

    const handleClick = () => {

    }

    return (
        <Grid item lg={4} sm={6}>

            <Card elevation={0} className={classes.root} >
                <CardActionArea onClick={() => navigate(`/service/${id}`)}>
                    <CardMedia
                        className={classes.media}
                        image={url}
                    />
                    <CardContent className='card-title'>
                        <Typography gutterBottom variant="h6" component="h6">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {dis}
                        </Typography>
                        <Typography gutterBottom variant="h5" color="black" component="h5">
                            $ {price}
                        </Typography>
                        {/* <Button  elevation={0} color="#ffff" onClick={'tapos'} >Detals</Button> */}
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default BreakFastCard;