// import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel'

const CrouselThrough = () => {
  return (
    <> <Carousel orientation="horizontal">
   <CarouselContent className="ml-4">
    <CarouselItem className="pl-4">1</CarouselItem>
    <CarouselItem className="pl-4">2</CarouselItem>
    <CarouselItem className="pl-4">3</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
</>
  
  )
}

export default CrouselThrough