import React, { useEffect } from 'react';
import NavBar from './NavBar';
import Slide from './Slide';
import Banner from './Banner';
import MidSection from './MidSection';
import { Box, makeStyles } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts as listProducts } from '../../redux/action/productActions';
//import {products} from '../../constants/data.js';

const useStyle = makeStyles( theme => ({
    component: {
        padding: 10,
        background: '#f2f2f2'
    },
    rightWrapper: {
        background: '#ffffff',
        padding: 5,
        margin: '12px 0 0 10px',
        width: '17%',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },
    leftWrapper: {
        width: '83%',
        [theme.breakpoints.down('md')]: {
            width: '100%'
        }
    }
}));

const Home = () => {
    const classes = useStyle();
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

    const {products} = useSelector(state => state.getProducts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

  return (
      <div>
        <NavBar />
        <Box className={classes.component}>
            <Banner />
            <Box style={{display : 'flex'}}>
                <Box className={classes.leftWrapper}>
                    <Slide
                        timer= {true}
                        title="Deal of the day"
                        products={products}
                    />
                </Box>
                <Box className={classes.rightWrapper}>
                    <img src={adURL} style={{width: 230}} />
                </Box>
            </Box>
            <MidSection />
            <Slide 
                timer={false}
                title="Discount for you"
                products={products}
            />
            <Slide 
                timer={false}
                title="Suggested for You"
                products={products}
            />
            <Slide 
                timer={false}
                title="Top Selection"
                products={products}
            />
            <Slide 
                timer={false}
                title="Recommented for You"
                products={products}
            />
            <Slide 
                timer={false}
                title="Bestsellers"
                products={products}
            />
            
        </Box>
      </div>
  );
};

export default Home;
