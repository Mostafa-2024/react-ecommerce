import "./features.css"
import Heading from"../heading/Heading"
import  { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation } from 'swiper/modules';
import SwiperCore from 'swiper/core'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { data } from "../../data/data";
import { useEffect, useState } from "react";


SwiperCore.use([Navigation, A11y]);

function Features() {

  const[cardIndex, setCardIndex] = useState(1);

  const card = data.map((element, index) => {

    return(

      <SwiperSlide key={element.id}>
        
        <div className="card">

          <h3 className="title">{element.title}</h3>

          <img src ={element.img} alt="" />

          <span className="one">{element.price}<span className="two">{element.altPrice}</span></span>

        </div>

      </SwiperSlide>
      
    )

  })
  
  function increaseCardIndex() {

    setCardIndex(v => v + 1);

  }

  function decreaseCardIndex() {

    setCardIndex(v => v - 1);

  }

  useEffect(() => {

    let cards = document.querySelectorAll(".card");

    cards.forEach(el => {

      el.style.opacity = .2;
    })

    cards[cardIndex].style.opacity = 1;
    cards[cardIndex].style.scale = (1.1);

  }, [cardIndex])
  
  useEffect(() => {

      let nextSlide = document.querySelector(".swiper-button-next");

      let prevSlide = document.querySelector(".swiper-button-prev");
  
      nextSlide.addEventListener("click", increaseCardIndex)

      prevSlide.addEventListener("click", decreaseCardIndex)

  }, [])

  return (
    <>
      <Heading title="Featured Products" />

      <div className="container parent">

        <Swiper spaceBetween={50} slidesPerView={3} navigation pagination={{ clickable: true }} scrollbar={{ draggable: true }}>

          {card}

        </Swiper>

      </div>
  </>

    
  )
}

export default Features;

