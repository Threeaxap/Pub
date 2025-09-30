import React from 'react'
import Carousel from './Carouesl'

const Carouselcomp = () => {
  return (
    <div>
        <Carousel
            baseWidth={300}
            autoplay={false}
            autoplayDelay={3000}
            pauseOnHover={true}
            loop={true}
            round={false}
        />
    </div>
  )
}

export default Carouselcomp