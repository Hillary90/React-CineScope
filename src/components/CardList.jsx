import React from "react";
import CardImage from '../assets/CardImage.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 


function CardList() {
  const data = [
    {
      id: 1,
      title: 'Card1',
      description: 'Description for card 1',
      imageUrl: 'https://via.placeholder.com/150',

    },
    {
      id: 2,
      title: 'Card2',
      description: 'Description for card 1',
      imageUrl: 'https://via.placeholder.com/150',

    },
    {
      id: 3,
      title: 'Card3',
      description: 'Description for card 1',
      imageUrl: 'https://via.placeholder.com/150',

    },
    {
      id: 4,
      title: 'Card4',
      description: 'Description for card 1',
      imageUrl: 'https://via.placeholder.com/150',

    },
    {
      id: 5,
      title: 'Card5',
      description: 'Description for card 1',
      imageUrl: 'https://via.placeholder.com/150',

    },
    {
      id: 6,
      title: 'Card6',
      description: 'Description for card 1',
      imageUrl: 'https://via.placeholder.com/150',

    }
  ]
  return(
    <div  className="text-white md:px-4 bg-gray-900">
      <h2 className="pt-10 pb-5 text-lg font-medium">Upcoming</h2>

      <Swiper slidepreview={'auto'} spaceBetween={10} className="mySwiper">
        {data.map((item, index) => 

        <SwiperSlide key={index} className="max-w-70" >
          <img src={CardImage} alt="" className="h-45 w-full object-cover object-center" />
          <p className="text-center pt-2 ">A very good movie</p>
        </SwiperSlide>
      )}
      </Swiper>
      
    </div>
  )
  
}

export default CardList;