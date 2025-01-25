import React from 'react'
import {img} from './image/data.js'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
import classes from './Carousel.module.css'
function CarouselEffect1() {
  return (
    <div>
        <Carousel
         autoPlay={true}
         infiniteLoop={true}
         showIndicators={false}
         showThumbs={false}
         >
            
            {
                img.map((imageItem)=>{
                    return <img src={imageItem}/>
                })
            }
        </Carousel>
        <div className={classes.hero__img}></div>
    </div>
  )
}

export default CarouselEffect1