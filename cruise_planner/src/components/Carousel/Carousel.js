import React from 'react';
import { Carousel } from 'react-bootstrap';
import classes from './Carousel.module.css';
import slide1 from '../../assets/images/beachPhoto.jpg';
import slide2 from '../../assets/images/beachPhoto1.jpg';
import slide3 from '../../assets/images/beachPhoto2.jpg';
import slide4 from '../../assets/images/beachPhoto3.jpg';

const carousel = () => {
    return(
        <Carousel controls={false}>
            <Carousel.Item>
                <img
                    className={classes.images}
                    src={slide1}
                    alt="First slide"
                />
                <Carousel.Caption className={classes.captions}>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                   className={classes.images}
                    src={slide2}
                    alt="First slide"
                />
                <Carousel.Caption className={classes.captions}>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className={classes.images}
                    src={slide3}
                    alt="First slide"
                />
                <Carousel.Caption className={classes.captions}>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className={classes.images}
                    src={slide4}
                    alt="First slide"
                />
                <Carousel.Caption className={classes.captions}>
                <h3>Fourth slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default carousel;